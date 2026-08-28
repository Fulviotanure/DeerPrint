const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version || '1.0.0';

// Calcular versão sugerida (patch: 2.0.1 -> 2.0.2)
const parts = currentVersion.split('.').map(Number);
const nextPatch = `${parts[0]}.${parts[1]}.${(parts[2] || 0) + 1}`;
const nextMinor = `${parts[0]}.${(parts[1] || 0) + 1}.0`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=========================================');
console.log('   LANÇAMENTO DE VERSÃO (GITHUB ACTIONS)');
console.log('=========================================');
console.log(`Versão Atual: v${currentVersion}`);
console.log(`1) Próximo Patch: v${nextPatch} (Correções / melhorias)`);
console.log(`2) Próximo Minor: v${nextMinor} (Novas funcionalidades)`);
console.log(`3) Digitar manualmente`);
console.log('-----------------------------------------');

rl.question(`Escolha uma opção ou pressione ENTER para v${nextPatch}: `, (answer) => {
  let targetVersion = nextPatch;
  const trimmed = answer.trim();

  if (trimmed === '1' || trimmed === '') {
    targetVersion = nextPatch;
  } else if (trimmed === '2') {
    targetVersion = nextMinor;
  } else if (trimmed === '3') {
    rl.question('Digite o número da versão (ex: 2.0.2): ', (manualVer) => {
      proceedWithVersion(manualVer.trim().replace(/^v/, ''));
    });
    return;
  } else if (trimmed.includes('.')) {
    targetVersion = trimmed.replace(/^v/, '');
  }

  proceedWithVersion(targetVersion);
});

function proceedWithVersion(version) {
  if (!version || !/^\d+\.\d+\.\d+/.test(version)) {
    console.error(`\n❌ Versão inválida: "${version}". Use o formato X.Y.Z (ex: 2.0.2)`);
    rl.close();
    process.exit(1);
  }

  console.log(`\n🚀 Preparando lançamento da versão v${version}...`);

  // 1. Atualizar package.json
  packageJson.version = version;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`✅ package.json atualizado para v${version}`);

  try {
    // 2. Git add e commit
    console.log('📦 Adicionando alterações ao Git...');
    execSync('git add .', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

    console.log(`📝 Criando commit de release...`);
    try {
      execSync(`git commit -m "chore(release): v${version}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    } catch (e) {
      console.log('Nenhuma mudança extra para commitar além dos arquivos preparados.');
    }

    // 3. Criar tag Git
    const tagName = `v${version}`;
    console.log(`🏷️ Criando Tag Git: ${tagName}...`);
    execSync(`git tag -a ${tagName} -m "Release ${tagName}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });

    // 4. Git Push
    console.log(`☁️ Enviando commit e tag para o GitHub...`);
    execSync('git push origin HEAD', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    execSync(`git push origin ${tagName}`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });

    console.log('\n=============================================================');
    console.log(`🎉 SUCESSO! A tag ${tagName} foi enviada para o GitHub!`);
    console.log('O GitHub Actions já começou a compilar e publicar a versão na nuvem.');
    console.log('Acompanhe o progresso em:');
    console.log(`https://github.com/${packageJson.build?.publish?.owner || 'Fulviotanure'}/${packageJson.build?.publish?.repo || 'screenshotmark'}/actions`);
    console.log('=============================================================\n');
  } catch (err) {
    console.error('\n❌ Erro durante o processo do Git:', err.message);
  } finally {
    rl.close();
  }
}
