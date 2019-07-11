const arrayPokemon = POKEMON.pokemon;
const pokemons = arrayPokemon.map((poke)=>{  
  return poke;
});
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
    displayData(pokemons);
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};
btnLogin.addEventListener('click', loginAccess);


bug.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Bug'));
});
dark.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Dark'));
});
dragon.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Dragon'));
});
electric.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Electric'));
});
fairy.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Fairy'));
});
fighting.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Fighting'));
});
fire.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Fire'));
});
flying.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Flying'));
});
ghost.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Ghost'));
});
grass.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Grass'));
});
ground.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Ground'));
});
ice.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Ice'));
});
normal.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Normal'));
});
poison.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Poison'));
});
psychic.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Psychic'));
});
rock.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Rock'));
});
steel.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Steel'));
});
water.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByTypes('Water'));
});

bugw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Bug'));
});
darkw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Dark'));
});
dragonw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Dragon'));
});
electricw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Electric'));
});
fairyw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Fairy'));
});
fightingw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Fighting'));
});
firew.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Fire'));
});
flyingw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Flying'));
});
ghostw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Ghost'));
});
grassw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Grass'));
});
groundw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Ground'));
});
icew.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Ice'));
});
normalw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Normal'));
});
poisonw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Poison'));
});
psychicw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Psychic'));
});
rockw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Rock'));
});
steelw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Steel'));
});
waterw.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(filterByWeaknesses('Water'));
});

btn2.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(sortPoke(filteredArray, 'namedown'));
});
btn3.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(sortPoke(filteredArray, 'nameup'));
});
btn4.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(sortSpawns(filteredArray, 'avgup'));
});
btn5.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(sortSpawns(filteredArray, 'avgdown'));
});
let result = [];
btn2km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  result = filterEgg(pokemons, '2 km');
  displayData(result);
  header.innerHTML = `Pokemones que nacen de huevos de 2Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
btn5km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(pokemons, '5 km');
  displayData(result);
  header.innerHTML = `Pokemones que nacen de huevos de 5Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
btn10km.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(pokemons, '10 km');
  displayData(result);
  header.innerHTML = `Pokemones que nacen de huevos de 10Km corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});
notInEggs.addEventListener('click', () =>{
  displayPokemon.innerHTML = null;
  header.innerHTML = null;
  result = filterEgg(filteredArray, 'Not in Eggs');
  displayData(result); 
  header.innerHTML = `Pokemones que no nacen de huevos corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
});

home.addEventListener('click', () => {
  card.classList.add('hide');
  displayPokemon.innerHTML = null;
  header.classList.remove('hide');
  displayPokemon.classList.remove('hide');
  filteredArray = pokemons;
  displayData(filteredArray);
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
  arrayToPrint.forEach(poke =>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic untrapped" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
        <figcaption class="wp-caption-text" type="button">${poke.name} 0</figcaption>
        </figure>`;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
      <figcaption class="wp-caption-text" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
      </figure> `;
    };
  });
};