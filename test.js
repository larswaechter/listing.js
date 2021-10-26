'use strict';

require('mocha');

const assert = require('assert');
const Listing = require('./');

describe('listing.js', () => {
	it('validate delimiters', () => {
		assert(!Listing.isValidDelimiter('^'));

		const myList = new Listing('1,2,3');
		assert(Listing.isValidDelimiter(','));
		assert.equal(myList.delimiter, ',');
		assert.equal(myList.list, '1,2,3');

		const myList1 = new Listing('1;2;3');
		assert(Listing.isValidDelimiter(';'));
		assert.equal(myList1.delimiter, ';');
		assert.equal(myList1.list, '1;2;3');

		const myList2 = new Listing('1:2:3');
		assert(Listing.isValidDelimiter(':'));
		assert.equal(myList2.delimiter, ':');
		assert.equal(myList2.list, '1:2:3');

		const myList3 = new Listing('1-2-3');
		assert(Listing.isValidDelimiter('-'));
		assert.equal(myList3.delimiter, '-');
		assert.equal(myList3.list, '1-2-3');

		const myList4 = new Listing('1_2_3');
		assert(Listing.isValidDelimiter('_'));
		assert.equal(myList4.delimiter, '_');
		assert.equal(myList4.list, '1_2_3');

		const myList5 = new Listing('1.2.3');
		assert(Listing.isValidDelimiter('.'));
		assert.equal(myList5.delimiter, '.');
		assert.equal(myList5.list, '1.2.3');
	});

	it('compare list items', () => {
		assert.equal(new Listing('1,2,3').list, '1,2,3');
	});

	it('validate list length', () => {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.length, 4);
	});

	it('create new listing instance from array', () => {
		const myList = Listing.arrayToList([1, 2, 3, 4], ',');
		const myList2 = Listing.arrayToList([1, 2, 3, 4], ';');
		assert.equal(myList.list, '1,2,3,4');
		assert.equal(myList2.list, '1;2;3;4');
	});

	it('append new element to list', () => {
		const myList = new Listing('1,2,3');
		myList.append(4);
		assert.equal(myList.list, '1,2,3,4');
	});

	it('clear list', () => {
		const myList = new Listing('1,2,3,4');
		myList.clear();
		assert.equal(myList.list, '');
	});

	it('concat with given list', () => {
		const myList = new Listing('1,2,3');
		const myNewList = new Listing('3,4,5,6');
		myList.concat(myNewList);
		assert.equal(myList.list, '1,2,3,3,4,5,6');
	});

	it('list element contains a certain substring', () => {
		const myList = new Listing('hello,whats,up');
		assert.equal(myList.contains('hat'), 1);
		assert.equal(myList.contains('ups'), -1);
	});

	it('list element contains a certain substring (case-insensitive)', () => {
		const myList = new Listing('hello,whats,up');
		assert.equal(myList.containsNoCase('hAt'), 1);
		assert.equal(myList.containsNoCase('lOs'), -1);
	});

	it('delete list element', () => {
		const myList = new Listing('1,2,3');
		const item = myList.deleteAt(1);
		assert.equal(item, '2');
		assert.equal(myList.list, '1,3');
	});

	it('compare lists for equality', () => {
		const myList = new Listing('1,2,3');
		assert(myList.equals(new Listing('1,2,3')));
		assert(!myList.equals(new Listing('1,2,3,4')));
	});

	it('filter list items', () => {
		const myList = new Listing('1,2,3,4,5,6');
		const newList = myList.filter((val) => val % 2 === 0);
		assert.equal(newList.list, '2,4,6');
	});

	it('find list element', () => {
		const myList = new Listing('this,is,a,test');
		assert(myList.find('a'));
		assert(!myList.find('A'));
	});

	it('find list element (case-insensitive)', () => {
		const myList = new Listing('this,is,a,test');
		assert(myList.findNoCase('tEsT'));
	});

	it('get first list element', () => {
		const myList = new Listing('lorem,ipsum');
		assert.equal(myList.first(), 'lorem');
	});

	it('get list element at position', () => {
		const myList = new Listing('check,out,my,library');
		assert.equal(myList.getAt(2), 'my');
		assert.equal(myList.getAt(-3), 'out');
	});

	it('get list of duplicates', () => {
		const myList = new Listing('1,2,3,2,1,2,4');
		assert.equal(myList.getDuplicates().list, '1,2');
	});

	it('get position of value', () => {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.indexOf('3'), 2);
		assert.equal(myList.indexOf('5'), -1);
	});

	it('insert element at position', () => {
		const myList = new Listing('1,2,3,5');
		myList.insertAt(3, 4);
		assert.equal(myList.list, '1,2,3,4,5');
	});

	it('get last list element', () => {
		const myList = new Listing('1,2,3');
		assert.equal(myList.last(), '3');
	});

	it('map list items', () => {
		const myList = new Listing('1,2,3');
		const newList = myList.map((val) => val * 2);
		assert.equal(newList.list, '2,4,6');
	});

	it('merge given list and skip duplicates', () => {
		const myList = new Listing('1,2,3');
		myList.merge(new Listing('2,3,4'));
		assert.equal(myList.list, '1,2,3,4');
	});

	it('prepend list element', () => {
		const myList = new Listing('1,2,3');
		myList.prepend(0);
		assert.equal(myList.list, '0,1,2,3');
	});

	it('add element at start and end of list', () => {
		const myList = new Listing('hello,friend');
		myList.qualify('bye');
		assert.equal(myList.list, 'bye,hello,friend,bye');
	});

	it('remove duplicates', () => {
		const myList = new Listing('1,2,3,2,4,1');
		myList.removeDuplicates();
		assert.equal(myList.list, '1,2,3,4');
	});

	it('get list without first element', () => {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.rest().list, '2,3,4');
	});

	it('reverse list items', () => {
		const myList = new Listing('one,two,three,four');
		myList.reverse();
		assert.equal(myList.list, 'four,three,two,one');
	});

	it('set list element at position', () => {
		const myList = new Listing('1,2,4');
		myList.setAt(2, 3);
		myList.setAt(-3, 0);
		assert.equal(myList.list, '0,2,3');
	});

	it('set delimiter', () => {
		const myList = new Listing('hello,how,are,you');
		myList.setDelimiter(';');
		assert.equal(myList.list, 'hello;how;are;you');
	});

	it('shuffle list items', () => {
		const myList = new Listing('1,2,3,4,5,6');
		myList.shuffle();
		assert.notEqual(myList.list, '1,2,3,4,5,6');
	});

	it('slice list items', () => {
		const myList = new Listing('1,2,3,4,5');
		assert.equal(myList.slice(1, 4).list, '2,3,4');
		assert.equal(myList.slice().list, '1,2,3,4,5');
	});

	it('sort list items', () => {
		const myList = new Listing('4,1,2,6,3,8,9');
		myList.sort();
		assert.equal(myList.list, '1,2,3,4,6,8,9');
	});

	it('swap list items', () => {
		const myList = new Listing('1,2,3,4,5');
		myList.swap(0, 4);
		myList.swap(1, -2);
		assert.equal(myList.list, '5,4,3,2,1');
	});

	it('transform list to array', () => {
		const myList = new Listing('this,is,my,list');
		assert.deepEqual(myList.toArray(), ['this', 'is', 'my', 'list']);
	});

	it('iterate list items', () => {
		const myList = new Listing('2,4,6,8');
		let counter = 0;
		myList.each((val, i) => {
			assert.equal(val, myList.getAt(counter));
			assert.equal(i, counter);
			counter++;
		});
	});

	it('iterate list items parsed as number', () => {
		const myList = new Listing('2,4,6,8');
		const parsed = [2, 4, 6, 8];
		let counter = 0;
		myList.eachParsed((val, i) => {
			assert.equal(val, parsed[i]);
			assert.equal(i, counter);
			counter++;
		});
	});

	it('iterate list via generator', () => {
		const myList = new Listing('1,2,3,4');
		let counter = 0;
		for (const val of myList) assert(val === myList.getAt([counter++]));
	});

	it('validate list generator', () => {
		const myList = new Listing('2,4,8');
		const iterator = myList.values();
		assert.equal(iterator.next().value, 2);
		assert.equal(iterator.next().value, 4);
		assert.equal(iterator.next().value, 8);
	});

	it('validate some method', () => {
		const myList = new Listing('2,4,8');
		assert.equal(myList.some((item) => item % 2 === 0),true);    // Returns true
		assert.equal(myList.some((item) => item > 10),false);    // Returns false
	});
});
