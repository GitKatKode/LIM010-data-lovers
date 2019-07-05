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

home.addEventListener('click', () => {
  card.classList.add('hide');
  displayPokemon.innerHTML = null;
  header.classList.remove('hide');
  displayPokemon.classList.remove('hide');
  filteredArray = pokemons;
  displayData(filteredArray);
});