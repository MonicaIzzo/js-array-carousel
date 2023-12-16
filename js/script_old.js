console.log('JS OK')

/* 
# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Buon lavoro e buon ponte!
<br>
<br>

- **0**
  - Creo l'arrey delle immagini e nascondo tutte le immagini tranne la prima tramite una classe d-none (prepraro l'HTML a ricevere le info)
- **1**
  - Recupero gli elemento dal DOM.
- **2**
  - richiamo l'elemento event click per cambiare la classe alle immagini.
- **3**
  - Metto in ascolto i Button "avanti" e "dietro"
  **4**
  - Provo a rendere infinito il carosello cambiando le condizioni del ciclo for
 **5**
  - Assegno la stessa logica [ì] e le stesse funzioni ai thumbnails.
**FINE**   

*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/
// # Recupero i [BOTTONI]
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


// # Recupero la gallery e i thumbnails
const gallery = document.querySelector('.gallery');
const thumbnailsGallery = document.getElementById('thumbnails');

// # Preparo le immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
console.log(sources);

// # Recupero l'HTML per le immagini
let imageElements = '';
let thumbnailsElements = '';

// # Per ogni source, creo un tag img
for (let i = 0; i < sources.length; i++) {
  imageElements += `<img src="${sources[i]}" alt="images ${i + 1}">`;
// # Crea i thumbnails
  thumbnailsElements +=  `<img src="${sources[i]}" alt="thumbnails ${i + 1}">`;
}

// # Inserisco le immagine nel DOM
gallery.innerHTML = imageElements;
thumbnailsGallery.innerHTML = thumbnailsElements;

// # Recupero tutte le immagini
const images = document.querySelectorAll('#carousel img');
const thumbnails = document.querySelectorAll('#thumbnails img');

// # Preparo la gestione del [currenIndex].
let currentIndex = 0;
let currentIndexthumbnails = currentIndex ;

// # Imposto la prima immagine con la classe attiva [class='active'].
images[currentIndex].classList.add('active');
thumbnails[currentIndexthumbnails].classList.add('active');


/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # btn INDIETRO
nextBtn.addEventListener('click', function() {

  // Gestisco la classe active [class='active'] 
  images[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');

  // Incremento il [currentIndex]
  currentIndex++;

  //! Se dopo aver incrementato vado oltre
  if (currentIndex === images.length) currentIndex = 0;

  // Gestisco la classe active [class='active'] 
  images[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
});



// # btn AVANTI
prevBtn.addEventListener('click', function(){

  // Gestisco la classe active [class='active'] 
  images[currentIndex].classList.remove('active');
  thumbnails[currentIndex].classList.remove('active');

  // Decremento il [currentIndex]
  currentIndex--;

    //! Se dopo aver incrementato vado oltre
  if (currentIndex < 0) currentIndex = images.length -1;

  // Gestisco la classe active [class='active'] 
  images[currentIndex].classList.add('active');
  thumbnails[currentIndex].classList.add('active');
  });



/* for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
    if (i === currentIndex) return;  
    images[currentIndex].classList.remove('active');
    thumbnails[currentIndex].classList.remove('active');
    currentIndex = i;
    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
  });
}
*/