const body = document.body;
var divs = [], tmpdiv = undefined;
var operators = ['+', '-', '*', '/'];
var NumberOfCorrectAnswers = 0, qcountsofar = 1, totalqs = 10;
var roundedanswerNum = undefined, reportdiv = undefined;

(async () => {

    // console.log(tmpdiv)
    // 1. make five divs
    for (var i = 0; i < 5; i++) {
        var tmpdiv = await adddiv()
        tmpdiv.setAttribute('class', 'equation')
        // console.log('the tmp div here', tmpdiv)
        divs.push(tmpdiv)
    }

    // 2. special settings for div[3, 4]
    divs[3].innerText = '='
    // divs[4].contentEditable= true
    $(divs[4]).attr({ 'contentEditable': true }) // jquery syntax

    // 3. make a submit button
    var submitbtn = await addbutton()
    $(submitbtn).text('next').css({ 'font-size': '30px' })

    // 4. on click of the submit button, match user's answer with the correct answer, make statistics on the # of acumulated correct answers
    $(submitbtn).click(verifytheanswerandmoveon)

    // 5. make a report div
    reportdiv = await adddiv()
    $(reportdiv).css({ 'font-family': 'Georgia', 'font-size': '30px' })
    $(reportdiv).text('Report to be made after test is done.')

    //6. ask a question and verify
    await askAqNVerify()


})()

