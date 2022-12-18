import { expect } from 'chai';
import add from '../components/add.js';
// import countBy from '../components/countBy.js';
// import eq from '../components/eq.js';
// import filter from '../components/filter.js';
// import isDate from '../components/isDate.js';
// import isEmpty from '../components/isEmpty.js';
// import toFinite from '../components/toFinite.js';
// import toInteger from '../components/toInteger.js';
// import toNumber from '../components/toNumber.js';
// import toString from '../components/toString.js';

describe('Add', () => {
  describe('Add numbers', function () {
    it('must return sum of two numbers', () => {
      expect(4).to.be.deep.equal(add(3, 1));
    });
  });
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
