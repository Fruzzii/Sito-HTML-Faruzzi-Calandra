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
    {
      nome: "Hotel Ambassador",
      inizio: new Date("2025-01-01"),
      fine: new Date("2025-05-31"),
      immagine: "img/parigi/casa1a.jpg",
      immagine2: "img/parigi/casa1b.jpg",
      immagine3: "img/parigi/casa1c.jpg",
      descrizione: "Eleganza classica a due passi dagli Champs-Élysées, perfetto per una vacanza romantica.",
      host: "Marie Dupont",
      prezzo: 330,
      disponibilita: "1 Gennaio - 31 Maggio 2025"
    },
    {
      nome: "Hotel Belvedere",
      inizio: new Date("2025-04-20"),
      fine: new Date("2025-10-30"),
      immagine: "img/parigi/casa2a.jpg",
      immagine2: "img/parigi/casa2b.jpg",
      immagine3: "img/parigi/casa2c.jpg",
      descrizione: "Alloggio moderno con vista sulla Torre Eiffel e facile accesso ai musei principali.",
      host: "Jacques Moreau",
      prezzo: 275,
      disponibilita: "20 Aprile - 30 Novembre 2025"
    },
    {
      nome: "Hotel Lafayette",
      inizio: new Date("2025-03-04"),
      fine: new Date("2025-12-31"),
      immagine: "img/parigi/casa3a.jpg",
      immagine2: "img/parigi/casa3b.jpg",
      immagine3: "img/parigi/casa3c.jpg",
      descrizione: "Un’esperienza luminosa nel cuore del Marais, tra boutique e bistrot parigini.",
      host: "Claude Bernard",
      prezzo: 350,
      disponibilita: "4 Marzo - 31 Dicembre 2025"
    },
    {
      nome: "Hotel Etoile",
      inizio: new Date("2025-02-01"),
      fine: new Date("2025-08-31"),
      immagine: "img/parigi/casa4a.jpg",
      immagine2: "img/parigi/casa4b.jpg",
      immagine3: "img/parigi/casa4c.jpg",
      descrizione: "Camere raffinate nel quartiere dell’Arco di Trionfo, ideale per esplorare la città a piedi.",
      host: "Elise Girard",
      prezzo: 235,
      disponibilita: "1 Febbraio - 31 Agosto 2025"
    },
    {
      nome: "Hotel Peyris Opera",
      inizio: new Date("2025-04-20"),
      fine: new Date("2025-09-30"),
      immagine: "img/parigi/casa5a.jpg",
      immagine2: "img/parigi/casa5b.jpg",
      immagine3: "img/parigi/casa5c.jpg",
      descrizione: "Incantevole soggiorno sulla collina degli artisti, vicino alla Basilica del Sacro Cuore.",
      host: "Victor Lefevre",
      prezzo: 400,
      disponibilita: "20 Aprile - 30 Settembre"
    },
    {
      nome: "Hotel Parisian",
      inizio: new Date("2025-01-01"),
      fine: new Date("2025-12-31"),
      immagine: "img/parigi/casa6a.jpg",
      immagine2: "img/parigi/casa6b.jpg",
      immagine3: "img/parigi/casa6c.jpg",
      descrizione: "Accogliente sistemazione vicino al Louvre e alla Senna, perfetta per amanti della cultura.",
      host: "Isabelle Petit",
      prezzo: 350,
      disponibilita: "1 Gennaio - 31 Dicembre 2025"
    },
    
    {
      nome: "Hotel Santorini",
      inizio: new Date("2025-04-10"),
      fine: new Date("2025-09-15"),
      immagine: "img/santorini/casa1a.jpg",
      immagine2: "img/santorini/casa1b.jpg",
      immagine3: "img/santorini/casa1c.jpg",
      descrizione: "Romantico rifugio con terrazza sul mare e accesso ai tipici vicoli di Fira.",
      host: "Nikos Papadopoulos",
      prezzo: 250,
      disponibilita: "10 Aprile - 15 Settembre 2025"
    },
    {
      nome: "Oia Blue View",
      inizio: new Date("2025-06-1"),
      fine: new Date("2025-09-30"),
      immagine: "img/santorini/casa2a.jpg",
      immagine2: "img/santorini/casa2b.jpg",
      immagine3: "img/santorini/casa2c.jpg",
      descrizione: "Panorama impareggiabile sulla Caldera direttamente da una villa tradizionale.",
      host: "Maria Konstantinou",
      prezzo: 290,
      disponibilita: "1 Giugno - 30 Settembre 2025"
    },
    {
      nome: "Caldera Retreat",
      inizio: new Date("2025-06-30"),
      fine: new Date("2025-08-31"),
      immagine: "img/santorini/casa3a.jpg",
      immagine2: "img/santorini/casa3b.jpg",
      immagine3: "img/santorini/casa3c.jpg",
      descrizione: "Ritiro esclusivo con piscina a sfioro, ideale per una fuga nel lusso.",
      host: "Alexandros Markakis",
      prezzo: 240,
      disponibilita: "30 Giugno - 31 Agosto 2025"
    },
    {
      nome: "Aegean Horizon",
      inizio: new Date("2025-03-01"),
      fine: new Date("2025-09-20"),
      immagine: "img/santorini/casa4a.jpg",
      immagine2: "img/santorini/casa4b.jpg",
      immagine3: "img/santorini/casa4c.jpg",
      descrizione: "Vista infinita sull’Egeo da ogni finestra, perfetta per ammirare l’alba.",
      host: "Elena Vasilakis",
      prezzo: 220,
      disponibilita: "1 Marzo - 20 Settembre 2025"
    },
    {
      nome: "Sunset Villas",
      inizio: new Date("2025-05-15"),
      fine: new Date("2025-09-10"),
      immagine: "img/santorini/casa5a.jpg",
      immagine2: "img/santorini/casa5b.jpg",
      immagine3: "img/santorini/casa5c.jpg",
      descrizione: "Alloggio suggestivo a picco sul mare, perfetto per tramonti indimenticabili.",
      host: "Yiannis Papadakis",
      prezzo: 315,
      disponibilita: "15 Maggio - 10 Settembre 2025"
    },
    {
      nome: "Santorini Escape",
      inizio: new Date("2025-07-01"),
      fine: new Date("2025-08-31"),
      immagine: "img/santorini/casa6a.jpg",
      immagine2: "img/santorini/casa6b.jpg",
      immagine3: "img/santorini/casa6c.jpg",
      descrizione: "Eleganza cicladica e tranquillità, immersa nella quiete dell’isola.",
      host: "Katerina Nikolaou",
      prezzo: 195,
      disponibilita: "1 Luglio - 31 Agosto 2025"
    },
    {
      nome: "Hotel New York",
      inizio: new Date("2025-05-20"),
      fine: new Date("2025-11-05"),
      immagine: "img/new york/casa1a.jpg",
      immagine2: "img/new york/casa1b.jpg",
      immagine3: "img/new york/casa1c.jpg",
      descrizione: "Case bianche, cupole blu e tramonti mozzafiato sull’Egeo.",
      host: "Thomas Harrison",
      prezzo: 515,
      disponibilita: "20 Maggio - 05 Novembre 2025"
    },
    {
      nome: "Manhattan Loft",
      inizio: new Date("2025-06-15"),
      fine: new Date("2025-10-05"),
      immagine: "img/new york/casa2a.jpg",
      immagine2: "img/new york/casa2b.jpg",
      immagine3: "img/new york/casa2c.jpg",
      descrizione: "Appartamenti eleganti nel cuore pulsante di Manhattan, vicino a tutte le principali attrazioni.",
      host: "Jonathan Taylor",
      prezzo: 400,
      disponibilita: "15 Giugno - 05 Ottobre 2025"
    },
    {
      nome: "Brooklyn Heights Retreat",
      inizio: new Date("2025-01-01"),
      fine: new Date("2025-09-30"),
      immagine: "img/new york/casa3a.jpg",
      immagine2: "img/new york/casa3b.jpg",
      immagine3: "img/new york/casa3c.jpg",
      descrizione: "Un rifugio tranquillo con vista sullo skyline di Manhattan e sulla Brooklyn Bridge.",
      host: "Amanda Richards",
      prezzo: 390,
      disponibilita: "1 Gennaio - 30 Settembre 2025"
    },
    {
      nome: "Central Park Apartments",
      inizio: new Date("2025-04-25"),
      fine: new Date("2025-12-15"),
      immagine: "img/new york/casa4a.jpg",
      immagine2: "img/new york/casa4b.jpg",
      immagine3: "img/new york/casa4c.jpg",
      descrizione: "Elegante appartamento con vista spettacolare su Central Park.",
      host: "David Cohen",
      prezzo: 300,
      disponibilita: "25 Aprile - 15 Dicembre 2025"
    },
    {
      nome: "Soho Design Studio",
      inizio: new Date("2025-03-01"),
      fine: new Date("2025-10-20"),
      immagine: "img/new york/casa5a.jpg",
      immagine2: "img/new york/casa5b.jpg",
      immagine3: "img/new york/casa5c.jpg",
      descrizione: "Appartamento di design nel quartiere più trendy di New York, a pochi passi da gallerie e negozi di tendenze.",
      host: "Emily Johnson",
      prezzo: 450,
      disponibilita: "01 Marzo - 20 Ottobre 2025"
    },
    {
      nome: "Times Square Luxury",
      inizio: new Date("2025-06-10"),
      fine: new Date("2025-09-30"),
      immagine: "img/new york/casa6a.jpg",
      immagine2: "img/new york/casa6b.jpg",
      immagine3: "img/new york/casa6c.jpg",
      descrizione: "Lusso e comfort nel cuore di Times Square, a pochi passi da teatri e ristoranti di classe mondiale.",
      host: "Sophia Williams",
      prezzo: 700,
      disponibilita: "10 Giugno - 30 Settembre 2025"
    },
    {
      nome: "Hotel Kyoto",
      inizio: new Date("2025-02-10"),
      fine: new Date("2025-08-30"),
      immagine: "img/kyoto/casa1a.jpg",
      immagine2: "img/kyoto/casa1b.jpg",
      immagine3: "img/kyoto/casa1c.jpg",
      descrizione: "Lusso e comfort nel cuore di Kyoto, a pochi passi da teatri e ristoranti di classe mondiale.",
      host: "Kim Hokamotio",
      prezzo: 290,
      disponibilita: "10 Febbraio - 30 Agosto 2025"
    },
    {
      nome: "Zen Garden Villa",
      inizio: new Date("2025-05-20"),
      fine: new Date("2025-12-10"),
      immagine: "img/kyoto/casa2a.jpg",
      immagine2: "img/kyoto/casa2b.jpg",
      immagine3: "img/kyoto/casa2c.jpg",
      descrizione: "Un rifugio tranquillo con vista sul giardino zen, per una pausa di pace e serenità.",
      host: "Hiroshi Tanaka",
      prezzo: 250,
      disponibilita: "20 Maggio - 10 Dicembre 2025"
    },
    {
      nome: "Kiyomizu View House",
      inizio: new Date("2025-09-01"),
      fine: new Date("2025-12-31"),
      immagine: "img/kyoto/casa3a.jpg",
      immagine2: "img/kyoto/casa3b.jpg",
      immagine3: "img/kyoto/casa3c.jpg",
      descrizione: "Casa elegante con vista spettacolare sul famoso tempio di Kiyomizu.",
      host: "Yuki Sato",
      prezzo: 210,
      disponibilita: "1 Settembre - 31 Dicembre 2025"
    },
    {
      nome: "Kyoto Traditional Home",
      inizio: new Date("2025-01-05"),
      fine: new Date("2025-06-30"),
      immagine: "img/kyoto/casa4a.jpg",
      immagine2: "img/kyoto/casa4b.jpg",
      immagine3: "img/kyoto/casa4c.jpg",
      descrizione: "Vivi l'autentica cultura giapponese in una casa tradizionale con tatami e futon.",
      host: "Mika Nakamura",
      prezzo: 195,
      disponibilita: "5 Gennaio - 30 Giugno 2025"
    },
    {
      nome: "Popi Residence Village",
      inizio: new Date("2025-06-15"),
      fine: new Date("2025-07-05"),
      immagine: "img/kyoto/casa5a.jpg",
      immagine2: "img/kyoto/casa5b.jpg",
      immagine3: "img/kyoto/casa5c.jpg",
      descrizione: "Elegante residenza nel quartiere storico di Gion, vicino a tradizionali case da tè e templi.",
      host: "Haruto Fujimoto",
      prezzo: 280,
      disponibilita: "15 Maggio - 05 Settembre 2025"
    },
    {
      nome: "Arashiyama Retreat",
      inizio: new Date("2025-08-01"),
      fine: new Date("2025-12-20"),
      immagine: "img/kyoto/casa6a.jpg",
      immagine2: "img/kyoto/casa6b.jpg",
      immagine3: "img/kyoto/casa6c.jpg",
      descrizione: "Un rifugio immerso nella natura di Arashiyama, famosa per il bosco di bambù e i templi storici.",
      host: "Nao Yamada",
      prezzo: 260,
      disponibilita: "01 Agosto - 20 Dicembre 2025"
    },
    {
      nome: "Monti Bormio",
      inizio: new Date("2025-05-01"),
      fine: new Date("2025-06-30"),
      immagine: "img/bormio/casa1a.jpg",
      immagine2: "img/bormio/casa1b.jpg",
      immagine3: "img/bormio/casa1c.jpg",
      descrizione: "Un rifugio immerso nella natura di Arashiyama, famosa per il bosco di bambù e i templi storici.",
      host: "Leonardo Rossi",
      prezzo: 250,
      disponibilita: "1 Maggio - 30 Giugno 2025"
    },
    {
      nome: "Valle Serpentina",
      inizio: new Date("2025-01-01"),
      fine: new Date("2025-07-25"),
      immagine: "img/bormio/casa2a.jpg",
      immagine2: "img/bormio/casa2b.jpg",
      immagine3: "img/bormio/casa2c.jpg",
      descrizione: "Accogliente chalet di montagna circondato dai colori autunnali delle Alpi lombarde.",
      host: "Giulia Benedetti",
      prezzo: 245,
      disponibilita: "1 Gennaio - 25 Luglio 2025"
    },
    {
      nome: "Alba Silvana",
      inizio: new Date("2025-09-15"),
      fine: new Date("2025-12-31"),
      immagine: "img/bormio/casa3a.jpg",
      immagine2: "img/bormio/casa3b.jpg",
      immagine3: "img/bormio/casa3c.jpg",
      descrizione: "Dimora rustica immersa nei boschi, ideale per un soggiorno rilassante tra la nebbia novembrina.",
      host: "Martina Colombo",
      prezzo: 320,
      disponibilita: "15 Settembre - 31 Dicembre 202"
    },
    {
      nome: "Sorgente Nascosta",
      inizio: new Date("2025-04-01"),
      fine: new Date("2025-11-20"),
      immagine: "img/bormio/casa4a.jpg",
      immagine2: "img/bormio/casa4b.jpg",
      immagine3: "img/bormio/casa4c.jpg",
      descrizione: "Casa di montagna con vista sulle sorgenti termali innevate, perfetta per l'inverno.",
      host: "Riccardo Greco",
      prezzo: 290,
      disponibilita: "1 Aprile - 20 Novembre 2025"
    },
    {
      nome: "Luna di Bormio",
      inizio: new Date("2026-01-01"),
      fine: new Date("2026-06-20"),
      immagine: "img/bormio/casa5a.jpg",
      immagine2: "img/bormio/casa5b.jpg",
      immagine3: "img/bormio/casa5c.jpg",
      descrizione: "Un appartamento elegante con camino, perfetto per le serate fredde sotto la luna alpina.",
      host: "Elena Moretti",
      prezzo: 270,
      disponibilita: "1 Gennaio - 20 Giugno 2025"
    },
    {
      nome: "Stella d’Inverno",
      inizio: new Date("2026-05-15"),
      fine: new Date("2026-09-30"),
      immagine: "img/bormio/casa6a.jpg",
      immagine2: "img/bormio/casa6b.jpg",
      immagine3: "img/bormio/casa6c.jpg",
      descrizione: "Rifugio moderno con ampie vetrate affacciate sulle piste da sci di Bormio.",
      host: "Tommaso Vitali",
      prezzo: 410,
      disponibilita: "15 Maggio - 30 Settembre 2025"
    },
    {
      nome: "Hotel Roma",
      inizio: new Date("2026-02-01"),
      fine: new Date("2026-02-20"),
      immagine: "img/roma/casa1a.jpg",
      immagine2: "img/roma/casa1b.jpg",
      immagine3: "img/roma/casa1c.jpg",
      descrizione: "Rifugio moderno con ampie vetrate affacciate sulle piste da sci di Bormio.",
      host: "Tommaso Vitali",
      prezzo: 200,
      disponibilita: "1 – 20 febbraio 2026"
    },
    {
      nome: "Hotel Venezia",
      inizio: new Date("2026-03-01"),
      fine: new Date("2026-03-20"),
      immagine: "img/roma/casa2a.jpg",
      immagine2: "img/roma/casa2b.jpg",
      immagine3: "img/roma/casa2c.jpg",
      descrizione: "Elegante residenza con terrazza panoramica nel cuore storico di Roma, a due passi dal Colosseo.",
      host: "Laura Bianchi",
      prezzo: 210,
      disponibilita: "1 – 20 marzo 2026"
    },
    {
      nome: "Hotel Firenze",
      inizio: new Date("2026-04-01"),
      fine: new Date("2026-04-20"),
      immagine: "img/roma/casa3a.jpg",
      immagine2: "img/roma/casa3b.jpg",
      immagine3: "img/roma/casa3c.jpg",
      descrizione: "Suite luminosa in stile rinascimentale, ideale per una primavera romana tra arte e cultura.",
      host: "Davide Romano",
      prezzo: 195,
      disponibilita: "1 – 20 aprile 2026"
    },
    {
      nome: "Hotel Milano",
      inizio: new Date("2026-05-01"),
      fine: new Date("2026-05-20"),
      immagine: "img/roma/casa4a.jpg",
      immagine2: "img/roma/casa4b.jpg",
      immagine3: "img/roma/casa4c.jpg",
      descrizione: "Appartamento di design nel quartiere Prati, perfetto per shopping e vita notturna.",
      host: "Federica Neri",
      prezzo: 185,
      disponibilita: "1 – 20 maggio 2026"
    },
    {
      nome: "Hotel Napoli",
      inizio: new Date("2025-06-01"),
      fine: new Date("2025-06-20"),
      immagine: "img/roma/casa5a.jpg",
      immagine2: "img/roma/casa5b.jpg",
      immagine3: "img/roma/casa5c.jpg",
      descrizione: "Camera con balcone fiorito e vista su Trastevere, perfetta per le serate d’estate.",
      host: "Gianni De Luca",
      prezzo: 175,
      disponibilita: "1 – 20 giugno 2025"
    },
    {
      nome: "Hotel Torino",
      inizio: new Date("2025-07-01"),
      fine: new Date("2025-07-20"),
      immagine: "img/roma/casa6a.jpg",
      immagine2: "img/roma/casa6b.jpg",
      immagine3: "img/roma/casa6c.jpg",
      descrizione: "Loft climatizzato con arredi moderni e posizione strategica tra Piazza di Spagna e Villa Borghese.",
      host: "Chiara Fontana",
      prezzo: 220,
      disponibilita: "1 – 20 luglio 2025"
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
