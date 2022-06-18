
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
            appendPokemon(pokeData);
        })
}

var pokemonHolder = document.querySelector(".pokemon-holder");

function appendPokemon(pokemon) {
    // add Pokemon to team button
    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-sm btn-success add-pkmn-btn")

    btn.textContent = "Add to Team"
    console.log(pokemon);
    btn.onclick = function () {
        var pokemonToAdd = {
            name: pokemon.species.name,
            weight: pokemon.weight,
            height: pokemon.height,
            type: pokemon.types[0].type.name,
            img_url: pokemon.sprites.front_default
        }


        handleClick(pokemonToAdd)
    };

    // create pokemon name element
    var pokemonNameElement = document.createElement('h1');
    var pokemonCard = document.createElement("div")
    pokemonCard.setAttribute("class", "card pokeCard col-3")

    var pokemonPic = document.createElement("img")
    pokemonPic.setAttribute("src", pokemon.sprites.front_default)

    var pokeHeight = document.createElement('h4');
    var pokeWeight = document.createElement('h4');
    var pokeType = document.createElement('h4');

    pokeHeight.textContent = "Height: " + pokemon.height;
    pokeWeight.textContent = "Weight: " + pokemon.weight;
    pokeType.textContent = "Type: " + pokemon.types[0].type.name;

    // fill with appropiate data
    pokemonNameElement.textContent = pokemon.species.name;

    pokemonCard.append(pokemonNameElement, pokemonPic, pokeHeight, pokeWeight, pokeType, btn)
    //append to page
    pokemonHolder.appendChild(pokemonCard);

}

async function handleClick(pokemon) {
    console.log("pokeomon to add", pokemon)

    const pokemonName = pokemon.name;

    const response = await fetch('/api/teams', {
        method: 'POST',
        headers: { "Content-Type": "application/json " },
        body: JSON.stringify(pokemonName)
    });

    if (response.ok) {

        const response = await fetch('/api/pokemon', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pokemon)
        })
        
        if (response.ok) {
            document.location.replace('/team');
        }

    } else {
        alert(response.statusText);
    }
}





fetchPokemon();