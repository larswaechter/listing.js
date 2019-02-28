/*!
 * listing.js <https://github.com/larswaechter/listing.js>
 *
 * Copyright (c) 2017 - 2019, Lars Wächter.
 * Released under the MIT License.
 */

class Listing {
  /**
   * Create Listing instance
   * @param {string} list = ''
   */
  constructor(list = '') {
    this.list = list;
  }

  /**
   * Create new Listing instance from array
   * @param {string} array
   * @param {string} delimiter = ''
   */
  static toList(array, delimiter = ',') {
    return new Listing(array.join(delimiter));
  }

  /**
   * Get list length
   */
  get length() {
    return this.list === '' ? 0 : this.list.split(this.delimiter).length;
  }

  /**
   * Get list delimiter
   */
  get delimiter() {
    const delimiter = this.list.match(/,|;|:/g);
    return delimiter != null && delimiter.length ? delimiter[0] : ',';
  }

  /**
   * Append new element to list
   * @param {string} value
   */
  append(value) {
    if (this.length === 0) {
      this.list = value;
    } else {
      this.list = this.list.concat(this.delimiter, value);
    }
  }

  /**
   * Clear list
   */
  clear() {
    this.list = '';
  }

  /**
   * Concat two lists into one
   * @param {Listing} list
   */
  concat(list) {
    const listArr = this.toArray().concat(list.toArray());
    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Check if a list element contains a certain substring and return its position (case-sensitive)
   * @param {string} substring
   */
  contains(substring) {
    const listArr = this.toArray();

    for (var i = 0; i < listArr.length; i++) {
      if (listArr[i].includes(substring)) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Check if a list element contains a certain substring and return its position (case-insensitive)
   * @param {string} substring
   */
  containsNoCase(substring) {
    const listArr = this.toArray();

    for (var i = 0; i < listArr.length; i++) {
      if (listArr[i].toLowerCase().includes(substring.toLowerCase())) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Delete a list element at given position
   * @param {number} pos
   */
  deleteAt(pos) {
    const listArr = this.toArray();
    listArr.splice(pos, 1);

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Loop list and return each single value and its index in given callback
   * @param {Function} cb
   */
  each(cb) {
    const listArr = this.toArray();

    for (var i = 0; i < listArr.length; i++) {
      cb(listArr[i], i);
    }
  }

  /**
   * Return new listing instance with all list elements that pass a test
   * @param {Function} fn
   */
  filter(fn) {
    const listArr = this.toArray();
    const listArrFiltered = listArr.filter(fn);

    return Listing.toList(listArrFiltered, this.delimiter);
  }

  /**
   * Check if list includes given value (case-sensitive)
   * @param {string} value
   */
  find(value) {
    const listArr = this.toArray();

    return listArr.includes(value);
  }

  /**
   * Check if list includes given value (case-insensitive)
   * @param {string} value
   */
  findNoCase(value) {
    const listArr = this.toArray();

    for (var i = 0; i < listArr.length; i++) {
      if (listArr[i].toLowerCase() == value.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * Get first list element
   */
  first() {
    const listArr = this.toArray();

    return listArr[0];
  }

  /**
   * Get list element at given position
   * @param {number} pos
   */
  getAt(pos) {
    const listArr = this.toArray();

    return listArr[pos];
  }

  /**
   * Return new listing instance of duplicated list elements
   */
  getDuplicates() {
    const listArr = this.toArray();
    const tempArr = new Array();

    for (var i = 0; i < listArr.length; i++) {
      for (var k = i + 1; k < listArr.length; k++) {
        if (listArr[i] === listArr[k]) {
          tempArr.push(listArr[k]);
        }
      }
    }

    return Listing.toList(tempArr, this.delimiter);
  }

  /**
   * Get position in list of given value
   * @param {string} value
   */
  indexOf(value) {
    const listArr = this.toArray();

    return listArr.indexOf(value);
  }

  /**
   * Insert element at given position
   * @param {number} pos
   * @param {string} value
   */
  insertAt(pos, value) {
    const listArr = this.toArray();
    listArr.splice(pos, 0, value);

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Get last list element
   */
  last() {
    const listArr = this.toArray();
    return listArr[listArr.length - 1];
  }

  /**
   * Return new listing instance with the results of calling a function for every list element
   * @param {Function} fn
   */
  map(fn) {
    const listArr = this.toArray();
    const listArrMapped = listArr.map(fn);

    return Listing.toList(listArrMapped, this.delimiter);
  }

  /**
   * Prepend element to list
   * @param {string} value
   */
  prepend(value) {
    const listArr = this.toArray();
    listArr.splice(0, 0, value);

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Add element at start and end of list
   * @param {string} value
   */
  qualify(value) {
    const listArr = this.toArray();
    listArr.splice(0, 0, value);
    listArr.splice(listArr.length, 0, value);

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Remove duplicated list elements
   */
  removeDuplicates() {
    const listArr = this.toArray();

    for (var i = 0; i < listArr.length; i++) {
      for (var k = i + 1; k < listArr.length; k++) {
        if (listArr[i] == listArr[k]) {
          listArr.splice(k, 1);
        }
      }
    }

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Get list elements without first element
   */
  rest() {
    const listArr = this.toArray();
    listArr.shift();

    return Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Reverse list elements
   */
  reverse() {
    const listArr = this.toArray().reverse();
    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Set list element to value at given position
   * @param {string} pos
   * @param {string} value
   */
  setAt(pos, value) {
    const listArr = this.toArray();
    listArr[pos] = value;

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Set list delimiter
   * @param {string} delimiter
   */
  setDelimiter(delimiter) {
    const regex = new RegExp(this.delimiter, 'g');
    this.list = this.list.replace(regex, delimiter);
  }

  /**
   * Slice list from start to end position
   * @param {number} start
   * @param {number} end
   */
  slice(start, end) {
    const listArr = this.toArray();
    const newArr = listArr.slice(start, end);

    this.list = Listing.toList(newArr, this.delimiter).list;
  }

  /**
   * Sort list
   */
  sort() {
    const listArr = this.toArray();
    listArr.sort();

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Swap list elements at given positions
   * @param {string} pos1
   * @param {string} pos2
   */
  swap(pos1, pos2) {
    const listArr = this.toArray();

    const temp = listArr[pos1];
    listArr[pos1] = listArr[pos2];
    listArr[pos2] = temp;

    this.list = Listing.toList(listArr, this.delimiter).list;
  }

  /**
   * Transform list to array based on current delimiter
   */
  toArray() {
    return this.list.split(this.delimiter);
  }
}

module.exports = Listing;
