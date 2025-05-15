const criteri = [
    { testo: "Vicino al mare", img: "mare.jpg" },
    { testo: "Per famiglie", img: "img/famiglie.jpg" },
    { testo: "Movida notturna", img: "img/movida.jpg" },
    { testo: "Natura e trekking", img: "img/trekking.jpg" },
    { testo: "Cibo tipico", img: "img/cibo.jpg" },
    { testo: "Economico", img: "img/economico.jpg" },
    { testo: "Relax totale", img: "img/relax.jpg" }
  ];
  
  const destinazioni = [
    {
      nome: "Rimini",
      img: "img/rimini/rimini.jpg",
      img2: "img/rimini/rimini2.jpg",
      img3: "img/rimini/rimini3.jpg",
      descrizione: "Divertimento in spiaggia e vita notturna sul mare Adriatico.",
      criteri: ["Vicino al mare", "Movida notturna", "Economico"],
      prezzo: "€175",
      host: "Luca",
      periodo: "Marzo - Ottobre"
    },
    {
      nome: "Val di Fassa",
      img: "img/val di fassa/fassa.jpg",
      img2: "img/val di fassa/fassa2.jpg",
      img3: "img/val di fassa/fassa3.jpg",
      descrizione: "Panorami mozzafiato e sentieri nelle Dolomiti.",
      criteri: ["Natura e trekking", "Per famiglie", "Relax totale"],
      prezzo: "€165",
      host: "Luca",
      periodo: "Gennaio - Dicembre"

    },
    {
      nome: "Gallipoli",
      img: "img/gallipoli/gallipoli.jpg",
      img2: "img/gallipoli/gallipoli2.jpg",
      img3: "img/gallipoli/gallipoli3.jpg",
      descrizione: "Il Salento tra spiagge da sogno e musica.",
      criteri: ["Vicino al mare", "Movida notturna"],
      prezzo: "€160",
      host: "Luca",
      periodo: "Marzo - Novembre"
    },
    {
      nome: "Roma",
      img: "img/roma/roma.jpg",
      img2: "img/roma/roma2.jpg",
      img3: "img/roma/roma3.jpg",
      descrizione: "Un museo a cielo aperto dove arte, cultura e cucina si incontrano.",
      criteri: ["Cibo tipico", "Per famiglie", "Relax totale"],
      prezzo: "€195",
      host: "Luca",
      periodo: "Febbraio - Novembre"
    },
    {
      nome: "Barcellona",
      img: "img/barcellona/barcellona.jpg",
      img2: "img/barcellona/barcellona2.jpg",
      img3: "img/barcellona/barcellona3.jpg",
      descrizione: "Città vivace, arte e cultura a ogni angolo.",
      criteri: ["Movida notturna", "Cibo tipico", "Vicino al mare"],
      prezzo: "€170",
      host: "Luca",
      periodo: "Febbraio - Novembre"
    },
    {
      nome: "Parigi",
      img: "img/parigi/parigi.jpg",
      img2: "img/parigi/parigi2.jpg",
      img3: "img/parigi/parigi3.jpg",
      descrizione: "La città dell'amore, con monumenti iconici e arte senza fine.",
      criteri: ["Cibo tipico", "Per famiglie", "Relax totale"],
      prezzo: "€235",
      host: "Luca",
      periodo: "Gennaio - Dicembre"
    },
    {
      nome: "Santorini",
      img: "img/santorini/santorini.jpg",
      img2: "img/santorini/santorini2.jpg",
      img3: "img/santorini/santorini3.jpg",
      descrizione: "Isola greca con acque cristalline e tramonti indimenticabili.",
      criteri: ["Vicino al mare", "Relax totale"],
      prezzo: "€195",
      host: "Luca",
      periodo: "Marzo - Settembre"
    },
    {
      nome: "New York",
      img: "img/new york/newyork.jpg",
      img2: "img/new york/newyork2.jpg",
      img3: "img/new york/newyork3.jpg",
      descrizione: "La Grande Mela: divertimento, cultura e shopping in ogni angolo.",
      criteri: ["Movida notturna", "Cibo tipico"],
      prezzo: "€300",
      host: "Luca",
      periodo: "Gennaio - Dicembre"
    },
    {
      nome: "Kyoto",
      img: "img/kyoto/kyoto.jpg",
      img2: "img/kyoto/kyoto2.jpg",
      img3: "img/kyoto/kyoto3.jpg",
      descrizione: "Cultura giapponese, templi antichi e paesaggi sereni.",
      criteri: ["Natura e trekking", "Cibo tipico"],
      prezzo: "€195",
      host: "Luca",
      periodo: "Gennaio - Dicembre"
    },
    {
      nome: "Bormio",
      img: "img/bormio/bormio.jpg",
      img2: "img/bormio/bormio2.jpg",
      img3: "img/bormio/bormio3.jpg",
      descrizione: "Nel cuore delle ALpi, tra le piste da sci e i paesaggi mozzafiato.",
      criteri: ["Cibo tipico", "Natura e trekking"],
      prezzo: "€245",
      host: "Luca",
      periodo: "Gennaio - Dicembre"
    }
  ];
  
  const cardContainer = document.getElementById("cardContainer");
  const resultDiv = document.getElementById("result");
  let scelte = [];
  
  function creaCarte() {
    criteri.slice().reverse().forEach((c, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${c.img}" alt="${c.testo}">
        <div class="card-text">${c.testo}</div>
        <div class="icon like">💖</div>
        <div class="icon nope">❌</div>
      `;
      card.style.zIndex = i;
      cardContainer.appendChild(card);
  
      const likeIcon = card.querySelector(".like");
      const nopeIcon = card.querySelector(".nope");
  
      // Set initial opacity to 0
      likeIcon.style.opacity = 0;
      nopeIcon.style.opacity = 0;
  
      let startX = 0;
      let currentX = 0;
      let dragging = false;
  
      const onPointerDown = (e) => {
        dragging = true;
        startX = e.clientX || e.touches?.[0]?.clientX;
        card.style.transition = "none";
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
      };
  
      const onPointerMove = (e) => {
        if (!dragging) return;
        currentX = (e.clientX || e.touches?.[0]?.clientX) - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX / 20}deg)`;
  
        // Gestione visibilità delle icone
        const opacity = Math.min(Math.abs(currentX) / 100, 1);
        if (currentX > 0) {
          likeIcon.style.opacity = opacity;
          nopeIcon.style.opacity = 0;
        } else if (currentX < 0) {
          likeIcon.style.opacity = 0;
          nopeIcon.style.opacity = opacity;
        }
      };
  
      const onPointerUp = () => {
        dragging = false;
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        card.style.transition = "transform 0.3s ease";
  
        // Swipe a destra (like)
        if (currentX > 100) {
          card.style.transform = "translateX(500px)";
          scelte.push(c.testo);
        }
        // Swipe a sinistra (nope)
        else if (currentX < -100) {
          card.style.transform = "translateX(-500px)";
        }
        // Se non si sposta abbastanza, rimane al centro
        else {
          card.style.transform = "translateX(0)";
          return;
        }
  
        // Nascondi le icone dopo lo swipe
        likeIcon.style.opacity = 0;
        nopeIcon.style.opacity = 0;
  
        // Rimuovi la carta e mostra i risultati se tutte le carte sono scorse
        setTimeout(() => {
          card.remove();
          if (document.querySelectorAll('.card').length === 0) {
            mostraRisultati();
          }
        }, 300);
      };
  
      card.addEventListener("pointerdown", onPointerDown);
    });
  }
  
  function mostraRisultati() {
    cardContainer.style.height = "0px";

    const match = destinazioni.filter(dest => {
      const comuni = dest.criteri.filter(c => scelte.includes(c));
      return comuni.length >= 2;
    });
  
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "";
  
    if (match.length > 0) {
      resultDiv.innerHTML = `<h3 class="titoletto">Destinazioni consigliate:</h3>`;
  
      match.forEach(d => {
        resultDiv.innerHTML += `
          <div class="contenuto">
            <div class="immagini">
              <div class="mantieni-misure">
                <img src="${d.img}" alt="${d.nome}" class="immagine-principale">
              </div>
              <div class="immagini-secondarie">
                <div class="mantieni-misure">
                  <img src="${d.img2}" alt="${d.nome}" class="immagine-secondaria">
                </div>
                <div class="mantieni-misure">
                  <img src="${d.img3}" alt="${d.nome}" class="immagine-secondaria">
                </div>
              </div>
            </div>
            <div class="dettagli">
              <a href="${d.nome}.html">${d.nome}</a>
              <p>${d.descrizione}</p>
              <p></p>
              <p><span class="prezzo-badge">Da ${d.prezzo}</span></p>
              <p></p>
              <p><em>Periodo: ${d.periodo}</em></p>
              
            </div>
          </div>
        `;
      });
    } else {
      resultDiv.innerHTML = "😅 Nessuna destinazione trovata. Riprova con altri criteri!";
    }
  }
  
  creaCarte();
