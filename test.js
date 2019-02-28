/*!
 * listing.js <https://github.com/larswaechter/listing.js>
 *
 * Copyright (c) 2017 - 2019, Lars Wächter.
 * Released under the MIT License.
 */

require('mocha');
const assert = require('assert');
const listing = require('./');

describe('listing.js', function () {
  it('validate list length', function () {
    const myList = new listing('1,2,3,4');

    assert.equal(myList.length, 4);
  });

  it('create new listing instance from array', function () {
    const myList = listing.toList([1, 2, 3, 4], ',', true);

    assert.equal(myList.list, '1,2,3,4');
  });

  it('compare list elements', function () {
    assert.equal(new listing('1,2,3').list, '1,2,3');
  });

  it('append new element to list', function () {
    const myList = new listing('1,2,3');
    myList.append(4);

    assert.equal(myList.list, '1,2,3,4');
  });

  it('clear list', function () {
    const myList = new listing('1,2,3,4');
    myList.clear()

    assert.equal(myList.list, '');
  });

  it('concat two lists into one', function () {
    const myList = new listing('1,2,3');
    const myNewList = new listing('4,5,6');
    myList.concat(myNewList);

    assert.equal(myList.list, '1,2,3,4,5,6');
  });

  it('list element contains a certain substring', function () {
    const myList = new listing('hello,whats,up');

    assert.equal(myList.contains('hat'), 1);
  });

  it('list element contains a certain substring (case-insensitive)', function () {
    const myList = new listing('hello,whats,up');

    assert.equal(myList.containsNoCase('hAt'), 1);
  });

  it('delete list element', function () {
    const myList = new listing('1,2,3');
    myList.deleteAt(1);

    assert.equal(myList.list, '1,3');
  });

  it('filter list elements', function () {
    const myList = new listing('1,2,3,4,5,6');

    const newList = myList.filter(function (val) {
      return val % 2 === 0;
    });

    assert.equal(newList.list, '2,4,6');
  });

  it('find list element', function () {
    const myList = new listing('this,is,a,test');

    assert(myList.find('a'));
  });

  it('find list element (case-insensitive)', function () {
    const myList = new listing('this,is,a,test');

    assert(myList.findNoCase('tEsT'));
  });

  it('get first list element', function () {
    const myList = new listing('lorem,ipsum');

    assert.equal(myList.first(), 'lorem');
  });

  it('get list element at position', function () {
    const myList = new listing('check,out,my,library');

    assert.equal(myList.getAt(2), 'my');
  });

  it('get list of duplicates', function () {
    const myList = new listing('1,2,3,2,1,4');

    assert.equal(myList.getDuplicates().list, '1,2');
  });

  it('get position of value', function () {
    const myList = new listing('1,2,3,4');

    assert.equal(myList.indexOf('3'), 2);
  });

  it('insert element at position', function () {
    const myList = new listing('1,2,3,5');
    myList.insertAt(3, 4);

    assert.equal(myList.list, '1,2,3,4,5');
  });

  it('get last list element', function () {
    const myList = new listing('1,2,3');

    assert.equal(myList.last(), '3');
  });

  it('map list elements', function () {
    const myList = new listing('1,2,3');

    const newList = myList.map(function (val) {
      return val * 2;
    });

    assert.equal(newList.list, '2,4,6');
  });

  it('prepend list element', function () {
    const myList = new listing('1,2,3');
    myList.prepend(0);

    assert.equal(myList.list, '0,1,2,3');
  });

  it('add element at start and end of list', function () {
    const myList = new listing('hello,friend');
    myList.qualify('bye');

    assert.equal(myList.list, 'bye,hello,friend,bye');
  });

  it('remove duplicates', function () {
    const myList = new listing('1,2,3,2,4,1');
    myList.removeDuplicates();

    assert.equal(myList.list, '1,2,3,4');
  });

  it('get list elements without first element', function () {
    const myList = new listing('1,2,3,4');

    assert.equal(myList.rest(), '2,3,4');
  });

  it('reverse list elements', function () {
    const myList = new listing('one,two,three,four');
    myList.reverse();

    assert.equal(myList.list, 'four,three,two,one');
  });

  it('set list element at position', function () {
    const myList = new listing('1,2,4');
    myList.setAt(2, 3);

    assert.equal(myList.list, '1,2,3');
  });

  it('set delimiter', function () {
    const myList = new listing('hello,how,are,you');
    myList.setDelimiter(';');

    assert.equal(myList.list, 'hello;how;are;you');
  });

  it('slice list elements', function () {
    const myList = new listing('1,2,3,4,5');
    myList.slice(1, 4);

    assert.equal(myList.list, '2,3,4');
  });

  it('sort list elements', function () {
    const myList = new listing('4,1,2,6,3,8,9');
    myList.sort();

    assert.equal(myList.list, '1,2,3,4,6,8,9');
  });

  it('swap list elements', function () {
    const myList = new listing('1,2,3,4,5');
    myList.swap(0, 4);

    assert.equal(myList.list, '5,2,3,4,1');
  });

  it('transform list to array', function () {
    const myList = new listing('this,is,my,list');
    const listArr = myList.toArray();

    assert.deepEqual(listArr, ['this', 'is', 'my', 'list']);
  });
});
