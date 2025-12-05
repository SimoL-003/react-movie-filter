# Film Catalogue App

## Italiano

Un’applicazione React che mostra un catalogo di film filtrabili per titolo e genere, con la possibilità di aggiungere nuovi film tramite un form dedicato.  
L’interfaccia è semplice, responsive e include un modale per l’inserimento dei film.

---

### Descrizione

Questo progetto permette di visualizzare un elenco di film predefinito e di filtrarli dinamicamente tramite un form di ricerca.  
L’utente può inoltre aggiungere nuovi film selezionando un genere esistente oppure creando un genere personalizzato.

Il sistema di filtri permette combinazioni: è possibile filtrare per titolo, per genere o usare entrambi contemporaneamente.

---

### Tecnologie utilizzate

- **React** — struttura dell’applicazione e gestione dello stato
- **JavaScript** — logica dei filtri e del form
- **CSS / Tailwind** — layout responsive e stile dell’interfaccia
- **Componenti riutilizzabili** — separazione logica tra form, card e modale

---

### Funzionalità principali

- Visualizzazione dinamica del catalogo film
- Filtri in tempo reale per:
  - Titolo
  - Genere
- Creazione automatica della lista generi in base ai film presenti
- Aggiunta di nuovi film con:
  - Titolo personalizzato
  - Genere selezionabile o nuovo genere definito dall’utente
- Modale dedicata per l’inserimento dei film
- Reset automatico dei campi dopo l’aggiunta
- Interfaccia responsive

---

### Logica di funzionamento

1. L’app parte da una lista iniziale di film predefiniti.
2. Il sistema genera automaticamente l’elenco dei generi presenti.
3. L’utente può filtrare i film:
   - per titolo tramite una ricerca testuale
   - per genere tramite un menu a tendina
4. Ad ogni variazione dei filtri, l’elenco viene aggiornato grazie a un filtro basato su `.filter()`.
5. L’utente può aprire un modale per aggiungere un nuovo film compilando il form.
6. Il nuovo film viene aggiunto in fondo alla lista e i campi del form vengono resettati.

---

### Risultato

[https://react-catalogue-movie-filter.netlify.app/](https://react-catalogue-movie-filter.netlify.app/)
