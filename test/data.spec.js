global.window = global;
require('../src/data');
require('./data.spec.js');

const pokemons = [
  {
    'id': 1,
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
  }, {
    'id': 2,
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 4.2,
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
  }, {
    'id': 23,
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  }, {
    'id': 95,
    'name': 'Onix',
    'type': [
      'Rock',
      'Ground'
    ],
    'egg': '10 km',
    'avg_spawns': 10,
    'multipliers': null,
    'weaknesses': [
      'Water',
      'Grass',
      'Ice',
      'Fighting',
      'Ground',
      'Steel'
    ]
  },
];
describe(sortPoke, () => {
  test('debería ser una función', () => {
    expect(typeof sortPoke).toEqual('function');
  });
  test('ordenar de la A a la Z', () => {
    expect(sortPoke(pokemons, 'nameup')[0].name).toEqual('Bulbasaur');
  });
  test('ordenar de la Z a la A', () => {
    expect(sortPoke(pokemons, 'namedown')[0].name).toEqual('Onix');
  });
});
describe(sortSpawns, () => {
  test('debería ser una función', () => {
    expect(typeof sortSpawns).toEqual('function');
  });
  test('ordenar spawns ascendente', () => {
    expect(sortSpawns(pokemons, 'avgup')[0].avg_spawns).toEqual(4.2);
  });
  test('ordenar spawns descendente', () => {
    expect(sortSpawns(pokemons, 'avgdown')[0].avg_spawns).toEqual(227);
  });
});
describe(filterEgg, () => {
  test('debería ser una función', () => {
    expect(typeof filterEgg).toEqual('function');
  });
  test('mostrar los pokemons de huevos de 2 km', () => {
    expect(filterEgg(pokemons, '2 km')[0].egg).toEqual('2 km');
  });
  test('mostrar los pokemons de huevos de 5 km', () => {
    expect(filterEgg(pokemons, '5 km')[0].egg).toEqual('5 km');
  });
  test('mostrar los pokemons de huevos de 10 km', () => {
    expect(filterEgg(pokemons, '10 km')[0].egg).toEqual('10 km');
  });
  test('mostrar los pokemons que no vienen en huevo', () => {
    expect(filterEgg(pokemons, 'Not in Eggs')[0].egg).toEqual('Not in Eggs');
  });
});
describe(filterByTypes, () => {
  test('debería ser una función', () => {
    expect(typeof filterByTypes).toEqual('function');
  });
  test('mostrar los pokemons tipo Bicho', () => {
    expect(filterByTypes('Grass', pokemons)[0].type[0]).toEqual('Grass');
  });
});
describe(filterByWeaknesses, () => {
  test('debería ser una función', () => {
    expect(typeof filterByWeaknesses).toEqual('function');
  });
  test('mostrar los pokemons con debilidad tipo Bicho', () => {
    expect(filterByWeaknesses('Fire', pokemons)[0].weaknesses[0]).toEqual('Fire');
  });
});