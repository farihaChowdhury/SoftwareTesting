import { expect } from 'chai';
import add from '../components/add.js';
import countBy from '../components/countBy.js';
import eq from '../components/eq.js';
import filter from '../components/filter.js';
import isDate from '../components/isDate.js';
import isEmpty from '../components/isEmpty.js';
import toFinite from '../components/toFinite.js';
import toInteger from '../components/toInteger.js';
import toNumber from '../components/toNumber.js';
import toString from '../components/toString.js';


const users = [
     { 'user': 'barney', 'active': true },
     { 'user': 'betty', 'active': true },
     { 'user': 'fred', 'active': false }
  ]

describe('Add', () => {
  describe('Add numbers', function () {
    it('must return sum of two numbers', () => {
      expect(4).to.be.deep.equal(add(3, 1));
    });
  });

  describe('Add numbers', function () {
    it('must return sum of one positive and one negative number', () => {
      expect(-10).to.be.deep.equal(add(-15, 5));
    });
  });

  describe('Add numbers', function () {
    it('must return sum of fraction numbers', () => {
      expect(5.5).to.be.deep.equal(add(2, 3.5));
    });
  });

});

describe('isDate', () => {
  describe('Check Date', function () {
    it('must return true if date object', () => {
      expect(true).to.be.equal(isDate(new Date()));
    });
  });

  describe('Check Invalid Date', function () {
    it('must return false if not date object', () => {
      expect(false).to.be.equal(isDate('Mon April 23 2012'));
    });
  });
});

describe('isEmpty', () => {
  describe('Check if empty for null', function () {
    it('must return true if null', () => {
      expect(true).to.be.equal(isEmpty(null));
    });
  });

  describe('Check if empty for string', function () {
    it('must return false if not null', () => {
      expect(false).to.be.equal(isEmpty('abc'));
    });
  });
  describe('Check if empty for boolean value', function () {
    it('must return true if value is boolean', () => {
      expect(true).to.be.equal(isEmpty(true));
    });
  });
});

describe('filter', () => {
  describe('Get all Active users', function () {
    it('must return users who are active', () => {
      var filt = users.filter(function(item) {
        return item.active == true;
      });
      expect(filt).to.be.equal(filter(users, ({ active }) => active));
    });
  });

});

describe('countBy', () => {
  describe('Check if empty for null', function () {
    it('must return true if null', () => {
      expect(true).to.be.equal(isEmpty(null));
    });
  });

});

describe('toInteger', () => {
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(0.3));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(4).to.be.deep.equal(toInteger(4.2));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(2).to.be.deep.equal(toInteger(2.7));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(2).to.be.deep.equal(toInteger('2.4'));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(false));
    });
  });
  describe('Convert to integer', function () {
    it('must return integer', () => {
      expect(0).to.be.deep.equal(toInteger(null));
    });
  });
});

describe('toString', () => {
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('3').to.be.deep.equal(toString(3));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('4.2').to.be.deep.equal(toString(4.2));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('null').to.be.deep.equal(toString(null));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('2.4').to.be.deep.equal(toString('2.4'));
    });
  });
  describe('Convert to string', function () {
    it('must return string', () => {
      expect('false').to.be.deep.equal(toString(false));
    });
  });
});

describe('toFinite', () => {
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(0).to.be.deep.equal(toFinite(0));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(5.2).to.be.deep.equal(toFinite(5.2));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(2.4).to.be.deep.equal(toFinite('2.4'));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(1).to.be.deep.equal(toFinite(true));
    });
  });
  describe('Convert to finite number', function () {
    it('must return finite number', () => {
      expect(0).to.be.deep.equal(toFinite(undefined));
    });
  });
});

describe('toNumber', () => {
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(1));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(3.2).to.be.deep.equal(toNumber(3.2));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(4.1).to.be.deep.equal(toNumber('4.1'));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(1).to.be.deep.equal(toNumber(true));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(0).to.be.deep.equal(toNumber(0));
    });
  });
  describe('Convert to number', function () {
    it('must return number', () => {
      expect(NaN).to.be.deep.equal(toNumber(undefined));
    });
  });
});

describe('eq', () => {
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(5, 5));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(3.1, 3));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(-6, 6));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(4, '4'));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(null, NaN));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(undefined, 2));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return false', () => {
      expect(false).to.be.deep.equal(eq(1, null));
    });
  });
  describe('Checks if both values are equal', function () {
    it('must return true', () => {
      expect(true).to.be.deep.equal(eq(undefined, undefined));
    });
  });
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
