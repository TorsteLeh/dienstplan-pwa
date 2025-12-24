/**
 * Konfiguration der App-Daten (Zentrale Datenbank)
 * Clean Code Prinzip: Trennung von Daten und Logik
 */
const APP_DATA = {
    names: [
        "", "Oehmichen V.", "Haubold G.", "Kaubisch D.", "Hanspach B.-D.", 
        "Reichelt Oliver", "Werner Manuela", "Fuchs Salome", "Fuchs Elke", 
        "Fuchs Simon", "Lorek Rüdiger", "Reichelt O.", "Antrack M.", 
        "Lehmann T.", "Schade H.", "Werner E.", "Werner A.", "Buch E.", 
        "Quinque K.-U.", "Fuchs C.", "Hanspach R."
    ],
    statusOptions: ["", "SAAL", "Zoom/Saal", "Saal/Zoom"],
    tasks: [
        // Sektion 1
        { label: "Schätze aus Gottes Wort", type: "header" },
        { label: "Vorsitzender", type: "row" },
        { label: "Anfangsgebet", type: "row" },
        { label: "1. Schätze aus Gottes Wort", type: "row" },
        { label: "2. nach geistigen Schätzen graben", type: "row" },
        { label: "3. Bibellesung", type: "row" },
        { type: "divider" },

        // Sektion 2
        { label: "Uns im Dienst verbessern", type: "header" },
        { label: "4. Gespräche beginnen", type: "row" },
        { label: "5. Interesse fördern", type: "row" },
        { label: "6. Menschen zu Jüngern machen", type: "row" },
        { type: "divider" },

        // Sektion 3
        { label: "Unser Leben als Christ", type: "header" },
        { label: "7. besonderes Thema", type: "row" },
        { label: "8. Leiter des Versammlungsbibelstudiums", type: "row" },
        { type: "divider" },
        { label: "Leser", type: "row" },
        { label: "Schlussgebet", type: "row" },

        // Sektion 4 (Dienste)
        { label: "Dienste", type: "header", subLabel: "Teil 1" },
        { label: "Ordner Saal", type: "row" },
        { label: "Ordner Eingang Teil 1", type: "row" },
        { label: "Ordner Eingang Teil 2", type: "row" },
        { label: "Mikrofon", type: "row", idSuffix: "1" },
        { label: "Mikrofon", type: "row", idSuffix: "2" },
        { label: "Audio", type: "row" },
        { label: "Video", type: "row" },
        { label: "Bühne", type: "row" }
    ]
};

const tableBody = document.getElementById('table-body');

const datePicker = document.getElementById('date-picker');

// Setze Standarddatum auf heute, falls nichts gewählt
const today = new Date().toISOString().split('T')[0];
datePicker.value = today;

function init() {
    renderTable();
    loadSavedData();
    
    // Event Listener für Datumswechsel
    datePicker.addEventListener('change', () => {
        loadSavedData(); // Lade Daten für das neue Datum
    });
}

// Geänderte Speicher-Funktion mit Datum im Key
function saveData() {
    const row = this.closest('tr');
    if (!row) return;
    const date = datePicker.value;
    const id = row.dataset.id;
    const type = this.classList.contains('name-select') ? 'name' : 'status';
    
    // Key-Format: "2025-12-26-task-0-name"
    localStorage.setItem(`${date}-${id}-${type}`, this.value);
}

// Geänderte Lade-Funktion
function loadSavedData() {
    const date = datePicker.value;
    document.querySelectorAll('tr[data-id]').forEach(row => {
        const id = row.dataset.id;
        const nameSel = row.querySelector('.name-select');
        const statusSel = row.querySelector('.status-select');
        
        const savedName = localStorage.getItem(`${date}-${id}-${name}-name`) || "";
        const savedStatus = localStorage.getItem(`${date}-${id}-${status}-status`) || "";

        // Wichtig: Wir laden den Wert passend zum aktuellen Datum
        nameSel.value = localStorage.getItem(`${date}-${id}-name`) || "";
        statusSel.value = localStorage.getItem(`${date}-${id}-status`) || "";
    });
}

// Den Rest (renderTable, generateOptions, etc.) behältst du bei.

/**
 * Initialisiert die Tabelle und lädt gespeicherte Daten
 */
function init() {
    renderTable();
    loadSavedData();
}

/**
 * Erstellt das HTML der Tabelle basierend auf der APP_DATA Liste
 */
function renderTable() {
    let html = "";
    APP_DATA.tasks.forEach((item, index) => {
        const uniqueId = `task-${index}${item.idSuffix || ''}`;

        if (item.type === "row") {
            html += `
                <tr data-id="${uniqueId}">
                    <td class="label-cell">${item.label}</td>
                    <td><select class="name-select">${generateOptions(APP_DATA.names)}</select></td>
                    <td><select class="status-select">${generateOptions(APP_DATA.statusOptions)}</select></td>
                </tr>`;
        } else if (item.type === "header") {
            const sub = item.subLabel ? `<span style="float:right; font-style:italic; font-weight:normal;">${item.subLabel}</span>` : "";
            html += `<tr class="section-header"><td colspan="3">${item.label}${sub}</td></tr>`;
        } else if (item.type === "divider") {
            html += `<tr><td colspan="2" class="yellow-divider"></td><td class="yellow-divider"></td></tr>`;
        }
    });
    tableBody.innerHTML = html;

    // Event Listener für alle Select-Felder hinzufügen
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', saveData);
    });
}

function generateOptions(array) {
    return array.map(opt => `<option value="${opt}">${opt}</option>`).join('');
}

function saveData() {
    const row = this.closest('tr');
    if (!row) return;
    const id = row.dataset.id;
    const type = this.classList.contains('name-select') ? 'name' : 'status';
    localStorage.setItem(`${id}-${type}`, this.value);
}

function loadSavedData() {
    document.querySelectorAll('tr[data-id]').forEach(row => {
        const id = row.dataset.id;
        const nameSel = row.querySelector('.name-select');
        const statusSel = row.querySelector('.status-select');
        
        const savedName = localStorage.getItem(`${id}-name`);
        const savedStatus = localStorage.getItem(`${id}-status`);

        if (savedName) nameSel.value = savedName;
        if (savedStatus) statusSel.value = savedStatus;
    });
}

// Globaler Reset
document.getElementById('clear-btn').addEventListener('click', () => {
    if(confirm("Alle eingetragenen Namen und Status-Werte wirklich löschen?")) {
        localStorage.clear();
        location.reload();
    }
});

init();