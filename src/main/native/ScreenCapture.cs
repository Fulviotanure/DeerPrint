using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace ScreenCapture
{
    class Program
    {
        [DllImport("user32.dll", SetLastError = true)]
        private static extern bool SetProcessDpiAwarenessContext(IntPtr dpiContext);

        [DllImport("user32.dll")]
        private static extern bool SetProcessDPIAware();

        [DllImport("user32.dll")]
        private static extern IntPtr GetDC(IntPtr hwnd);

        [DllImport("user32.dll")]
        private static extern int ReleaseDC(IntPtr hwnd, IntPtr hdc);

        [DllImport("gdi32.dll")]
        private static extern bool BitBlt(IntPtr hdcDest, int nXDest, int nYDest, int nWidth, int nHeight, IntPtr hdcSrc, int nXSrc, int nYSrc, int dwRop);

        [DllImport("user32.dll")]
        private static extern IntPtr MonitorFromPoint(POINT pt, uint dwFlags);

        [DllImport("user32.dll", CharSet = CharSet.Auto)]
        private static extern bool GetMonitorInfo(IntPtr hMonitor, ref MONITORINFOEX lpmi);

        [DllImport("user32.dll")]
        private static extern bool GetCursorPos(out POINT lpPoint);

        [StructLayout(LayoutKind.Sequential)]
        public struct POINT
        {
            public int X;
            public int Y;
        }

        [StructLayout(LayoutKind.Sequential)]
        public struct RECT
        {
            public int Left;
            public int Top;
            public int Right;
            public int Bottom;
        }

        [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Auto)]
        public struct MONITORINFOEX
        {
            public int cbSize;
            public RECT rcMonitor;
            public RECT rcWork;
            public uint dwFlags;
            [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 32)]
            public string szDevice;
        }

        private const int SRCCOPY = 0x00CC0020;
        private const uint MONITOR_DEFAULTTONEAREST = 2;
        private static readonly IntPtr DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2 = (IntPtr)(-4);

        [STAThread]
        static void Main(string[] args)
        {
            try
            {
                try
                {
                    SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);
                }
                catch
                {
                    SetProcessDPIAware();
                }

                int x = 0, y = 0, width = 0, height = 0;
                string outputPath = null;
                string deviceName = "";

                // Modo 1: --point <ptX> <ptY> <outputPath>
                // Localiza o monitor que contém esse ponto e captura seus limites físicos reais
                if (args.Length >= 4 && args[0].Equals("--point", StringComparison.OrdinalIgnoreCase))
                {
                    int ptX = 0, ptY = 0;
                    int.TryParse(args[1], out ptX);
                    int.TryParse(args[2], out ptY);
                    outputPath = args[3];

                    POINT pt = new POINT { X = ptX, Y = ptY };
                    IntPtr hMon = MonitorFromPoint(pt, MONITOR_DEFAULTTONEAREST);
                    if (hMon != IntPtr.Zero)
                    {
                        MONITORINFOEX info = new MONITORINFOEX();
                        info.cbSize = Marshal.SizeOf(typeof(MONITORINFOEX));
                        if (GetMonitorInfo(hMon, ref info))
                        {
                            x = info.rcMonitor.Left;
                            y = info.rcMonitor.Top;
                            width = info.rcMonitor.Right - info.rcMonitor.Left;
                            height = info.rcMonitor.Bottom - info.rcMonitor.Top;
                            deviceName = info.szDevice;
                        }
                    }
                }
                // Modo 2: --cursor <outputPath>
                else if (args.Length >= 2 && args[0].Equals("--cursor", StringComparison.OrdinalIgnoreCase))
                {
                    outputPath = args[1];
                    POINT pt;
                    GetCursorPos(out pt);
                    IntPtr hMon = MonitorFromPoint(pt, MONITOR_DEFAULTTONEAREST);
                    if (hMon != IntPtr.Zero)
                    {
                        MONITORINFOEX info = new MONITORINFOEX();
                        info.cbSize = Marshal.SizeOf(typeof(MONITORINFOEX));
                        if (GetMonitorInfo(hMon, ref info))
                        {
                            x = info.rcMonitor.Left;
                            y = info.rcMonitor.Top;
                            width = info.rcMonitor.Right - info.rcMonitor.Left;
                            height = info.rcMonitor.Bottom - info.rcMonitor.Top;
                            deviceName = info.szDevice;
                        }
                    }
                }
                // Modo 3: <x> <y> <width> <height> <outputPath>
                else if (args.Length >= 4)
                {
                    int.TryParse(args[0], out x);
                    int.TryParse(args[1], out y);
                    int.TryParse(args[2], out width);
                    int.TryParse(args[3], out height);
                    if (args.Length >= 5)
                    {
                        outputPath = args[4];
                    }
                }

                // Fallback para tela virtual inteira se não houver dimensões válidas
                if (width <= 0 || height <= 0)
                {
                    x = SystemInformation.VirtualScreen.Left;
                    y = SystemInformation.VirtualScreen.Top;
                    width = SystemInformation.VirtualScreen.Width;
                    height = SystemInformation.VirtualScreen.Height;
                }

                // Cria bitmap 24bpp RGB 100% fiel
                using (Bitmap bmp24 = new Bitmap(width, height, PixelFormat.Format24bppRgb))
                {
                    using (Graphics g = Graphics.FromImage(bmp24))
                    {
                        IntPtr hdcDest = g.GetHdc();
                        IntPtr hdcSrc = GetDC(IntPtr.Zero);
                        BitBlt(hdcDest, 0, 0, width, height, hdcSrc, x, y, SRCCOPY);
                        ReleaseDC(IntPtr.Zero, hdcSrc);
                        g.ReleaseHdc(hdcDest);
                    }

                    if (!string.IsNullOrEmpty(outputPath))
                    {
                        bmp24.Save(outputPath, ImageFormat.Png);
                        Console.WriteLine(string.Format("SUCCESS:{0}|X:{1}|Y:{2}|W:{3}|H:{4}|DEV:{5}", outputPath, x, y, width, height, deviceName));
                    }
                    else
                    {
                        using (MemoryStream ms = new MemoryStream())
                        {
                            bmp24.Save(ms, ImageFormat.Png);
                            byte[] bytes = ms.ToArray();
                            Console.WriteLine("BASE64:" + Convert.ToBase64String(bytes));
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine("ERROR:" + ex.Message);
                Environment.Exit(1);
            }
        }
    }
}
