@echo off
title DeerPrint
cd /d "%~dp0"

if not exist "node_modules" (
  echo Instalando dependencias do DeerPrint...
  call npm install
)

call npx electron .
