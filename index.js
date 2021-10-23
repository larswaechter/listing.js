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
	 * @param {string[]} array
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
		return delimiter.match(/,|;|:/g) !== null;
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
	 * Get list delimiter
	 *
	 * @returns {string} delimiter
	 */
	get delimiter() {
		const delimiter = this.list.match(/,|;|:/g);
		return delimiter !== null && delimiter.length ? delimiter[0] : ',';
	}

	/**
	 * Append new item to list
	 *
	 * @param {string} item
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
	 * @param {number} pos
	 * @returns {string} deleted item
	 */
	deleteAt(pos) {
		const listArr = this.toArray();
		const removed = listArr[pos];
		listArr.splice(pos, 1);
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
	 * @param {number} pos
	 * @returns {string} item
	 */
	getAt(pos) {
		const listArr = this.toArray();
		return listArr[pos];
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
	 * Prepend an item to list.
	 *
	 * @param {string} item
	 */
	prepend(item) {
		const listArr = this.toArray();
		listArr.unshift(item);
		this.list = Listing.arrayToList(listArr, this.delimiter).list;
	}

	/**
	 * Add item at start and end of list
	 *
	 * @param {string} item
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
	 * Slice list from start to end position.
	 *
	 * @param {number} start
	 * @param {number} end
	 * @returns {Listing} sliced list
	 */
	slice(start, end) {
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
	 * Transform list to array based on current delimiter.
	 *
	 * @returns {string[]} array
	 */
	toArray() {
		return this.list.split(this.delimiter);
	}
}

module.exports = Listing;
