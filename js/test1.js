/**Randomly extract one element from ten
 * Repeating for ten times, each for a different element
 * */
var list = [1,2,3,4,5,6,7,8,9,10] // this is called (within []) a collection, or an array
console.log(list)

// randomly select an element from the above array 
// it is indeed selecting the index number of an element

// generate a random integer between 0 and 10
var tmpn = Math.floor((Math.random() * 10) + 1);

// next, from the rest nine elements (without 5, as it has been used), randomly select an element

// and so forth... repeat until there is no elements left