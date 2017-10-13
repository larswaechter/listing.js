# Listing.js
JS Library for working with lists

### Import:
Node.js: ```const listing = require('./listing');``` <br/>
Browser: ```<script type="text/javascript" src="listing.js"></script>```


## Introduction:
Listings.js is a library that helps you to work with lists in Javascript like you may know from other programming languages. For example Adobe's ColdFusion. Most of the functions are the same as the JS array methods, and even more.

## Valid delimiters and lists:
Listings.js recognizes three different types of delimiters:
* ```var list = "1,2,3,4"```
* ```var list = "1;2;3;4"```
* ```var list = "1:2:3:4"```

In this case, each single number is a list element. <br/>

You can also use strings as elements:
* ```var list = "hello,I,am,Lars"```
* ```var list = "Nice;to;see;you"```

It's also possible to use empty spaces like:
* ```var list = "hello my,name is,not Peter"```
* ```listing.find(list, 'name is') -> Result: 1```

## Examples:
```javascript
var list = "1,54,2,64,24,76";
listing.append(list, 89);

// Result: "1,54,2,64,24,76,89"
```

```javascript
var list = "1,54,2,64,24,76";
listing.changeDelims(list, ";");

// Result: "1;54;2;64;24;76;89"
```

```javascript
var list1 = "1,54,2";
var list2 = "77,31,501";;
listing.concat(list1, list2);

// Result: "1,54,2,77,31,501"
```

```javascript
var list = "ThisIs,aList,withStrings";
listing.contains(list, 'List');

// Result: "1"
```

```javascript
var list = "43,21,5,9,104";
listing.each(list, function(item, index) {
  // Iterartion 0 -> item = 43, index = 0
  // Iterartion 0 -> item = 21, index = 1
  // Iterartion 0 -> item = 5, index = 2
  // Iterartion 0 -> item = 9, index = 3
  // Iterartion 0 -> item = 104, index = 4
});
```

```javascript
var list = "13,32,54,13,11,6,103,54";
listing.getDuplicates(list);

// Result: "13,54"
```

```javascript
var list = "13,32,54";
listing.len(list);

// Result: "3"
```

```javascript
var myString = 'This is a test';
var list1 = 'a,test';
var list2 = 'no,fun';

listing.replace(myString, list1, list2);

// Result: "This is no fun"
```

## Methods
* ```listing.append(list, value)```: Appending a value to a list
* ```listing.avg(list)```: Returns the average of values in a list
* ```listing.changeDelims(list, newDelimiter)```: Changes the delimiter of a list
* ```listing.concat(list1, list2)```: Concats two lists
* ```listing.contains(list, value)```: Checks if a list value contains a certain substring and returns its position
* ```listing.containsNoCase(list, value)```: Checks if a list contains a certain substring and returns its position - Not case sensitive
* ```listing.deleteAt(list, position)```: Deletes a value at a certain position
* ```listing.each(list, function(value, index){})```: Loops a list and returns each single value and its index
* ```listing.find(list, value)```: Searches for a value in a list and returns its position
* ```listing.findNoCase(list, value)```: Searches for a value in a list and returns its position - Not case sensitive
* ```listing.first(list)```: Returns the first value of a list
* ```listing.getAt(list, position)```: Returns the value of a list at a certain position
* ```listing.getDuplicates(list)```: Returns a new list with all duplicated values
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
