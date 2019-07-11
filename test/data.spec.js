global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
describe(displayData, () => {
  it('debería ser una función', () => {
    assert.equal(typeof displayData, 'function');
  });
});
