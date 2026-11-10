@echo off
chcp 65001 > nul
echo ========================================================
echo   ENVIANDO VERSAO 3.1.0 PARA O GITHUB (RELEASE / NUVEM)
echo ========================================================
echo.
git push origin main
git push origin v3.1.0
echo.
echo ========================================================
echo Concluido! Se abriu uma janela do navegador, confirme
echo o login do GitHub para autorizar o envio.
echo ========================================================
pause
