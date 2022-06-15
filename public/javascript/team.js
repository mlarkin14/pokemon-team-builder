function viewGallery(event) {

    event.preventDefault();
    console.log('you clicked the button');
    document.location.replace('/pokemon');
}

document.querySelector('.add-pokemon').addEventListener('click', viewGallery);