const body = document.body;
var divs = [], tmpdiv = undefined;
var operators = ['+', '-', '*', '/'];
var NumberOfCorrectAnswers = 0, qcountsofar = 0, totalqs = 10;

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

    await askAqNVerify()

    async function askAqNVerify() {
        // 4. making a question and prepare the answer  
        var theanswer = await qcheck();
        var roundedanswerNum = Math.round(theanswer)
        console.log('the answer is ', roundedanswerNum)

        // 5. on click of the submit button, match user's answer with the correct answer, make statistics on the # of acumulated correct answers
        $(submitbtn).click(await verifytheanswerandmoveon)

    }

    async function verifytheanswerandmoveon(roundedanswerNum) {
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
        qcountsofar++;

        if (qcountsofar < totalqs){
            await askAqNVerify()
        }

    }




})()

