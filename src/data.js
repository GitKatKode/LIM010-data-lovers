const sortPoke = (data, sortOrder) => {
  const arrSortName = data.slice().sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    } if (aa.name < bb.name) {
      return -1;
    }
  });
  if (sortOrder === 'nameup') {   
    return arrSortName;
  }
  if (sortOrder === 'namedown') {
    return arrSortName.reverse();
  }
};
 
const sortSpawns = (data, sortOrder) => {
  const arrSortSpawns = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns > bb.avg_spawns) {
      return 1;
    } if (aa.avg_spawns < bb.avg_spawns) {
      return -1;
    }
  });
  if (sortOrder === 'avgup') {
    return arrSortSpawns;
  }
  if (sortOrder === 'avgdown') {
    return arrSortSpawns.reverse();
  }
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

const filterByTypes = (condition, filterArray) => {
  filteredArray = [];
  filterArray.forEach(poke => {
    for (let i = 0; i < poke.type.length; i++) {
      if (poke.type[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
  });                          
  return filteredArray;
};

const filterByWeaknesses = (condition, filterArray) =>{
  filteredArray = [];
  filterArray.forEach(poke => {
    for (let i = 0; i < poke.weaknesses.length; i++) {
      if (poke.weaknesses[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
  });                          
  return filteredArray;
};

window.filterByTypes = filterByTypes;
window.filterByWeaknesses = filterByWeaknesses;
window.sortPoke = sortPoke;
window.sortSpawns = sortSpawns;
window.filterEgg = filterEgg;