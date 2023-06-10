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


Consigli del giorno:

<br>
<br>

- **0**
  - Creo l'arrey delle immagini e prepraro l'HTML, nascondo tutte le immagini tranne la prima tramite una classe d-none.
- **1**
  - Recupero gli elemento dal DOM.
- **2**
  - richiamo l'elemento event click per cambiare la classe alle immagini.
- **3**
  - Genero il ciclo for sull'elemento delle frecce per cambiare [i] .
  **4**
  - Provo a rendere infinito il carosello cambiando le condizioni del ciclo for.
 **5**
  - Assegno la stessa logica [ì] e le stesse funzioni ai thumbnails.
**FINE**  




