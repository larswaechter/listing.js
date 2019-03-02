# listing.js
JS Library for working with lists

[![Build Status](https://travis-ci.com/larswaechter/listing.js.svg?branch=master)](https://travis-ci.com/larswaechter/listing.js)

[![NPM](https://nodei.co/npm/listing.js.png)](https://nodei.co/npm/listing.js/)

## Introduction:
listing.js is a library that helps you to work with lists in JavaScript like you may know from other programming languages. For example Adobe's ColdFusion. Most of the functions are similar to JS array methods.

## Install:
Install via npm
```
npm i --save listing.js
```

## Usage:
```javascript
const listing = require('listing.js');

// ES6: import listing from 'listing.js';

const myList = new listing('1,2,3,4');
myList.append(5);

myList.each(val => {
  console.log(val);
});
```

## Valid delimiters and lists:
listing.js recognizes three different types of delimiters:
```javascript
const listing = require('listing.js');

// ,
const myList_1 = new listing('1,2,3,4');

// ;
const myList_2 = new listing('1;2;3;4');

// :
const myList_3 = new listing('1:2:3:4');
```

In this case, each single number is a list element.

You can also use strings instead of numbers as elements:
```javascript
const listing = require('listing.js');

const myList = new listing('hello,I,am,Lars');
```

The list elements are accessible via the ```.list``` property.
Example:
```javascript
const listing = require('listing.js');

const myList = new listing('1,2,3');

// Expected output: 1,2,3
console.log(myList.list)
```

## Documentation

### Properties / Getter
- `list`: Return list elements
- `length`: Return number of list elements
- `delimmiter`: Return list delimiter

### Static methods
- `toList(array, delimiter)`: Create new Listing instance from array

### Methods
- `append(value)`: Append new element to list
- `clear()`: Clear list
- `concat(listing)`: Concat two lists into one
- `contains(substring)`: Check if a list element contains a certain substring and return its position (case-sensitive)
- `containsNoCase(substring)`: Check if a list element contains a certain substring and return its position (case-insensitive)
- `deleteAt(pos)`: Delete a list element at given position
- `each(cb)`: Loop list and return each single value and its index in given callback
- `filter(fn)`: Return new listing instance with all list elements that pass a test
- `find(value)`: Check if list includes given value (case-sensitive)
- `findNoCase(value)`: Check if list includes given value (case-insensitive)
- `first()`: Get first list element
- `getAt(pos)`: Get list element at given position
- `getDuplicates()`: Return new listing instance of duplicated list elements
- `indexOf(value)`: Get position in list of given value
- `insertAt(pos, value)`: Insert element at given position
- `last()`: Get last list element
- `map(fn)`: Return new listing instance with the results of calling a function for every list element
- `prepend(value)`: Prepend element to list
- `qualify(value)`: Add element at start and end of list
- `removeDuplicates()`: Remove duplicated list elements
- `rest()`: Get list without first element
- `reverse()`: Reverse list elements
- `setAt(pos, value)`: Set list element to value at given position
- `setDelimiter(delimiter)`: Set list delimiter
- `slice(start, end)`: Slice list from start to end position
- `sort()`: Sort list
- `swap(pos1, pos2)`: Swap list elements at given positions
- `toArray()`: Transform list to array based on current delimiter

## License
[MIT](https://github.com/larswaechter/listing.js/blob/master/LICENSE)