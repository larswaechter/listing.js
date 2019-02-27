const Listing = require('./index');

const myList = new Listing('1,2,3,4');

myList.append(5);
myList.reverse()
myList.deleteAt(1)

console.log(myList);


const newList = myList.filter(val => val > 2)

console.log(newList);
newList.each(val => {
  console.log(val);
});
