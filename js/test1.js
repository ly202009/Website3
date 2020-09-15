/**Randomly extract one element from ten
 * Repeating for ten times, each for a different element
 * */
console.log('bring it on ! ================================')

var questions =[] // to initiate an array and name it 'list'
for (var i=1; i<=10; i++) {
    var tmpstr = 'Question ' + i // producing strings like 'Question 1'
    questions.push(tmpstr)
}

console.log(questions)

//how to determine the max index number in an array?
var maxindexn = questions.length - 1 

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

//define an empty array for the selectedquestions
var selectedquestions =[]

//create a loop (an iteration) between 9 and 0 
for (var i = maxindexn; i >= 0; i--) {
    // console.log(i)
    var theindexn = getRandomInt(0, i);
    console.log(theindexn)
    console.log(questions[theindexn])
    // add the selected (spliced) question into the array of 'selectedquestions'
    // has to been done before the original array 'questions' is spliced
    selectedquestions.push(questions[theindexn])

    questions.splice(theindexn, 1)
    console.log(questions)
    console.log(selectedquestions)
}


// ... until there is no elements in the array

// a function to get a random integer within a defined range (min, max)
function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
