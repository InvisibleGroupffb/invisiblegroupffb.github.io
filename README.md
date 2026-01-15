# 📚 eBook Bibliothek - Invisible Group FFB

Eine wunderschöne, im ökologischen Gartenstil gestaltete Website zum Herunterladen von eBooks.

## 🌱 Features

- **Modernes Design**: Inspiriert von der GARDENA Website mit naturnahen Farben
- **Responsive**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Suchfunktion**: Durchsuchen Sie eBooks nach Titel und Tags
- **Einfaches Hinzufügen**: Neue eBooks können leicht hinzugefügt werden

## 📖 Neues eBook hinzufügen

### Schritt 1: PDF-Datei hochladen
Laden Sie Ihre PDF-Datei in den `eBooks/` Ordner hoch.

### Schritt 2: Konfiguration aktualisieren
Öffnen Sie `ebooks.json` und fügen Sie Ihr eBook zum Array hinzu:

```json
{
    "filename": "IhrEbook.pdf",
    "title": "Titel Ihres eBooks",
    "description": "Eine kurze Beschreibung des Inhalts"
}
```

### Beispiel:
```json
[
    {
        "filename": "AgriX.pdf",
        "title": "AgriX",
        "description": "Ein umfassendes Handbuch für moderne Landwirtschaft und nachhaltige Anbaumethoden."
    },
    {
        "filename": "NeuesEbook.pdf",
        "title": "Mein neues eBook",
        "description": "Beschreibung des neuen eBooks"
    }
]
```

## 🚀 Deployment

Die Website ist automatisch über GitHub Pages verfügbar unter:
`https://invisiblegroupffb.github.io/`

Nach jedem Commit werden die Änderungen automatisch live geschaltet.

## 🎨 Design-Elemente

- **Farben**: Grüntöne inspiriert von GARDENA (Primär: #2D8659)
- **Schriftart**: Montserrat für moderne Lesbarkeit
- **Icons**: Emoji für einfache, universelle Darstellung
- **Animationen**: Sanfte Hover-Effekte und Scroll-Animationen

## 📂 Projektstruktur

```
invisiblegroupffb.github.io/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Alle Styles im Gartenstil
├── script.js           # JavaScript-Logik
├── ebooks.json         # eBook-Metadaten (JSON)
├── eBooks/             # Ordner für alle PDF-Dateien
│   └── AgriX.pdf
└── README.md           # Diese Datei
```

## 💡 Tipps

- Halten Sie Dateinamen einfach und ohne Leerzeichen
- Fügen Sie aussagekräftige Beschreibungen hinzu
- Optimieren Sie PDF-Dateien für schnellere Downloads
- Aktualisieren Sie regelmäßig die eBook-Sammlung
- Die `ebooks.json` Datei muss ein gültiges JSON-Format haben

## 🌿 Motto

"Wissen kultivieren, Weisheit ernten" 🌱
