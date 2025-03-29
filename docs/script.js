const statoConnessione = document.getElementById('stato-connessione');

function aggiornaStatoConnessione() {
    if (navigator.onLine) {
        statoConnessione.textContent = 'Online';
        statoConnessione.className = 'online';
    } else {
        statoConnessione.textContent = 'Offline';
        statoConnessione.className = 'offline';
    }
}

// Aggiorna lo stato iniziale
aggiornaStatoConnessione();

// Aggiorna lo stato quando cambia la connessione
window.addEventListener('online', aggiornaStatoConnessione);
window.addEventListener('offline', aggiornaStatoConnessione);