const body = document.body;
var divs = [], tmpdiv = undefined;
var operators = ['+', '-', '*', '/'];
var NumberOfCorrectAnswers = 0, qcountsofar = 1, totalqs = 20;
var roundedanswerNum = undefined, reportdiv = undefined;
var nq = 20;

(async () => {

    // determine the number of questions

    for (var d = 0; d < nq; d++) {
        for (var i = 0; i < 6; i++) {
            var tmpdiv = await adddiv()
            tmpdiv.setAttribute('class', 'equation')
            divs.push(tmpdiv)
        }
    }

    // this is the user answer input box (e.g div[4], [10]...)

    for (let itq = 0; itq < nq; itq++) {

        // there would be 120 divs if nq=20 (0 to 119)
        /**
         * 0 1 2 3 4    5   [itq = 0]
         * 6 7 8 9 10   11  [itq = 1 ]
         */

        // well, the index of the user answer input div is itq*6 + 4
        let theuseranswerboxIndex = itq*6 + 4 // like 4, 10, 16, 22, ... (4 to ... step 6)
        //this is to tell where the editable divs should be
        $(divs[theuseranswerboxIndex]).attr({ 'contentEditable': true })

        // a div to break questions
        let breakdivIndex = itq*6 + 5 // like 5, 11, 17, 23, ... (5 to ... step 6)
        $(divs[breakdivIndex]).attr({ 'class': 'hiddenbreak' })

        //to add = to every equation
        let equalsignplacementIndex = itq*6 + 3 // like 3, 9, 15, 21, ... (3 to ... step 6)
        $(divs[equalsignplacementIndex]).text('=')
        
        //to make the first number in the equation
        let firstnIndex = itq*6 + 0 // like 0, 6, 12, 18, ... (0 to ... step 6)
        var firstn = await getRandomInt(0, 9)
        $(divs[firstnIndex]).text(firstn)

        //to make the operator in the equation
        let operatorpositionIndex = itq*6 + 1 // like 1, 7, 13, 19, ... (1 to ... step 6)
        var operatorindex = await getRandomInt(0, 3)
        var operator = operators[operatorindex];
        $(divs[operatorpositionIndex]).text(operator)

        //to make the second number in the equation
        let secondnIndex = itq*6 + 2 // like 0, 6, 12, 18, ... (0 to ... step 6)
        var secondn = await getRandomInt(0, 9)
        $(divs[secondnIndex]).text(secondn)

    } // loop to add boxes

    // for (var e = -1; e < 120; e = e + 6) {
    //     //this is to tell where the editable divs should be
    //     $(divs[e]).attr({ 'contentEditable': true })
    // }

    // for (var f = -1; f < 120; f = f + 6) {
    //     //this is to divide each equation into a seperate line
    //     $(divs[f]).attr({ 'class': 'hiddenbreak' })
    // }

    // for (var g = -3; g < 120; g = g + 6) {
    //     //this is to add the equal signs
    //     $(divs[g]).text('=')
    // }

    // for (j = -6; j < 120; j = j + 6) {
    //     //this is to decide the first # in the equation
    //     var firstn = await getRandomInt(0, 9)
    //     $(divs[j]).text(firstn)
    // }
    // for (k = -5; k < 120; k = k + 6) {
    //     //this is to decide the operator in the equation
    //     var operatorindex = await getRandomInt(0, 3)
    //     var operator = operators[operatorindex];
    //     $(divs[k]).text(operator)
    // }
    // for (l = -4; l < 120; l = l + 6) {
    //     //this is to decide the second # in the equation
    //     secondn = await getRandomInt(1, 9);
    //     $(divs[l]).text(secondn)
    // }

    // add a submit button as user completes all answers and to generate the report
    var submitbtn = await addbutton()
    $(submitbtn).text('Finish').css({ 'font-size': '30px' })
    $(submitbtn).click(runverify)

    // to have a div and show report status
    reportdiv = await adddiv()
    $(reportdiv).css({ 'font-family': 'Georgia', 'font-size': '30px' })
    $(reportdiv).text('Report to be made after test is done.')

    // no long to run
    // await askAqNVerify()


})()

