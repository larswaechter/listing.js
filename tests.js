const listing = require('./listing');

// List append
var myList = "1,2,3,4";
console.log("listing.append(): " + listing.append(myList, 5));
console.log("listing.append(): " + listing.append(myList, "6"));


// List avg
var myList = "1,2,3,4";
console.log("listing.avg(): " + listing.avg(myList));


// List changeDelims
var myList = "1,2,3,4";
console.log("listing.changeDelims(): " + listing.changeDelims(myList, ";"));


// List concat
var myList = "1,2,3,4";
var myList2 = "5,6,7,8"
console.log("listing.concat(): " + listing.concat(myList, myList2));


// List contains
var myList = "hello, this is, a,test";
var myList2 = "1,2,3,4"
console.log("listing.contains(): " + listing.contains(myList, "this is"));
console.log("listing.contains(): " + listing.contains(myList2, 4));


// List containsNoCase
var myList = "hello, this is, a,test";
console.log("listing.containsNoCase(): " + listing.containsNoCase(myList, "this Is"));


// List deleteAt
var myList = "1,2,3,4";
console.log("listing.deleteAt(): " + listing.deleteAt(myList, 3));


// List each
var myList = "1,2,3,4";
listing.each(myList, function(item, index) {
  console.log("listing.each(): " + "Item - " + item + ", Index - " + index);
})


// List find
var myList = "1,2,3,4";
console.log("listing.find(): " + listing.find(myList, 3));


// List findNoCase
var myList = "a,list,of,WorDs";
console.log("listing.findNoCase(): " + listing.findNoCase(myList, "words"));


// List first
var myList = "1,2,3,4";
console.log("listing.first(): " + listing.first(myList));


// List getAt
var myList = "1,2,3,4";
console.log("listing.getAt(): " + listing.getAt(myList, 3));


// List getDuplicates
var myList = "1,2,3,4,2,3";
var myList2 = "hello,my,name,hello,my";
console.log("listing.getDuplicates(): " + listing.getDuplicates(myList));
console.log("listing.getDuplicates(): " + listing.getDuplicates(myList2));


// List indexOf
var myList = "1,2,3,4";
console.log("listing.indexOf(): " + listing.indexOf(myList, "4"));


// List isList
var myList = "1,2,3,4";
console.log("listing.isList(): " + listing.isList(myList));


// List insertAt
var myList = "1,2,3,4";
console.log("listing.insertAt(): " + listing.insertAt(myList, 2, 10));


// List last
var myList = "1,2,3,4";
console.log("listing.last(): " + listing.last(myList));


// List len
var myList = "1,2,3,4";
console.log("listing.len(): " + listing.len(myList));


// List max
var myList = "1,2,3,4";
console.log("listing.max(): " + listing.max(myList));


// List min
var myList = "1,2,3,4";
console.log("listing.min(): " + listing.min(myList));


// List prepend
var myList = "1,2,3,4";
console.log("listing.prepend(): " + listing.prepend(myList, 10));


// List qualify
var myList = "1,2,3,4";
console.log("listing.qualify(): " + listing.qualify(myList, 23));


// List qualify
var myList = "1,2,3,4,2,4,1,3";
console.log("listing.removeDuplicates(): " + listing.removeDuplicates(myList));


// List replace
var myString = "hello i am lars"
var myList = "i,am,lars";
var myList2 = "you,are,peter"
console.log("listing.replace(): " + listing.replace(myString, myList, myList2));


// List replaceNoCase
var myString = "hello i Am laRS"
var myList = "i,am,lars";
var myList2 = "you,are,peter"
console.log("listing.replaceNoCase(): " + listing.replaceNoCase(myString, myList, myList2));


// List rest
var myList = "1,2,3,4";
console.log("listing.rest(): " + listing.rest(myList));


// List reverse
var myList = "1,2,3,4";
console.log("listing.reverse(): " + listing.reverse(myList));


// List setAt
var myList = "1,2,3,4";
console.log("listing.setAt(): " + listing.setAt(myList, 3, 5));


// List slice
var myList = "1,2,3,4,5,6,7";
console.log("listing.slice(): " + listing.slice(myList, 2, 4));


// List setAt
var myList = "4,1,3,2";
console.log("listing.sort(): " + listing.sort(myList));


// List swap
var myList = "1,2,3,4";
console.log("listing.swap(): " + listing.swap(myList, 1, 3));


// List toArray
var myList = "1,2,3,4";
console.log(listing.toArray(myList));


// List valueCount
var myList = "1,2,3,4,3,1,5,2,3,5,6,3,3";
console.log("listing.valueCount(): " + listing.valueCount(myList, 3));


// List valueCountNoCase
var myList = "this,is,IS,a,iS,test";
console.log("listing.valueCountNoCase(): " + listing.valueCountNoCase(myList, "is"));
