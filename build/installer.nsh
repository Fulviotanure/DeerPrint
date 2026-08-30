!macro customInstall
  DetailPrint "Verificando instalacao legada do ScreenshotMark..."

  ; Encerra qualquer instancia do ScreenshotMark ainda rodando
  nsExec::Exec 'taskkill /F /IM ScreenshotMark.exe /T'

  ; Executa o desinstalador silencioso do ScreenshotMark antigo se existir
  ${if} ${FileExists} "$LOCALAPPDATA\Programs\screenshotmark\Uninstall ScreenshotMark.exe"
    DetailPrint "Removendo versao anterior do ScreenshotMark..."
    ExecWait '"$LOCALAPPDATA\Programs\screenshotmark\Uninstall ScreenshotMark.exe" /S _?=$LOCALAPPDATA\Programs\screenshotmark'
  ${endif}

  ; Remove atalhos antigos na Area de Trabalho e Menu Iniciar
  Delete "$DESKTOP\ScreenshotMark.lnk"
  Delete "$SMPROGRAMS\ScreenshotMark.lnk"
  Delete "$SMPROGRAMS\ScreenshotMark\ScreenshotMark.lnk"
  RMDir /r "$SMPROGRAMS\ScreenshotMark"

  ; Remove pasta residual do ScreenshotMark se ainda existir
  ${if} ${FileExists} "$LOCALAPPDATA\Programs\screenshotmark"
    RMDir /r "$LOCALAPPDATA\Programs\screenshotmark"
  ${endif}

  ; Limpa chaves de desinstalacao do registro do Windows
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\com.screenshotmark.app"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\ScreenshotMark"

  ; Limpa entradas legadas de inicializacao com o Windows
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "electron.app.ScreenshotMark"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "ScreenshotMark"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "electron.app.Electron"
!macroend
