$WScriptShell = New-Object -ComObject WScript.Shell
$desktopPaths = @(
    [Environment]::GetFolderPath('Desktop'),
    'C:\Users\fulvi\OneDrive\Desktop',
    'C:\Users\fulvi\Desktop'
) | Where-Object { Test-Path $_ } | Select-Object -Unique

$targetBat = 'C:\Users\fulvi\OneDrive\Desktop\deerprint\iniciar_teste.bat'
$workingDir = 'C:\Users\fulvi\OneDrive\Desktop\deerprint'
$iconPath = 'C:\Users\fulvi\OneDrive\Desktop\deerprint\src\assets\icon.ico'

foreach ($desk in $desktopPaths) {
    $shortcutPath = Join-Path $desk 'DeerPrint (Teste).lnk'
    $shortcut = $WScriptShell.CreateShortcut($shortcutPath)
    $shortcut.TargetPath = $targetBat
    $shortcut.WorkingDirectory = $workingDir
    $shortcut.Description = 'DeerPrint - Modo de Teste e Desenvolvimento'
    if (Test-Path $iconPath) {
        $shortcut.IconLocation = "$iconPath,0"
    }
    $shortcut.Save()
    Write-Output "Atalho criado com sucesso em: $shortcutPath"
}
