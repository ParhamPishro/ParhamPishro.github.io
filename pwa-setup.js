// PWA Setup Script - Dynamically adds PWA meta tags and registers service worker
(function() {
    // Add PWA Meta Tags to <head>
    const head = document.head;
    
    // Theme color
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#06b6d4';
    head.appendChild(themeColor);
    
    // Apple mobile web app capable
    const appleCapable = document.createElement('meta');
    appleCapable.name = 'apple-mobile-web-app-capable';
    appleCapable.content = 'yes';
    head.appendChild(appleCapable);
    
    // Apple status bar style
    const appleStatusBar = document.createElement('meta');
    appleStatusBar.name = 'apple-mobile-web-app-status-bar-style';
    appleStatusBar.content = 'black-translucent';
    head.appendChild(appleStatusBar);
    
    // Apple app title
    const appleTitle = document.createElement('meta');
    appleTitle.name = 'apple-mobile-web-app-title';
    appleTitle.content = 'AA Portfolio';
    head.appendChild(appleTitle);
    
    // Manifest link
    const manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = '/manifest.json';
    head.appendChild(manifest);
    
    // Icon 192x192
    const icon192 = document.createElement('link');
    icon192.rel = 'icon';
    icon192.type = 'image/png';
    icon192.sizes = '192x192';
    icon192.href = '/assets/icon-192x192.png';
    head.appendChild(icon192);
    
    // Icon 512x512
    const icon512 = document.createElement('link');
    icon512.rel = 'icon';
    icon512.type = 'image/png';
    icon512.sizes = '512x512';
    icon512.href = '/assets/icon-512x512.png';
    head.appendChild(icon512);
    
    // Apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = '/assets/icon-512x512.png';
    head.appendChild(appleTouchIcon);
    
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ Service Worker registered successfully:', registration.scope);
                })
                .catch(error => {
                    console.log('❌ Service Worker registration failed:', error);
                });
        });
    }
    
    console.log('✅ PWA Setup completed!');
})();