$files = @(
    'src/config/siteConfig.js',
    'src/data/products.js',
    'src/data/trustedClients.js',
    'src/data/corporateLogos.js',
    'src/data/ourWorkPortfolio.js',
    'src/context/CartState.js',
    'src/admin/adminStore.js',
    'src/admin/AdminLogin.js',
    'src/admin/AdminDashboard.js',
    'src/services/paymentService.js',
    'src/components/Header.js',
    'src/components/Hero.js',
    'src/components/ResinComingSoon.js',
    'src/components/ResinProductGrid.js',
    'src/components/FeatureStrip.js',
    'src/components/ProductCard.js',
    'src/components/ProductGrid.js',
    'src/components/ProductDetailModal.js',
    'src/components/PortfolioLightbox.js',
    'src/components/OurWorkPage.js',
    'src/components/CorporateGifting.js',
    'src/components/TrustedClients.js',
    'src/components/AboutSection.js',
    'src/components/CartDrawer.js',
    'src/components/CheckoutModal.js',
    'src/components/AccountTrackingPage.js',
    'src/components/WhatsAppInquiry.js',
    'src/components/DocumentModal.js',
    'src/components/Footer.js',
    'src/app.js'
)

$bundleContent = ""
foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content $f -Raw -Encoding UTF8
        # Strip export statements and import statements for standalone browser compatibility
        $content = $content -replace 'import\s+[^;]+;', ''
        $content = $content -replace 'export\s+const\s+', 'const '
        $content = $content -replace 'export\s+function\s+', 'function '
        $content = $content -replace 'export\s+class\s+', 'class '
        $content = $content -replace 'export\s+default\s+', ''
        $bundleContent += "`n/* --- $f --- */`n" + $content + "`n"
    } else {
        Write-Warning "File not found: $f"
    }
}

Set-Content -Path 'bundle.js' -Value $bundleContent -Encoding UTF8
Write-Host "Standalone bundle.js created successfully with Admin Panel and Portfolio components!"
