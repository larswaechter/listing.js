'use strict';

class Listing {
	/**
	 * Create Listing instance
	 *
	 * @param {string} list = ''
	 */
	constructor(list = '') {
		this.list = list;
	}

	/**
	 * Create new Listing instance from array
	 *
	 * @param {string[] | number[]} array
	 * @param {string} delimiter = ','
	 * @returns {Listing} new instance
	 */
	static arrayToList(array, delimiter = ',') {
		return new Listing(array.join(delimiter));
	}

	/**
	 * Check if the given delimiter is valid
	 *
	 * @param {string} delimiter
	 * @returns {boolean}
	 */
	static isValidDelimiter(delimiter) {
		return delimiter.match(/,|;|:|-|_|\./g) !== null;
	}

	/**
	 * Get list length
	 *
	 * @returns {number} length
	 */
	get length() {
		return this.list === '' ? 0 : this.toArray().length;
	}

	/**
	 * Get list delimiter. Returns "," as default delimiter.
	 *
	 * @returns {string} delimiter
	 */
	get delimiter() {
		const delimiter = this.list.match(/,|;|:|-|_|\./g);
		return delimiter !== null && delimiter.length ? delimiter[0] : ',';
	}

	*[Symbol.iterator]() {
		return yield* this.toArray();
	}

	/**
	 * Append new item to list
	 *
	 * @param {string | number} item
	 */
	append(item) {
		if (this.length === 0) this.list = item;
		else this.list = this.list.concat(this.delimiter, item);
	}

	/**
	 * Clear list
	 */
	clear() {
		this.list = '';
	}

	/**
	 * Concat list with another given one.
	 *
	 * @param {Listing} list
	 */
	concat(list) {
		const listArr = this.toArray().concat(list.toArray());
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Check if a list item contains a given substring and return its position (case-sensitive).
	 * Return -1 otherwise.
	 *
	 * @param {string} substring
	 * @returns {number} position
	 */
	contains(substring) {
		const listArr = this.toArray();
		for (let i = 0; i < listArr.length; i++) if (listArr[i].includes(substring)) return i;
		return -1;
	}

	/**
	 * Check if a list item contains a certain substring and return its position (case-insensitive).
	 * Return -1 otherwise.
	 *
	 * @param {string} substring
	 * @returns {number} position
	 */
	containsNoCase(substring) {
		const lower = new Listing(this.list.toLowerCase()).toArray();
		const lowerSub = substring.toLowerCase();
		for (let i = 0; i < lower.length; i++) if (lower[i].includes(lowerSub)) return i;
		return -1;
	}

	/**
	 * Delete a list item at a given position and return it.
	 *
	 * @param {number} position
	 * @returns {string} deleted item
	 */
	deleteAt(position) {
		const listArr = this.toArray();
		const removed = listArr[position];
		listArr.splice(position, 1);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
		return removed;
	}

	/**
	 * Iterate list and call a given callback function for each item.
	 *
	 * @param {Function} callbackFn callback function
	 */
	each(callbackFn) {
		const listArr = this.toArray();
		for (let i = 0; i < listArr.length; i++) callbackFn(listArr[i], i);
	}

	/**
	 * Iterate list and call a given callback function for each item parsed as number.
	 *
	 * @param {Function} callbackFn callback function
	 */
	eachParsed(callbackFn) {
		const listArr = this.toArray();
		for (let i = 0; i < listArr.length; i++) callbackFn(+listArr[i], i);
	}

	/**
	 * Check for equality with given list
	 *
	 * @param {Listing} list
	 * @returns {boolean}
	 */
	equals(list) {
		return this.list === list.list;
	}

	/**
	 * Return the items that meet the condition specified in a callback function.
	 *
	 * @param {Function} callbackFn filter function
	 * @returns {Listing} filtered list
	 */
	filter(callbackFn) {
		const listArr = this.toArray().filter(callbackFn);
		return Listing.arrayToList(listArr, this.delimiter);
	}

	/**
	 * Check if th list includes a given item (case-sensitive).
	 *
	 * @param {string} item
	 * @returns {boolean}
	 */
	find(item) {
		return this.toArray().includes(item);
	}

	/**
	 * Check if the list includes a given item (case-insensitive).
	 *
	 * @param {string} item
	 * @returns {boolean}
	 */
	findNoCase(item) {
		const lower = new Listing(this.list.toLowerCase()).toArray();
		const lowerItem = item.toLowerCase();
		for (const tmp of lower) if (tmp === lowerItem) return true;
		return false;
	}

	/**
	 * Get the first list item.
	 *
	 * @returns {string | undefined} first item
	 */
	first() {
		return this.toArray()[0];
	}

	/**
	 * Get the list item at a given position.
	 * Use negative position to start from the list end.
	 *
	 * @param {number} position
	 * @returns {string | undefined} item
	 */
	getAt(position) {
		const listArr = this.toArray();
		const index = position < 0 ? position + listArr.length : position;
		return listArr[index];
	}

	/**
	 * Return new listing instance of duplicated list items.
	 *
	 * @returns {Listing} duplicated items
	 */
	getDuplicates() {
		const listArr = this.toArray();
		const duplicates = [];

		for (let i = 0; i < listArr.length; i++)
			for (let k = i + 1; k < listArr.length; k++)
				if (listArr[i] === listArr[k] && !duplicates.includes(listArr[k]))
					duplicates.push(listArr[k]);

		return Listing.arrayToList(duplicates, this.delimiter);
	}

	/**
	 * Get position in list of a given item.
	 *
	 * @param {string} item
	 * @returns {number} position
	 */
	indexOf(item) {
		return this.toArray().indexOf(item);
	}

	/**
	 * Insert item at given position.
	 *
	 * @param {number} position
	 * @param {string} item
	 */
	insertAt(position, item) {
		const listArr = this.toArray();
		listArr.splice(position, 0, item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Get last list item.
	 *
	 * @returns {string | undefined} last item
	 */
	last() {
		const listArr = this.toArray();
		return listArr[listArr.length - 1];
	}

	/**
	 * Call a defined callback function on each item, and return a list that contains the results.
	 *
	 * @param {Function} callbackFn map function
	 */
	map(callbackFn) {
		const listArr = this.toArray().map(callbackFn);
		return Listing.arrayToList(listArr, this.delimiter);
	}

	/**
	 * Merge list and skip duplicated values.
	 *
	 * @param {Listing} list
	 */
	merge(list) {
		const listArr = this.toArray();
		const mergeArr = list.toArray();
		for (const item of mergeArr) if (!listArr.includes(item)) listArr.push(item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Prepend an item to the list.
	 *
	 * @param {string | number} item
	 */
	prepend(item) {
		const listArr = this.toArray();
		listArr.unshift(item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Add an item at the start and end of the list.
	 *
	 * @param {string | number} item
	 */
	qualify(item) {
		const listArr = this.toArray();
		listArr.unshift(item);
		listArr.push(item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Remove duplicated list items.
	 */
	removeDuplicates() {
		const listArr = this.toArray();

		for (let i = 0; i < listArr.length; i++)
			for (let k = i + 1; k < listArr.length; k++)
				if (listArr[i] === listArr[k]) listArr.splice(k, 1);

		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Get the list without the first item.
	 *
	 * @returns {Listing}
	 */
	rest() {
		const listArr = this.toArray();
		listArr.shift();
		return Listing.arrayToList(listArr, this.delimiter);
	}

	/**
	 * Reverse list items in place.
	 */
	reverse() {
		const listArr = this.toArray().reverse();
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Set a list item to a value at a given position.
	 * Use negative position to start from the list end.
	 *
	 * @param {string} position
	 * @param {string} value
	 */
	setAt(position, value) {
		const listArr = this.toArray();
		const index = position < 0 ? position + listArr.length : position;
		if (index >= listArr.length || index < 0) throw new Error('Invalid list position!');
		listArr[index] = value;
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Set list delimiter.
	 *
	 * @param {string} delimiter
	 */
	setDelimiter(delimiter) {
		if (!Listing.isValidDelimiter(delimiter)) throw new Error('Invalid delimiter: ' + delimiter);
		const regex = new RegExp(this.delimiter, 'g');
		this.list = this.list.replace(regex, delimiter);
	}

	/**
	 * Shuffle list in place.
	 */
	shuffle() {
		const listArr = this.toArray();
		let counter = listArr.length;

		// while there are elements in the array
		while (counter > 0) {
			// pick a random index
			const idx = Math.floor(Math.random() * counter--);

			// swap the last element with it
			[listArr[counter], listArr[idx]] = [listArr[idx], listArr[counter]];
		}

		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Slice list from start to end position.
	 *
	 * @param {number} start = 0
	 * @param {number} end = list length
	 * @returns {Listing} sliced list
	 */
	slice(start = 0, end = this.length) {
		const newArr = this.toArray().slice(start, end);
		return Listing.arrayToList(newArr, this.delimiter);
	}

	/**
	 * Sort list in place.
	 *
	 * @param {Function} compareFn compare function
	 */
	sort(compareFn) {
		const listArr = this.toArray();
		listArr.sort(compareFn);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Swap list items at given positions.
	 * Use negative position to start from the list end.
	 *
	 * @param {number} position1
	 * @param {number} position2
	 */
	swap(position1, position2) {
		const listArr = this.toArray();
		const index1 = position1 < 0 ? listArr.length + position1 : position1;
		const index2 = position2 < 0 ? listArr.length + position2 : position2;

		const temp = listArr[index1];
		listArr[index1] = listArr[index2];
		listArr[index2] = temp;

		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Get a new Iterator object that contains the values for each list item.
	 */
	*values() {
		for (const item of this) yield item;
	}

	/**
	 * Transform list to array based on current delimiter.
	 *
	 * @returns {string[]} array
	 */
	toArray() {
		return this.list.split(this.delimiter);
	}
}

module.exports = Listing;
