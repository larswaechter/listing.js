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
	 * Returns -1 otherwise.
	 *
	 * @param {string} substring
	 * @returns {number} position
	 */
	contains(substring) {
		const listArr = this.toArray();
		for (var i = 0; i < listArr.length; i++) if (listArr[i].includes(substring)) return i;
		return -1;
	}

	/**
	 * Check if a list item contains a certain substring and return its position (case-insensitive).
	 * Returns -1 otherwise.
	 *
	 * @param {string} substring
	 * @returns {number} position
	 */
	containsNoCase(substring) {
		const lower = new Listing(this.list.toLowerCase()).toArray();
		for (var i = 0; i < lower.length; i++) if (lower[i].includes(substring.toLowerCase())) return i;
		return -1;
	}

	/**
	 * Delete a list item at given position and return it.
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
		for (var i = 0; i < listArr.length; i++) callbackFn(listArr[i], i);
	}

	/**
	 * Iterate list and call a given callback function for each item pased as number.
	 *
	 * @param {Function} callbackFn callback function
	 */
	eachParsed(callbackFn) {
		const listArr = this.toArray();
		for (var i = 0; i < listArr.length; i++) callbackFn(+listArr[i], i);
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
	 * Returns the items that meet the condition specified in a callback function.
	 *
	 * @param {Function} callbackFn filter function
	 * @returns {Listing} filtered list
	 */
	filter(callbackFn) {
		const listArr = this.toArray().filter(callbackFn);
		return Listing.arrayToList(listArr, this.delimiter);
	}

	/**
	 * Check if list includes given item (case-sensitive).
	 *
	 * @param {string} item
	 * @returns {boolean}
	 */
	find(item) {
		const listArr = this.toArray();
		return listArr.includes(item);
	}

	/**
	 * Check if list includes given item (case-insensitive).
	 *
	 * @param {string} item
	 * @returns {boolean}
	 */
	findNoCase(item) {
		const lower = new Listing(this.list.toLowerCase()).toArray();
		const lowerItem = item.toLowerCase();
		for (const _item of lower) if (_item === lowerItem) return true;
		return false;
	}

	/**
	 * Get first list item.
	 *
	 * @returns {string} item
	 */
	first() {
		const listArr = this.toArray();
		return listArr[0];
	}

	/**
	 * Get list item at given position.
	 *
	 * @param {number} position
	 * @returns {string} item
	 */
	getAt(position) {
		const listArr = this.toArray();
		return listArr[position];
	}

	/**
	 * Return new listing instance of duplicated list items.
	 *
	 * @returns {Listing} duplicated items
	 */
	getDuplicates() {
		const listArr = this.toArray();
		const tempArr = [];

		for (var i = 0; i < listArr.length; i++)
			for (var k = i + 1; k < listArr.length; k++)
				if (listArr[i] === listArr[k] && !tempArr.includes(listArr[k])) tempArr.push(listArr[k]);

		return Listing.arrayToList(tempArr, this.delimiter);
	}

	/**
	 * Get position in list of given item.
	 *
	 * @param {string} item
	 * @returns {number} position
	 */
	indexOf(item) {
		const listArr = this.toArray();
		return listArr.indexOf(item);
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
	 * @returns {string} last item
	 */
	last() {
		const listArr = this.toArray();
		return listArr[listArr.length - 1];
	}

	/**
	 * Calls a defined callback function on each item, and returns an array that contains the results.
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
	 * Prepend an item to list.
	 *
	 * @param {string | number} item
	 */
	prepend(item) {
		const listArr = this.toArray();
		listArr.unshift(item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Add item at start and end of list
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

		for (var i = 0; i < listArr.length; i++)
			for (var k = i + 1; k < listArr.length; k++)
				if (listArr[i] === listArr[k]) listArr.splice(k, 1);

		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Get list without first item.
	 *
	 * @returns {Listing}
	 */
	rest() {
		const listArr = this.toArray();
		listArr.shift();
		return Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Reverse list items in place.
	 */
	reverse() {
		const listArr = this.toArray().reverse();
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Set list item to value at given position.
	 *
	 * @param {string} position
	 * @param {string} value
	 */
	setAt(position, value) {
		const listArr = this.toArray();
		if (position > listArr.length) throw new Error('Invalid list position!');
		listArr[position] = value;
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
		return Listing.arrayToList(newArr, this.delimiter).list;
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
	 *
	 * @param {number} position1
	 * @param {number} position2
	 */
	swap(position1, position2) {
		const listArr = this.toArray();

		const temp = listArr[position1];
		listArr[position1] = listArr[position2];
		listArr[position2] = temp;

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
