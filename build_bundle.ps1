# Windows PowerShell wrapper for cross-platform Node.js bundler
Write-Host "Running cross-platform build.js..."
if (Get-Command node -ErrorAction SilentlyContinue) {
    node build.js
} elseif (Test-Path "C:\Users\surya\node-v20\node-v20.18.0-win-x64\node.exe") {
    & "C:\Users\surya\node-v20\node-v20.18.0-win-x64\node.exe" build.js
} else {
    Write-Error "Node.js not found in PATH"
}

