# Das ist ein Test einer PWA
# 📅 Dienstplan PWA - LuD Zusammenkunft

Eine moderne, leichtgewichtige **Progressive Web App (PWA)** zur Verwaltung von Dienstplänen. Diese App wurde speziell entwickelt, um Aufgabenverteilungen und Anwesenheiten (Saal/Zoom) effizient zu planen – auch ohne aktive Internetverbindung.

## ✨ Features

* **Offline-First:** Dank Service Worker funktioniert die App auch im Funkloch oder Flugmodus.
* **Datums-Management:** Integrierter Datum-Picker zur Erstellung und Speicherung von Plänen für unterschiedliche Tage.
* **Lokale Datenbank:** Alle Eingaben werden automatisch im `localStorage` des Browsers gespeichert – kein Login oder Server notwendig.
* **Installierbar:** Kann auf Android (Chrome) und iOS (Safari) als App zum Home-Bildschirm hinzugefügt werden.
* **Clean Code:** Modularer Aufbau mit strikter Trennung von HTML, CSS und JavaScript.

## 🚀 Installation & Hosting

### Nutzung via GitHub Pages
1. Lade den Code in dein GitHub-Repository hoch.
2. Gehe zu **Settings > Pages**.
3. Wähle den `main` Branch aus und klicke auf **Save**.
4. Deine App ist unter `https://deinbenutzername.github.io/dein-repo-name/` erreichbar.

### Lokale Entwicklung
1. Klone das Repository oder lade die Dateien herunter.
2. Öffne die `index.html` über einen lokalen Webserver (z.B. VS Code Erweiterung "Live Server"), damit der Service Worker korrekt registriert werden kann.

## 🛠️ Technologien

* **HTML5:** Semantische Struktur.
* **CSS3:** Responsive Design mit CSS-Variablen.
* **JavaScript (ES6):** Dynamische Tabellengenerierung und Datenpersistenz.
* **Web App Manifest:** Ermöglicht die Installation auf mobilen Endgeräten.
* **Service Worker:** Caching-Strategie für Offline-Verfügbarkeit.

## 📝 Bedienung

1. **Datum wählen:** Wähle über den Kalender oben rechts das gewünschte Datum aus.
2. **Namen & Status:** Wähle über die Dropdowns die Personen und deren Anwesenheit aus. Die App speichert jede Änderung sofort automatisch.
3. **Inhalte entfernen:** Mit dem Button "Inhalte entfernen" kannst du den Plan für das aktuell gewählte Datum (oder den gesamten Speicher) zurücksetzen.
