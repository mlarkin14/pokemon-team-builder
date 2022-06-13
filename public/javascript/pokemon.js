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
  // create pokemon element
  const pokemonElement = document.createElement("div");

  // assign information to variables for use
  const pokemonName = pokemon.species.name;
    const pokemonImg = pokemon.sprites.front_default;
    // use loop for pokemon type in case there is more than one
    let pokemonType = ""
    for (let i = 0; i < pokemon.types.length; i++) {
        pokemonType = pokemonType.concat(pokemon.types[i].type.name + " ");
    }

  // put pokemon information inside the div
  // name
  const pokemonNameEl = document.createElement("h1");
  pokemonNameEl.textContent = pokemonName;
  pokemonElement.appendChild(pokemonNameEl);
  pokemonElement.setAttribute("data-name", pokemonName);

  // picture
  const pokemonPictureEl = document.createElement("img");
  pokemonPictureEl.src = pokemonImg;
  pokemonElement.appendChild(pokemonPictureEl);
  pokemonElement.setAttribute("data-img", pokemonImg);

  const pokemonTypeEl = document.createElement("p");
  pokemonTypeEl.textContent = pokemonType;
  pokemonElement.appendChild(pokemonTypeEl);
  pokemonElement.setAttribute("data-type", pokemonType);

  //append to page
  pokemonHolder.appendChild(pokemonElement);
}

fetchPokemon();