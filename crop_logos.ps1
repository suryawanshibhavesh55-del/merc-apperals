Add-Type -AssemblyName System.Drawing

$sourcePath = 'C:/Users/surya/.gemini/antigravity/brain/c8fb2f63-0078-4771-97a8-5492ea996543/.user_uploaded/media_1788330149341.png'
$outDir = 'c:/Users/surya/Desktop/Mer C/assets/client_logos'

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir
}

$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$w = $bmp.Width
$h = $bmp.Height

# Refined tight bounding boxes for each corporate logo
$crops = @(
    @{ name = 'lakshya-shooting-club'; x = 0.07; y = 0.26; w = 0.14; h = 0.18 },
    @{ name = 'khelo-india';          x = 0.23; y = 0.26; w = 0.18; h = 0.16 },
    @{ name = 'nrai-national-rifle';  x = 0.45; y = 0.26; w = 0.16; h = 0.18 },
    @{ name = 'infosys-foundation';   x = 0.72; y = 0.24; w = 0.14; h = 0.22 },
    @{ name = 'axis-bank';            x = 0.05; y = 0.48; w = 0.27; h = 0.12 },
    @{ name = 'tir-sports';           x = 0.38; y = 0.47; w = 0.20; h = 0.14 },
    @{ name = 'accenture';            x = 0.63; y = 0.50; w = 0.25; h = 0.12 },
    @{ name = 'tiaa';                 x = 0.05; y = 0.67; w = 0.18; h = 0.10 },
    @{ name = 'stinger-drafting';     x = 0.27; y = 0.60; w = 0.14; h = 0.18 },
    @{ name = 'spotify';              x = 0.42; y = 0.67; w = 0.19; h = 0.10 },
    @{ name = 'rr-kabel';             x = 0.66; y = 0.66; w = 0.15; h = 0.12 }
)

foreach ($c in $crops) {
    $rectX = [int]($c.x * $w)
    $rectY = [int]($c.y * $h)
    $rectW = [int]($c.w * $w)
    $rectH = [int]($c.h * $h)

    $cropRect = New-Object System.Drawing.Rectangle($rectX, $rectY, $rectW, $rectH)
    $cropped = $bmp.Clone($cropRect, $bmp.PixelFormat)

    $targetFile = Join-Path $outDir "$($c.name).png"
    $cropped.Save($targetFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
}

$bmp.Dispose()
Write-Host "All corporate client logos cropped cleanly with refined bounds!"
