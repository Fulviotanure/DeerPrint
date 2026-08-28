const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tempOutDir = path.join(os.tmpdir(), 'screenshotmark-build-' + Date.now());
const finalDistDir = path.join(__dirname, '../dist');

console.log('Building in isolated directory:', tempOutDir);

try {
  if (!fs.existsSync(finalDistDir)) {
    fs.mkdirSync(finalDistDir, { recursive: true });
  }

  // Run electron-builder with isolated temp directory
  execSync(`npx electron-builder --win --config.directories.output="${tempOutDir.replace(/\\/g, '/')}"`, {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..')
  });

  console.log('Copying installer to dist/...');
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
