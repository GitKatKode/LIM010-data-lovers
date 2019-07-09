const displayData = (dataToPrint) => {
  let noPokemons = [];
  let thePokemons = [];
  dataToPrint.forEach((poke)=>{
    if (poke.multipliers === null) {
      noPokemons += poke;
      return noPokemons;
    } else {
      thePokemons += poke;
      return thePokemons;
    };
  });
  const parentNav = document.querySelectorAll('nav')[0];
  const getId = (event) => {
    const idPokemon = event.target.id;
    showCard(idPokemon);
  };
  parentNav.addEventListener('click', getId);
  header.innerHTML = `
    <h2>Total atrapados: ${thePokemons.length / 15} &nbsp; &nbsp; Por atrapar: ${noPokemons.length / 15}</h2>`;
  classContenedor1.classList.remove('hide'); 
  classContenedor2.classList.remove('hide'); 
  classContenedor3.classList.remove('hide'); 
  classContenedor4.classList.remove('hide'); 
  home.classList.remove('hide'); 
  showDisplay(dataToPrint);
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

const filterEgg = (data, kms) => {
  let egg = [];
  if (kms === '2 km') {
    egg = data.filter(poke => (poke.egg === '2 km'));
  } else if (kms === '5 km') {
    egg = data.filter(poke => (poke.egg === '5 km'));
  } else if (kms === '10 km') {
    egg = data.filter(poke => (poke.egg === '10 km'));
  } else if (kms === 'Not in Eggs') {
    egg = data.filter(poke => (poke.egg === 'Not in Eggs'));
  }
  return egg;
};

window.filterByTypes = filterByTypes;
window.filterByWeaknesses = filterByWeaknesses;
window.displayData = displayData;
window.sortPoke = sortPoke;
window.sortSpawns = sortSpawns;
window.filterEgg = filterEgg;