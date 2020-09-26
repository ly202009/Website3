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

    // 4. make a report div
    reportdiv = await adddiv()
    $(reportdiv).css({'font-family': 'Georgia', 'font-size': '30px'})
    
    // 5. on click of the submit button, match user's answer with the correct answer, make statistics on the # of acumulated correct answers
    $(submitbtn).click(verifytheanswerandmoveon)

    //6. ask a question and verify
    await askAqNVerify()

    async function askAqNVerify() {
        console.log('question ' + qcountsofar  + ' of ' + totalqs)

        // clean up the answer div
        divs[4].innerText =''

        // making a question and prepare the answer 
        var theanswer = await qcheck();
        roundedanswerNum = Math.round(theanswer)       

    }

    async function verifytheanswerandmoveon() {

        console.log('the answer is ', roundedanswerNum)
        // get the user's answer
        var theuseranswerStr = divs[4].innerText
        var theuseranswerNum = parseFloat(theuseranswerStr)
        var roundedtheuseranswerNum = Math.round(theuseranswerNum)
        console.log('the user answer is ', roundedtheuseranswerNum, typeof (roundedtheuseranswerNum))

        if (roundedanswerNum === roundedtheuseranswerNum) {
            NumberOfCorrectAnswers++;
            console.log('right')
            console.log('number of correct answers', NumberOfCorrectAnswers)
        } else {
            console.log('wrong')
        }

        // check the total questions being asked        
        if (qcountsofar < totalqs){
            qcountsofar ++;
            await askAqNVerify()
        } else {
            console.log ('all questions are tested. the number of correct answers is ', NumberOfCorrectAnswers)
            var correctrate = Math.floor(NumberOfCorrectAnswers / totalqs*100);
            var reportstr = 'Out of ' + totalqs + ' questions, you got right for ' + NumberOfCorrectAnswers + ', and the correct percentage is ' + correctrate +'%';
            console.log(reportstr)
            reportdiv.innerText = reportstr
        }

    }




})()

