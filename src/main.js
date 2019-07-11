const arrayPokemon = POKEMON.pokemon;
const pokemons = arrayPokemon.map((poke)=>{  
  return poke;
});

const parentNav = document.querySelectorAll('nav')[0];
let filteredArray = pokemons;
const btnLogin = document.getElementById('btn-login');
const loginInput = document.getElementsByClassName('login-input')[0];
const formLogin = document.getElementById('login');
const message = document.getElementById('message');
const header = document.getElementById('header');
const displayPokemon = document.getElementsByClassName('my-pokemon-pics')[0];
const card = document.getElementById('card');
const home = document.getElementById('home');

const loginAccess = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (email === '' && password === '') {
    formLogin.classList.add('hide');
    loginInput.classList.add('hide');
    document.body.style.backgroundImage = 'url("img/fondop3.jpg")';
    showDisplay(pokemons);
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};

const getId = (event) => {
  const idPokemon = event.target.id;
  showCard(idPokemon);
};

btnLogin.addEventListener('click', loginAccess);

parentNav.addEventListener('click', getId);

bug.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Bug', pokemons));
});
dark.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Dark', pokemons));
});
dragon.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Dragon', pokemons));
});
electric.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Electric', pokemons));
});
fairy.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Fairy', pokemons));
});
fighting.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Fighting', pokemons));
});
fire.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Fire', pokemons));
});
flying.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Flying', pokemons));
});
ghost.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Ghost', pokemons));
});
grass.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Grass', pokemons));
});
ground.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Ground', pokemons));
});
ice.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Ice', pokemons));
});
normal.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Normal', pokemons));
});
poison.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Poison', pokemons));
});
psychic.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Psychic', pokemons));
});
rock.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Rock', pokemons));
});
steel.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Steel', pokemons));
});
water.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByTypes('Water', pokemons));
});

bugw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Bug', pokemons));
});
darkw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Dark', pokemons));
});
dragonw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Dragon', pokemons));
});
electricw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Electric', pokemons));
});
fairyw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Fairy', pokemons));
});
fightingw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Fighting', pokemons));
});
firew.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Fire', pokemons));
});
flyingw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Flying', pokemons));
});
ghostw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Ghost', pokemons));
});
grassw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Grass', pokemons));
});
groundw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Ground', pokemons));
});
icew.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Ice'));
});
normalw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Normal', pokemons));
});
poisonw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Poison', pokemons));
});
psychicw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Psychic', pokemons));
});
rockw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Rock', pokemons));
});
steelw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Steel', pokemons));
});
waterw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(filterByWeaknesses('Water', pokemons));
});

btnZa.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, 'namedown'));
});
btnAz.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, 'nameup'));
});
btnFup.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortSpawns(filteredArray, 'avgup'));
});
btnFdown.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortSpawns(filteredArray, 'avgdown'));
});
let result = [];
btn2km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  result = filterEgg(pokemons, '2 km');
  showDisplay(result);
  header.innerHTML = `Pokemones que nacen de huevos de 2Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
btn5km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(pokemons, '5 km');
  showDisplay(result);
  header.innerHTML = `Pokemones que nacen de huevos de 5Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
btn10km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(pokemons, '10 km');
  showDisplay(result);
  header.innerHTML = `Pokemones que nacen de huevos de 10Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
notInEggs.addEventListener('click', () =>{
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(filteredArray, 'Not in Eggs');
  showDisplay(result); 
  header.innerHTML = `Pokemones que no nacen de huevos corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});

home.addEventListener('click', () => {
  card.classList.add('hide');
  displayPokemon.innerHTML = null;
  header.classList.remove('hide');
  displayPokemon.classList.remove('hide');
  filteredArray = pokemons;
  showDisplay(filteredArray);
});
const showCard = (idPoke) => {
  displayPokemon.classList.add('hide');
  classContenedor1.classList.add('hide');
  classContenedor2.classList.add('hide');
  classContenedor3.classList.add('hide');
  classContenedor4.classList.add('hide');
  header.classList.add('hide');
  card.classList.remove('hide');
  pokemons.forEach(poke =>{ 
    if (parseInt(idPoke) === poke.id) {
      card.innerHTML = `
      <img class="cardImg" src="${poke.img}" alt="${poke.name}" >
      <aside class="characteristics">
      <h2>${poke.name}</h2>
      <aside class="pokedex">
        <div>
        <p> #: ${poke.num}</p>
        </div>
        <div>
        <p>peso: ${poke.weight}</p>
        </div>
        <div>
        <p>talla: ${poke.height}</p>
        </div>
      </aside>
      <aside class="type-size">
        <div>
          <p>tipo:</p>
          <divclass="type-card">
          <img class"size-img" src="img/${poke.type[0]}.png" alt="${poke.type[0]}" >
          <img class"size-img" src="img/${poke.type[1]}.png" alt="${poke.type[1]}" >
          <img class"size-img" src="img/${poke.type[2]}.png" alt="${poke.type[2]}" >
          <img class"size-img" src="img/${poke.type[3]}.png" alt="${poke.type[3]}" >
          </div>
        </div>
        <div>
          <p>debilidad:</p>
          <div>
          <img class"size-img" src="img/${poke.weaknesses[0]}.png" alt="${poke.weaknesses[0]}" >
          <img class"size-img" src="img/${poke.weaknesses[1]}.png" alt="${poke.weaknesses[1]}" >
          <img class"size-img" src="img/${poke.weaknesses[2]}.png" alt="${poke.weaknesses[2]}" >
          <img class"size-img" src="img/${poke.weaknesses[3]}.png" alt="${poke.weaknesses[3]}" >
          </div>
        </div>
      </aside>
    </aside>      
      `;
    }
  });
};

const showDisplay = (arrayToPrint) =>{
  let noPokemons = [];
  let thePokemons = [];
  arrayToPrint.forEach(poke =>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic untrapped" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
        <figcaption class="wp-caption-text" type="button">${poke.name} 0</figcaption>
        </figure>`;
      noPokemons += poke;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
      <figcaption class="wp-caption-text" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
      </figure> `;
      thePokemons += poke;
      return thePokemons;
    };
  });
  header.innerHTML = `
  <h2>Total atrapados: ${thePokemons.length / 15} &nbsp; &nbsp; Por atrapar: ${noPokemons.length / 15}</h2>`;
  classContenedor1.classList.remove('hide'); 
  classContenedor2.classList.remove('hide'); 
  classContenedor3.classList.remove('hide'); 
  classContenedor4.classList.remove('hide'); 
  home.classList.remove('hide'); 
};