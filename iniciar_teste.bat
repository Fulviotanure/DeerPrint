@echo off
title ScreenshotMark (Modo Teste Dev)
cd /d "%~dp0"
call npm start
if %ERRORLEVEL% NEQ 0 (
  echo.
  echo Ocorreu um erro ao iniciar o aplicativo.
  pause
)
