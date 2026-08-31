@echo off
title DeerPrint (Modo Teste Dev)
cd /d "%~dp0"

if not exist "node_modules" (
  echo Instalando dependencias do DeerPrint...
  call npm install
  if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Erro ao instalar dependencias com o npm.
    pause
    exit /b 1
  )
)

call npx electron .
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo Ocorreu um erro ao iniciar o DeerPrint em modo de teste.
  pause
)
