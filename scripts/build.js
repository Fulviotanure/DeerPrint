const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tempOutDir = path.join(os.tmpdir(), 'deerprint-build-' + Date.now());
const finalDistDir = path.join(__dirname, '../dist');
const oldVersionsDir = path.join(finalDistDir, 'versoes_antigas');

console.log('Building in isolated directory:', tempOutDir);

try {
  if (!fs.existsSync(finalDistDir)) {
    fs.mkdirSync(finalDistDir, { recursive: true });
  }

  if (!fs.existsSync(oldVersionsDir)) {
    fs.mkdirSync(oldVersionsDir, { recursive: true });
  }

  // Mover arquivos de compilações anteriores para a pasta versoes_antigas
  console.log('Verificando e arquivando versões anteriores em dist/versoes_antigas/...');
  const currentDistFiles = fs.readdirSync(finalDistDir);
  for (const item of currentDistFiles) {
    const itemPath = path.join(finalDistDir, item);
    // Ignorar a própria pasta versoes_antigas ou outros diretórios
    if (item === 'versoes_antigas' || fs.statSync(itemPath).isDirectory()) {
      continue;
    }
    const destPath = path.join(oldVersionsDir, item);
    try {
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
      }
      fs.renameSync(itemPath, destPath);
      console.log(`Arquivado: ${item} -> versoes_antigas/${item}`);
    } catch (moveErr) {
      console.warn(`Aviso ao arquivar ${item}:`, moveErr.message);
    }
  }

  // Run electron-builder with isolated temp directory
  execSync(`npx electron-builder --win --config.directories.output="${tempOutDir.replace(/\\/g, '/')}"`, {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });

  console.log('Copying new release installer to dist/...');
  const files = fs.readdirSync(tempOutDir);
  for (const file of files) {
    const srcFile = path.join(tempOutDir, file);
    const destFile = path.join(finalDistDir, file);
    if (file.endsWith('.exe') || file.endsWith('.blockmap') || file.endsWith('.yml')) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied ${file} -> dist/${file}`);
    }
  }
  console.log('Build completed successfully!');
} catch (err) {
  console.error('Build error:', err.message);
  process.exit(1);
} finally {
  try {
    fs.rmSync(tempOutDir, { recursive: true, force: true });
  } catch (e) {}
}
