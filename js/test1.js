/**Randomly extract one element from ten
 * Repeating for ten times, each for a different element
 * */
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // this is called (within []) a collection, or an array
// console.log(list)

// randomly select an element from the above array 
// it is indeed selecting the index number of an element

// // generate a random integer between 0 and 9
// var theindexn = getRandomInt(0, 9);
// console.log(theindexn)
// console.log(list[theindexn] )

// // update the array by removing the selected element. The new array will have nine elements
// list.splice(theindexn, 1) // to move one element starting from the element with the index number
// console.log(list)



// // then randomly select one element from the nine
// theindexn =  getRandomInt(0, 8);
// console.log(theindexn)
// console.log(list[theindexn])
// // generate a random integer between 0 and 8

// list.splice(theindexn, 1) // to move one element starting from the element with the index number
// console.log(list)

//create a loop (an iteration) between 9 and 0 
for (var i = 9; i >= 0; i--) {
    // console.log(i)
    var theindexn = getRandomInt(0, i);
    console.log(theindexn)
    console.log(list[theindexn])
    list.splice(theindexn, 1)
    console.log(list)
}



// ... until there is no elements in the array

// a function to get a random integer within a defined range (min, max)
function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
