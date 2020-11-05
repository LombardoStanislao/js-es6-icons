// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in base al tipo.
// Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

$(document).ready(function(){

  const icons = [
      {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas'
      },
      {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas'
      },
      {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas'
      },
      {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas'
      },
      {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas'
      },
      {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas'
      },
      {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas'
      },
      {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas'
      },
      {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas'
      }
  ];


  const colors = ['green', 'coral', 'yellow'];

  const type = [];

  icons.forEach((icon, index) => {

    if (icon.type == 'vegetable') {

      icon.color = 'green';

    } else if (icon.type == 'user') {

      icon.color = 'yellow';

    } else {
      icon.color = 'coral';
    };

  });

  // Seleziono ogni singolo oggetto per estrarne gli attributi

  icons.forEach((icon) => {

    const {name, prefix, type, family, color} = icon;

      $('#all-icons').append(`

          <i class="${family} ${prefix}${name} fa-2x" style="color: ${color}" </i>
        `
      );


  });

  icons.forEach((icon, i) => {

    if (!type.includes(icon.type)) {
      type.push(icon.type);
    };

  });

  type.forEach((element, i) => {

    $('#icon-choise').append(`

        <option value="${element}"> ${element} </option>

      `
    );

  });

  $('#icon-choise').change(function() {

    const typeSelected = $(this).val();

    //Cancello tutte le icone
    $('#all-icons').empty();

    // Recupero solo quelle scelte dall'utente

    const iconChosen = icons.filter((icon) => {

        return typeSelected == icon.type;

    });

    


  });

});
