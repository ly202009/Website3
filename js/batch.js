"use strict"
const nq = 10
const maxdomindex = nq * 7 - 1;

// const thedoms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var thedoms = [];
for (let i = 0; i <= maxdomindex; i++) {
    thedoms.push(i)
}
console.log(thedoms);

(
    async () => {

        for (let j = 1; j <= nq; j++) {

            // a standardized beautiful block of code created by daddy the genius
            // step1
            thedoms[(j - 1) * 7] = await addDOM_prototype(param[0]);

            // step2
            for (let i = 1; i <= 6; i++) {
                param[i].parent = thedoms[0]
                thedoms[(j - 1) * 7 + i] = await addDOM_prototype(param[i]);
            }//for i
            thedoms[(j-1)*7+6].innerText = 'question ' + j + " what the...";
        } //for j

        // alert(thedoms[6].innerText)
        thedoms[6].innerText = 'question 1 what the...'
        thedoms[13].innerText = 'question 2 what  the...'


    } //async () => {
)()


// functions





