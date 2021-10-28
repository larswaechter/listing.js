# listing.js

A JavaScript library for working with comma separated lists.

[![NPM](https://nodei.co/npm/listing.js.png)](https://nodei.co/npm/listing.js/)

![Tests](https://github.com/larswaechter/listing.js/actions/workflows/tests.yaml/badge.svg)

![Linter](https://github.com/larswaechter/listing.js/actions/workflows/linter.yaml/badge.svg)

## Introduction

listing.js is a library that simplifies the work with comma separated lists in JavaScript. Most of the features are similar to those of array methods. Besides commas, other delimiters are supported as well.

## 💻 Installation

Install via npm or yarn:

```
npm i --save listing.js
```

## 🔨 Usage

```javascript
// ES6: import Listing from 'listing.js';
const Listing = require('listing.js');

const list = new Listing('1,2,3,4');
list.prepend(0);
list.append(5);

// 0 1 2 3 4 5
for (const item of list) console.log(item);
```

The list items are accessible via the `.list` property:

```javascript
const myList = new Listing('1,2,3');
console.log(myList.list); // 1,2,3
```

You can also use strings instead of numbers as items:

```javascript
const list = new Listing('hello,I,am,John');
```

listing.js supports the following delimiters. In this case, each number is a single list item:

```javascript
const list1 = new Listing('1,2,3'); // ,
const list2 = new Listing('1;2;3'); // ;
const list3 = new Listing('1:2:3'); // :
const list4 = new Listing('1-2-3'); // -
const list5 = new Listing('1_2_3'); // _
const list6 = new Listing('1.2.3'); // .
const list7 = new Listing('1|2|3'); // |
```

The delimiter can be changed later on:

```javascript
const myList = new Listing('1,2,3');
myList.setDelimiter(':');
console.log(myList.list); // 1:2:3
```

## 📚 Documentation

You can find the complete documentation including all available methods [here](https://larswaechter.github.io/listing.js/).

## :octocat: Contributing

See [CONTRIBUTING.md](https://github.com/larswaechter/listing.js/blob/master/CONTRIBUTING.md)

## 🔓 License

[MIT](https://github.com/larswaechter/listing.js/blob/master/LICENSE)
