require('mocha');

const assert = require('assert');
const Listing = require('./');

describe('listing.js', function () {
	it('validate delimiters', function () {
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

	it('compare list items', function () {
		assert.equal(new Listing('1,2,3').list, '1,2,3');
	});

	it('validate list length', function () {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.length, 4);
	});

	it('create new listing instance from array', function () {
		const myList = Listing.arrayToList([1, 2, 3, 4], ',');
		assert.equal(myList.list, '1,2,3,4');
	});

	it('append new element to list', function () {
		const myList = new Listing('1,2,3');
		myList.append(4);
		assert.equal(myList.list, '1,2,3,4');
	});

	it('clear list', function () {
		const myList = new Listing('1,2,3,4');
		myList.clear();
		assert.equal(myList.list, '');
	});

	it('concat with given list', function () {
		const myList = new Listing('1,2,3');
		const myNewList = new Listing('4,5,6');
		myList.concat(myNewList);
		assert.equal(myList.list, '1,2,3,4,5,6');
	});

	it('list element contains a certain substring', function () {
		const myList = new Listing('hello,whats,up');
		assert.equal(myList.contains('hat'), 1);
	});

	it('list element contains a certain substring (case-insensitive)', function () {
		const myList = new Listing('hello,whats,up');
		assert.equal(myList.containsNoCase('hAt'), 1);
	});

	it('delete list element', function () {
		const myList = new Listing('1,2,3');
		myList.deleteAt(1);
		assert.equal(myList.list, '1,3');
	});

	it('compare lists for equality', function () {
		const myList = new Listing('1,2,3');
		assert(myList.equals(new Listing('1,2,3')));
	});

	it('filter list items', function () {
		const myList = new Listing('1,2,3,4,5,6');
		const newList = myList.filter(function (val) {
			return val % 2 === 0;
		});
		assert.equal(newList.list, '2,4,6');
	});

	it('find list element', function () {
		const myList = new Listing('this,is,a,test');
		assert(myList.find('a'));
	});

	it('find list element (case-insensitive)', function () {
		const myList = new Listing('this,is,a,test');
		assert(myList.findNoCase('tEsT'));
	});

	it('get first list element', function () {
		const myList = new Listing('lorem,ipsum');
		assert.equal(myList.first(), 'lorem');
	});

	it('get list element at position', function () {
		const myList = new Listing('check,out,my,library');
		assert.equal(myList.getAt(2), 'my');
	});

	it('get list of duplicates', function () {
		const myList = new Listing('1,2,3,2,1,4');
		assert.equal(myList.getDuplicates().list, '1,2');
	});

	it('get position of value', function () {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.indexOf('3'), 2);
	});

	it('insert element at position', function () {
		const myList = new Listing('1,2,3,5');
		myList.insertAt(3, 4);
		assert.equal(myList.list, '1,2,3,4,5');
	});

	it('get last list element', function () {
		const myList = new Listing('1,2,3');
		assert.equal(myList.last(), '3');
	});

	it('map list items', function () {
		const myList = new Listing('1,2,3');
		const newList = myList.map(function (val) {
			return val * 2;
		});
		assert.equal(newList.list, '2,4,6');
	});

	it('merge given list and skip duplicates', function () {
		const myList = new Listing('1,2,3');
		const myNewList = new Listing('2,3,4');
		myList.merge(myNewList);
		assert.equal(myList.list, '1,2,3,4');
	});

	it('prepend list element', function () {
		const myList = new Listing('1,2,3');
		myList.prepend(0);
		assert.equal(myList.list, '0,1,2,3');
	});

	it('add element at start and end of list', function () {
		const myList = new Listing('hello,friend');
		myList.qualify('bye');
		assert.equal(myList.list, 'bye,hello,friend,bye');
	});

	it('remove duplicates', function () {
		const myList = new Listing('1,2,3,2,4,1');
		myList.removeDuplicates();
		assert.equal(myList.list, '1,2,3,4');
	});

	it('get list items without first element', function () {
		const myList = new Listing('1,2,3,4');
		assert.equal(myList.rest(), '2,3,4');
	});

	it('reverse list items', function () {
		const myList = new Listing('one,two,three,four');
		myList.reverse();
		assert.equal(myList.list, 'four,three,two,one');
	});

	it('set list element at position', function () {
		const myList = new Listing('1,2,4');
		myList.setAt(2, 3);
		assert.equal(myList.list, '1,2,3');
	});

	it('set delimiter', function () {
		const myList = new Listing('hello,how,are,you');
		myList.setDelimiter(';');
		assert.equal(myList.list, 'hello;how;are;you');
	});

	it('shuffle list items', function () {
		const myList = new Listing('1,2,3,4,5,6');
		myList.shuffle();
		assert.notEqual(myList.list, '1,2,3,4,5,6');
	});

	it('slice list items', function () {
		const myList = new Listing('1,2,3,4,5');
		assert.equal(myList.slice(1, 4), '2,3,4');
		assert.equal(myList.slice(), '1,2,3,4,5');
	});

	it('sort list items', function () {
		const myList = new Listing('4,1,2,6,3,8,9');
		myList.sort();
		assert.equal(myList.list, '1,2,3,4,6,8,9');
	});

	it('swap list items', function () {
		const myList = new Listing('1,2,3,4,5');
		myList.swap(0, 4);
		assert.equal(myList.list, '5,2,3,4,1');
	});

	it('transform list to array', function () {
		const myList = new Listing('this,is,my,list');
		const listArr = myList.toArray();
		assert.deepEqual(listArr, ['this', 'is', 'my', 'list']);
	});

	it('iterate list items', function () {
		const myList = new Listing('2,4,6,8');
		let counter = 0;
		myList.each(function (val, i) {
			assert.equal(val, myList.getAt(counter));
			assert.equal(i, counter);
			counter++;
		});
	});

	it('iterate list items parsed as number', function () {
		const myList = new Listing('2,4,6,8');
		const myArr = [2, 4, 6, 8];
		let counter = 0;
		myList.eachParsed(function (val, i) {
			assert.equal(val, myArr[i]);
			assert.equal(i, counter);
			counter++;
		});
	});

	it('iterate list via generator', function () {
		const myList = new Listing('1,2,3,4');
		let counter = 0;
		for (const val of myList) assert(val === myList.getAt([counter++]));
	});

	it('validate list generator', function () {
		const myList = new Listing('2,4,8');
		const iterator = myList.values();
		assert(iterator.next().value, 2);
		assert(iterator.next().value, 4);
		assert(iterator.next().value, 8);
	});
});
