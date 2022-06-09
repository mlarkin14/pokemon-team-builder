function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon)
            })
        })        
}

function fetchPokemonData(pokemon) {
    // save the pokemon's url to a variable
    let url = pokemon.url

    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            console.log(pokeData);
            appendPokemon(pokeData);
    })
}

var pokemonHolder = document.querySelector(".pokemon-holder");

function appendPokemon(pokemon) {
    // create pokemon name element
    var pokemonNameElement = document.createElement('h1');

    // fill with appropiate data
    pokemonNameElement.textContent = pokemon.species.name;

    //append to page
    pokemonHolder.appendChild(pokemonNameElement);

}

fetchPokemon();