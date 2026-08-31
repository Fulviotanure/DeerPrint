const { desktopCapturer, screen, app } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');

function getNativeCaptureExePath() {
  const devPath = path.join(__dirname, 'native', 'ScreenCapture.exe');
  if (fs.existsSync(devPath)) return devPath;

  if (app.isPackaged) {
    const unpackedPath = path.join(process.resourcesPath, 'app.asar.unpacked', 'src', 'main', 'native', 'ScreenCapture.exe');
    if (fs.existsSync(unpackedPath)) return unpackedPath;
  }
  return devPath;
}

async function captureWithNativeGDI(activeDisplay) {
  return new Promise((resolve, reject) => {
    const captureExe = getNativeCaptureExePath();
    if (!fs.existsSync(captureExe)) {
      return reject(new Error(`ScreenCapture.exe nativo não encontrado em: ${captureExe}`));
    }

    const tempPath = path.join(app.getPath('temp'), `native_cap_${Date.now()}_${Math.random().toString(36).substr(2, 6)}.png`);

    execFile(
      captureExe,
      ['--cursor', tempPath],
      { windowsHide: true },
      async (err, stdout, stderr) => {
        if (err) {
          return reject(new Error(`Falha na captura nativa GDI: ${stderr || err.message}`));
        }

        try {
          if (!fs.existsSync(tempPath)) {
            return reject(new Error('Arquivo temporário de captura não gerado'));
          }

          const buf = await fs.promises.readFile(tempPath);
          fs.promises.unlink(tempPath).catch(() => {});

          const dataUrl = `data:image/png;base64,${buf.toString('base64')}`;
          
          let width = Math.round(activeDisplay.bounds.width * (activeDisplay.scaleFactor || 1));
          let height = Math.round(activeDisplay.bounds.height * (activeDisplay.scaleFactor || 1));

          if (stdout) {
            const matchW = stdout.match(/\|W:(\d+)/);
            const matchH = stdout.match(/\|H:(\d+)/);
            if (matchW && matchH) {
              width = parseInt(matchW[1], 10);
              height = parseInt(matchH[1], 10);
            }
          }

          resolve({
            dataUrl,
            imageSize: { width, height }
          });
        } catch (readErr) {
          reject(readErr);
        }
      }
    );
  });
}

async function captureWithDesktopCapturer(activeDisplay) {
  const scaleFactor = activeDisplay.scaleFactor || 1;
  const targetWidth = Math.round(activeDisplay.bounds.width * scaleFactor);
  const targetHeight = Math.round(activeDisplay.bounds.height * scaleFactor);

  const sources = await desktopCapturer.getSources({
    types: ['screen'],
    thumbnailSize: {
      width: targetWidth,
      height: targetHeight
    },
    fetchWindowIcons: false
  });

  if (!sources || sources.length === 0) {
    throw new Error('Nenhuma fonte de tela encontrada');
  }

  let matchedSource = sources.find(s => s.display_id === activeDisplay.id.toString());
  if (!matchedSource) {
    matchedSource = sources[0];
  }

  const nativeImg = matchedSource.thumbnail;
  const dataUrl = nativeImg.toDataURL();
  const imageSize = nativeImg.getSize();

  return {
    dataUrl,
    imageSize
  };
}

async function captureActiveDisplay() {
  try {
    const cursor = screen.getCursorScreenPoint();
    const activeDisplay = screen.getDisplayNearestPoint(cursor);

    let result;
    try {
      // 1. Motor 100% Nativo do Windows (GDI BitBlt 24bpp)
      result = await captureWithNativeGDI(activeDisplay);
      console.log('✓ Captura realizada com sucesso via motor nativo GDI do Windows');
    } catch (nativeErr) {
      console.error('AVISO: Falha no motor nativo GDI, caindo para fallback:', nativeErr);
      // 2. Fallback de emergência
      result = await captureWithDesktopCapturer(activeDisplay);
    }

    return {
      success: true,
      dataUrl: result.dataUrl,
      display: {
        id: activeDisplay.id,
        bounds: activeDisplay.bounds,
        scaleFactor: activeDisplay.scaleFactor
      },
      imageSize: result.imageSize
    };
  } catch (error) {
    console.error('Erro ao capturar tela:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  captureActiveDisplay
};
