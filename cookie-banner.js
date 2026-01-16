// Cookie Banner Funktionalität
(function() {
    'use strict';

    const COOKIE_CONSENT_KEY = 'tekku_cookie_consent';
    
    // Prüfe ob bereits Zustimmung gegeben wurde
    function hasConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
    }
    
    // Speichere Zustimmung
    function saveConsent() {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    }
    
    // Erstelle Cookie Banner
    function createCookieBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <p><strong>🍪 Cookies & Datenschutz</strong></p>
                    <p>Diese Website nutzt essentielle Cookies für die grundlegende Funktionalität. 
                    GitHub Pages kann technische Daten wie IP-Adressen erfassen. 
                    Mehr Informationen finden Sie in unserer 
                    <a href="dataprivacy.html" target="_blank">Datenschutzerklärung</a>.</p>
                </div>
                <div class="cookie-banner-actions">
                    <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Verstanden</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Event Listener für Accept Button
        document.getElementById('cookie-accept').addEventListener('click', function() {
            saveConsent();
            hideBanner();
        });
    }
    
    // Verstecke Banner
    function hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.opacity = '0';
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }
    
    // Initialisierung beim Laden der Seite
    function init() {
        if (!hasConsent()) {
            // Warte kurz bis DOM vollständig geladen ist
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', createCookieBanner);
            } else {
                createCookieBanner();
            }
        }
    }
    
    init();
})();
