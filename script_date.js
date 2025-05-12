const localitaDisponibili = [
    {
      nome: "Gaudí Boutique",
      inizio: new Date("2025-06-15"),
      fine: new Date("2025-08-31"),
      immagine: "img/barcellona/casa1a.jpg",
      immagine2: "img/barcellona/casa1b.jpg",
      immagine3: "img/barcellona/casa1c.jpg",
      descrizione: "Una città vibrante tra arte di Gaudí, spiagge soleggiate e tapas indimenticabili.",
      host: "Carmen Torres",
      prezzo: 210,
      disponibilita: "15 giugno - 31 agosto 2025",
      citta: "Barcellona"
    },
    {
      nome: "Appartamento Costa del Sole",
      inizio: new Date("2025-03-01"),
      fine: new Date("2025-06-30"),
      immagine: "img/barcellona/casa2a.jpg",
      immagine2: "img/barcellona/casa2b.jpg",
      immagine3: "img/barcellona/casa2c.jpg",
      descrizione: "Luminoso appartamento a pochi passi dalla spiaggia, perfetto per rilassarsi sotto il sole catalano.",
      host: "Haruki Sato",
      prezzo: 190,
      disponibilita: "1 Marzo - 30 Giugno 2025",
      citta: "Barcellona"
    },
    {
      nome: "Casa Rambla",
      inizio: new Date("2025-06-15"),
      fine: new Date("2025-09-15"),
      immagine: "img/barcellona/casa3a.jpg",
      immagine2: "img/barcellona/casa3b.jpg",
      immagine3: "img/barcellona/casa3c.jpg",
      descrizione: "Elegante alloggio nel cuore del centro storico, vicino a La Rambla e al quartiere Gotico.",
      host: "Luca Bianchi",
      prezzo: 170,
      disponibilita: "15 Giugno - 15 Settembre 2025",
      citta: "Barcellona"
    },
    {
      nome: "Vista Barcellona",
      inizio: new Date("2025-06-01"),
      fine: new Date("2025-08-30"),
      immagine: "img/barcellona/casa4a.jpg",
      immagine2: "img/barcellona/casa4b.jpg",
      immagine3: "img/barcellona/casa4c.jpg",
      descrizione: "Terrazza panoramica e ambienti moderni in un quartiere tranquillo ma centrale.",
      host: "Marta Garcia",
      prezzo: 195,
      disponibilita: "1 Giugno - 30 Agosto 2025",
      citta: "Barcellona"
    },
    {
      nome: "Appartamento Mediterraneo",
      inizio: new Date("2025-02-15"),
      fine: new Date("2025-08-31"),
      immagine: "img/barcellona/casa5a.jpg",
      immagine2: "img/barcellona/casa5b.jpg",
      immagine3: "img/barcellona/casa5c.jpg",
      descrizione: "Appartamento con vista sul Mediterraneo, ideale per una vacanza romantica al mare.",
      host: "Pierre Lefevre",
      prezzo: 240,
      disponibilita: "15 Febbraio - 31 Agosto 2025",
      citta: "Barcellona"
    },
    {
      nome: "La Sagrada Stays",
      inizio: new Date("2025-08-01"),
      fine: new Date("2025-10-15"),
      immagine: "img/barcellona/casa6a.jpg",
      immagine2: "img/barcellona/casa6b.jpg",
      immagine3: "img/barcellona/casa6c.jpg",
      descrizione: "Alloggio accogliente con vista sulla Sagrada Família, perfetto per esplorare la città a piedi.",
      host: "Sofia Martinez",
      prezzo: 215,
      disponibilita: "1 Agosto - 15 Novembre 2025",
      citta: "Barcellona"
    },
    
  ];

  function mostraLocalitàDisponibili() {
  const start = new Date(document.getElementById("start-date").value);
  const end = new Date(document.getElementById("end-date").value);
  const cittaInput = document.getElementById("city").value.trim().toLowerCase();

  if (isNaN(start) || isNaN(end) || end <= start) {
    alert("Per favore, seleziona date valide.");
    return;
  }

  const risultati = localitaDisponibili.filter(loc => {
    const matchDate = start >= loc.inizio && end <= loc.fine;
    const matchCitta = cittaInput === "" || loc.citta.toLowerCase() === cittaInput;
    return matchDate && matchCitta;
  });

  if (risultati.length > 0) {
    const risultatiString = encodeURIComponent(JSON.stringify(risultati));
    const url = `prenotazioni.html?risultati=${risultatiString}&start=${start.toISOString()}&end=${end.toISOString()}&city=${encodeURIComponent(cittaInput)}`;
    window.location.href = url;
  } else {
    alert("Nessuna località disponibile per i criteri selezionati 😢");
  }
}
