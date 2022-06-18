function viewGallery(event) {
    event.preventDefault();
    console.log('you clicked the button');
    document.location.replace('/pokemon');
}

// add listener to pokemon buttons in loop
pokemonBtns = document.getElementsByClassName('add-pokemon');

for (var i = 0; i < pokemonBtns.length; i++) {
    pokemonBtns[i].addEventListener('click', viewGallery);
}