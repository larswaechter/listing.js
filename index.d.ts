/*!
 * listing.js <https://github.com/larswaechter/listing.js>
 *
 * Copyright (c) 2017 - 2019, Lars Wächter.
 * Released under the MIT License.
 */

declare module 'listing.js' {
  type delimiter = ',' | ':' | ';';

  class Listing {
    public list: string;
    public length: number;
    public delimiter: delimiter;

    public static toList(array: string[], delimiter?: delimiter): Listing;

    public constructor(list?: string);

    /**
     * Append new element to list
     * @param {string} value
     */
    public append(value: string): void;

    /**
     * Clear list
     */
    public clear(): void;

    /**
     * Concat two lists into one
     * @param {string} list
     */
    public concat(list: Listing): void;

    /**
     * Check if a list element contains a certain substring and return its position (case-sensitive)
     * @param {string} substring
     */
    public contains(substring: string): number;

    /**
     * Check if a list element contains a certain substring and return its position (case-insensitive)
     * @param {string} substring
     */
    public containsNoCase(substring: string): number;

    /**
     * Delete a list element at given position
     * @param {number} pos
     */
    public deleteAt(pos: number): void;

    /**
     * Loop list and return each single value and its index in given callback
     * @param {function} cb
     */
    public each(cb: Function): void;

    /**
     * Return new listing instance with all list elements that pass a test
     * @param {function} fn
     */
    public filter(fn: Function): Listing;

    /**
     * Check if list includes given value (case-sensitive)
     * @param {string} value
     */
    public find(value: string): boolean;

    /**
     * Check if list includes given value (case-insensitive)
     * @param {string} value
     */
    public findNoCase(value: string): boolean;

    /**
     * Get first list element
     */
    public first(): string;

    /**
     * Get list element at given position
     * @param {number} pos
     */
    public getAt(pos: number): string;

    /**
     * Return new listing instance of duplicated list elements
     */
    public getDuplicates(): Listing;

    /**
     * Get position in list of given value
     * @param {string} value
     */
    public indexOf(value: string): number;

    /**
     * Insert element at given position
     * @param {number} pos
     * @param {string} value
     */
    public insertAt(pos: number, value: string): void;

    /**
     * Get last list element
     */
    public last(): string;

    /**
     * Return new listing instance with the results of calling a function for every list element
     * @param {function} fn
     */
    public map(fn: Function): Listing;

    /**
     * Prepend element to list
     * @param {string} value
     */
    public prepend(value: string): void;

    /**
     * Add element at start and end of list
     * @param {string} value
     */
    public qualify(value: string): void;

    /**
     * Remove duplicated list elements
     */
    public removeDuplicates(): void;

    /**
     * Get list elements without first element
     */
    public rest(): string;

    /**
     * Reverse list elements
     */
    public reverse(): void;

    /**
     * Set list element to value at given position
     * @param {string} pos
     * @param {string} value
     */
    public setAt(pos: number, value: string): void;

    /**
     * Set list delimiter
     * @param {string} delimiter
     */
    public setDelimiter(delimiter: delimiter): void;

    /**
     * Slice list from start to end position
     * @param {number} start
     * @param {number} end
     */
    public slice(start: number, end: number): void;

    /**
     * Sort list
     */
    public sort(): void;

    /**
     * Swap list elements at given positions
     * @param {string} pos1
     * @param {string} pos2
     */
    public swap(pos1: number, pos2: number): void;

    /**
     * Transform list to array based on current delimiter
     */
    public toArray(): string[];
  }

  export = Listing;
}
