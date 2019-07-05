
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
      <aside>
        <div>
          <p>tipo:</p>
          <div>
          </div>
        </div>
        <div>
          <p>debilidad:</p>
          <div></div>
        </div>
      </aside>
    </aside>      
      `;
    }
  });
};
// asignar variable para que imprima lo que entre----------------------------------------------------------
const displayData = (dataToPrint) => {
  let noPokemons = 0;
  let thePokemons = 0;
  dataToPrint.forEach((poke)=>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic untrapped" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <figcaption class="wp-caption-text" type="button">${poke.name} 0</figcaption>
        </figure>`;
      noPokemons ++;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <figcaption class="wp-caption-text" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
        </figure> `;
      thePokemons ++;
    };
  });
  const parentNav = document.querySelectorAll('nav')[0];
  const getId = (event) => {
    const idPokemon = event.target.id;
    showCard(idPokemon);
  };
  parentNav.addEventListener('click', getId);
  header.innerHTML = `
    <h2>Total atrapados: ${thePokemons} &nbsp; &nbsp; Por atrapar: ${noPokemons}</h2>`;
  classContenedor1.classList.remove('hide'); 
  classContenedor2.classList.remove('hide'); 
  classContenedor3.classList.remove('hide'); 
  classContenedor4.classList.remove('hide'); 
  home.classList.remove('hide'); 
  return dataToPrint;
}; 

const filterByTypes = (typeString) =>{
  filteredArray = pokemons.filter(poke => {
    const types = poke.type;
    const searched = types.find(type =>{
      switch (typeString) {
      case 'Bug':
        return type === 'Bug';
      case 'Dark':
        return type === 'Dark';
      case 'Dragon':
        return type === 'Dragon';
      case 'Electric':
        return type === 'Electric';
      case 'Fairy':
        return type === 'Fairy';
      case 'Fighting':
        return type === 'Fighting';
      case 'Fire':
        return type === 'Fire';
      case 'Flying':
        return type === 'Flying';
      case 'Ghost':
        return type === 'Ghost';
      case 'Grass':
        return type === 'Grass';
      case 'Ground':
        return type === 'Ground';
      case 'Ice':
        return type === 'Ice';
      case 'Normal':
        return type === 'Normal';
      case 'Poison':
        return type === 'Poison';
      case 'Psychic':
        return type === 'Psychic';
      case 'Rock':
        return type === 'Rock';
      case 'Steel':
        return type === 'Steel';
      case 'Water':
        return type === 'Water';
      default:
        break;
      }
    });
    if (searched) {
      return poke;
    }
  });
  return filteredArray;
};

const filterByWeaknesses = (typeString) =>{
  filteredArray = pokemons.filter(poke => {
    const weakness = poke.weaknesses;
    const searched = weakness.find(type =>{
      switch (typeString) {
      case 'Bug':
        return type === 'Bug';
      case 'Dark':
        return type === 'Dark';
      case 'Dragon':
        return type === 'Dragon';
      case 'Electric':
        return type === 'Electric';
      case 'Fairy':
        return type === 'Fairy';
      case 'Fighting':
        return type === 'Fighting';
      case 'Fire':
        return type === 'Fire';
      case 'Flying':
        return type === 'Flying';
      case 'Ghost':
        return type === 'Ghost';
      case 'Grass':
        return type === 'Grass';
      case 'Ground':
        return type === 'Ground';
      case 'Ice':
        return type === 'Ice';
      case 'Normal':
        return type === 'Normal';
      case 'Poison':
        return type === 'Poison';
      case 'Psychic':
        return type === 'Psychic';
      case 'Rock':
        return type === 'Rock';
      case 'Steel':
        return type === 'Steel';
      case 'Water':
        return type === 'Water';
      default:
        break;
      }
    });
    if (searched) {
      return poke;
    }
  });
  return filteredArray;
};

const sortPoke = (data, sortOrder) => {
  const arrSortName = data.slice().sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    } if (aa.name < bb.name) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === 'nameup') {
    return arrSortName;
  }
  if (sortOrder === 'namedown') {
    return arrSortName.reverse();
  }
  return 0;
};
 
const sortSpawns = (data, sortOrder) => {
  const arrSortSpawns = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns > bb.avg_spawns) {
      return 1;
    } if (aa.avg_spawns < bb.avg_spawns) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === 'avgup') {
    return arrSortSpawns;
  }
  if (sortOrder === 'avgdown') {
    return arrSortSpawns.reverse();
  }
  return 0;
};

window.filterByTypes = filterByTypes;
window.filterByWeaknesses = filterByWeaknesses;
window.displayData = displayData;
window.sortPoke = sortPoke;
window.sortSpawns = sortSpawns;
