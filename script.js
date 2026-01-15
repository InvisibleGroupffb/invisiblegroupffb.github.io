// eBook-Daten werden aus ebooks.json geladen
let ebooksConfig = [];

// Hauptfunktion zum Laden und Anzeigen der eBooks
async function loadEbooks() {
    const ebooksGrid = document.getElementById('ebooksGrid');
    
    try {
        // Lade eBook-Daten aus JSON-Datei
        const response = await fetch('ebooks.json');
        if (!response.ok) throw new Error('Fehler beim Laden der eBooks');
        ebooksConfig = await response.json();
        
        if (ebooksConfig.length === 0) {
            ebooksGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">📚</div>
                    <h3>Keine eBooks verfügbar</h3>
                    <p>Derzeit sind keine eBooks in der Bibliothek.</p>
                </div>
            `;
            return;
        }

        // eBooks-Karten erstellen
        const ebooksHTML = ebooksConfig.map(ebook => createEbookCard(ebook)).join('');
        ebooksGrid.innerHTML = ebooksHTML;
    } catch (error) {
        console.error('Fehler beim Laden der eBooks:', error);
        ebooksGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">⚠️</div>
                <h3>Fehler beim Laden</h3>
                <p>Die eBooks konnten nicht geladen werden.</p>
            </div>
        `;
    }
}

// Erstellt eine eBook-Karte
function createEbookCard(ebook) {
    const ebookPath = `eBooks/${ebook.filename}`;
    
    return `
        <div class="ebook-card" data-title="${ebook.title.toLowerCase()}">
            <div class="ebook-icon">📖</div>
            <h3 class="ebook-title">${ebook.title}</h3>
            <p class="ebook-filename">${ebook.filename}</p>
            <p class="ebook-description">${ebook.description}</p>
            <div class="ebook-actions">
                <a href="${ebookPath}" class="btn btn-download" download>
                    ⬇️ Herunterladen
                </a>
            </div>
        </div>
    `;
}

// Suchfunktion
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const ebooksGrid = document.getElementById('ebooksGrid');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const cards = ebooksGrid.querySelectorAll('.ebook-card');

        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.getAttribute('data-title');

            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Zeige "Keine Ergebnisse" wenn nichts gefunden wurde
        const existingNoResults = ebooksGrid.querySelector('.no-results');
        if (existingNoResults) {
            existingNoResults.remove();
        }

        if (visibleCount === 0 && searchTerm !== '') {
            const noResultsHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>Keine Ergebnisse gefunden</h3>
                    <p>Keine eBooks entsprechen Ihrer Suche nach "${e.target.value}"</p>
                </div>
            `;
            ebooksGrid.insertAdjacentHTML('beforeend', noResultsHTML);
        }
    });
}

// Smooth Scrolling für Navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation beim Scrollen (Optional)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Beobachte alle eBook-Karten
    setTimeout(() => {
        document.querySelectorAll('.ebook-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }, 100);
}

// Download-Tracking (Optional)
function trackDownload(filename) {
    console.log(`eBook wird heruntergeladen: ${filename}`);
    // Hier könnte Analytics-Code eingefügt werden
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    loadEbooks();
    setupSearch();
    setupSmoothScrolling();
    setupScrollAnimations();
    
    // Event Listener für Downloads hinzufügen
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-download')) {
            const filename = e.target.closest('.ebook-card').querySelector('.ebook-filename').textContent;
            trackDownload(filename);
        }
    });
});


