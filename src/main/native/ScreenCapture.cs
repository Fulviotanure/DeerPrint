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
        [DllImport("user32.dll")]
        private static extern bool SetProcessDPIAware();

        [DllImport("user32.dll", SetLastError = true)]
        private static extern bool SetProcessDpiAwarenessContext(IntPtr dpiContext);

        [DllImport("user32.dll")]
        private static extern IntPtr GetDC(IntPtr hwnd);

        [DllImport("user32.dll")]
        private static extern int ReleaseDC(IntPtr hwnd, IntPtr hdc);

        [DllImport("gdi32.dll")]
        private static extern bool BitBlt(IntPtr hdcDest, int nXDest, int nYDest, int nWidth, int nHeight, IntPtr hdcSrc, int nXSrc, int nYSrc, int dwRop);

        private const int SRCCOPY = 0x00CC0020;
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

                if (args.Length >= 4)
                {
                    int.TryParse(args[0], out x);
                    int.TryParse(args[1], out y);
                    int.TryParse(args[2], out width);
                    int.TryParse(args[3], out height);
                }
                if (args.Length >= 5)
                {
                    outputPath = args[4];
                }

                if (width <= 0 || height <= 0)
                {
                    x = SystemInformation.VirtualScreen.Left;
                    y = SystemInformation.VirtualScreen.Top;
                    width = SystemInformation.VirtualScreen.Width;
                    height = SystemInformation.VirtualScreen.Height;
                }

                // Create a pure 24bpp RGB bitmap (100% opaque, no corrupt alpha channels, exact sRGB color reproduction)
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
                        Console.WriteLine("SUCCESS:" + outputPath);
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
