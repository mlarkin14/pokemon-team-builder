function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  // save the pokemon's url to a variable
  let url = pokemon.url;

  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      appendPokemon(pokeData);
    });
}

var pokemonHolder = document.querySelector(".pokemon-holder");

function appendPokemon(pokemon) {
    // add Pokemon to team button
    var btn = document.createElement("button")
    btn.setAttribute("class", "btn btn-sm btn-success add-pkmn-btn")

    btn.textContent = "Add to Team"
    btn.onclick = function () {
        var pokemonToAdd = {
            name: pokemon.species.name,
            weight: pokemon.weight,
            height: pokemon.height,
            type: pokemon.types[0].type.name,
            img_url: pokemon.sprites.front_default
        }

        let text

        if (confirm("Are you sure you want to add this pokemon to your team?") == true) {
            handleClick(pokemonToAdd)
            text = "Pokemon added - going back to your team page!"
            alert(text);
            document.location.replace("/team");
        } else {
            text = "Pick a different pokemon!"
            alert(text);
        }
    };

  // create pokemon name element
  var pokemonNameElement = document.createElement("h1");
  var pokemonCard = document.createElement("div");
  pokemonCard.setAttribute("class", "card pokeCard col-3");

  var pokemonPic = document.createElement("img");
  pokemonPic.setAttribute("src", pokemon.sprites.front_default);

  var pokeHeight = document.createElement("h4");
  var pokeWeight = document.createElement("h4");
  var pokeType = document.createElement("h4");

  pokeHeight.textContent = "Height: " + pokemon.height;
  pokeWeight.textContent = "Weight: " + pokemon.weight;
  pokeType.textContent = "Type: " + pokemon.types[0].type.name;

  // fill with appropiate data
  pokemonNameElement.textContent = pokemon.species.name;

  pokemonCard.append(
    pokemonNameElement,
    pokemonPic,
    pokeHeight,
    pokeWeight,
    pokeType,
    btn
  );
  //append to page
  pokemonHolder.appendChild(pokemonCard);
}

async function handleClick(pokemonData) {
    console.log("pokemon to add", pokemonData)

    const name = pokemonData.name;
    const height = pokemonData.height;
    const weight = pokemonData.weight;
    const img_url = pokemonData.img_url;
    const type = pokemonData.type;

    const response = await fetch('/api/pokemon', {
        method: "POST",
        body: JSON.stringify({
            name,
            height,
            weight,
            img_url,
            type
        }),
        headers: { 'Content-Type': 'application/json' },
    })
}

fetchPokemon();
