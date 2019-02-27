# listing.js
JS Library for working with lists

## Introduction:
listing.js is a library that helps you to work with lists in JavaScript like you may know from other programming languages. For example Adobe's ColdFusion. Most of the functions are similar to JS Array methods.

## Install:
Install via npm
```
npm i --save listing.js
```

## Usage:
```javascript
const listing = require('listing.js');

const myList = new Listing('1,2,3,4');
myList.append(5);

myList.each(val => {
  console.log(val);
});
```

## Valid delimiters and lists:
listings.js recognizes three different types of delimiters:
```javascript
const listing = require('listing.js');

// ,
const myList_1 = new Listing('1,2,3,4');

// ;
const myList_2 = new Listing('1;2;3;4');

// :
const myList_3 = new Listing('1:2:3:4');
```

In this case, each single number is a list element.

You can also use strings instead of numbers as elements:
```javascript
const listing = require('listing.js');

const myList = new Listing('hello,I,am,Lars');
```

The list elements are accessible via the ```.list``` property.
Example:
```javascript
const listing = require('listing.js');

const myList = new Listing('1,2,3');

// Expected output: 1,2,3
console.log(myList.list)
```


## Documentation
* ```listing.append(list, value)```: Appending a value to a list
* ```listing.avg(list)```: Returns the average of values in a list
* ```listing.changeDelims(list, newDelimiter)```: Changes the delimiter of a list
* ```listing.concat(list1, list2)```: Concats two lists
* ```listing.contains(list, value)```: Checks if a list value contains a certain substring and returns its position
* ```listing.containsNoCase(list, value)```: Checks if a list contains a certain substring and returns its position - Not case sensitive
* ```listing.deleteAt(list, position)```: Deletes a value at a certain position
* ```listing.each(list, function(value, index){})```: Loops a list and returns each single value and its index
* ```listing.find(list, value)```: Searches for a value in a list and returns true if it's included
* ```listing.findNoCase(list, value)```: Searches for a value in a list and returns true if it's included - Not case sensitive
* ```listing.first(list)```: Returns the first value of a list
* ```listing.getAt(list, position)```: Returns the value of a list at a certain position
* ```listing.getDuplicates(list)```: Returns a new list with all duplicated values
* ```listing.indexOf(list, value)```: Returns the position of a certain value in a list
* ```listing.isList(list)```: Checks for a valid list
* ```listing.insertAt(list, position, value)```: Inserts a value at a certain position
* ```listing.last(list)```: Returns the last value of a list
* ```listing.len(list)```: Returns the length of a list
* ```listing.max(list)```: Returns the highest value of a list
* ```listing.min(list)```: Returns the smallest value of a list
* ```listing.prepend(list, value)```: Adds a certain value at the beginning of a list
* ```listing.qualify(list, value)```: Adds a certain value at the beginning and at the end of a list
* ```listing.removeDuplicates(list)```: Removes all duplicated values in a list and returns the new list
* ```listing.replace(stringToReplace, list1, list2)```: Checks a string for upcoming values from list1 and replaces them with the corresponding value from list2
* ```listing.replaceNoCase(stringToReplace, list1, list2)```: Checks a string for upcoming values from list1 and replaces them with the corresponding element from list2 - Not case sensitive
* ```listing.rest(list)```: Returns the list without its first element
* ```listing.reverse(list)```: Reverses the order of elements in a list
* ```listing.setAt(list, position, value)```: Replaces the content of a list element
* ```listing.slice(list, start, end)```: Selects a part of a list and returns the new list
* ```listing.sort(list)```: Sorts the elements of a list
* ```listing.swap(list, pos1, pos2)```: Swaps the elements of a list at the corresponding positions
* ```listing.toArray(list)```: Copies the elements of a list to an Array
* ```listing.valueCount(list)```: Counts the occurence of a certain value in a list
* ```listing.valueCountNoCase```: Counts the occurence of a certain value in a list - Not case sensitive
