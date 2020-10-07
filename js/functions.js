async function adddiv() {
    let div = document.createElement('div')
    body.appendChild(div)
    return div
}

async function qcheck() {

    var firstn = await getRandomInt(0, 9), secondn = await getRandomInt(1, 9);
    var operatorindex = await getRandomInt(0, 3)
    var operator = operators[operatorindex];


    divs[0].innerText = firstn
    divs[1].innerText = operator
    divs[2].innerText = secondn
    var answer = eval(firstn + operator + secondn)
    return answer
}


async function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function addbutton() {
    let button = document.createElement('button')
    body.appendChild(button)
    return button
}

function runverify() {
    verifytheanswers(nq)
}


// for the given questions, calculate the answers, compare to the user's answers, and summarize the correct answers
async function verifytheanswers(nq_local) {

    console.log('start function verifytheanswers () =================')

    // for(var z = 4; z <= 120; z = z+6) {
    for (let itq = 0; itq < nq_local; itq++) {

        console.log ('iterating for question ' + eval(itq +1) + ' of ' + nq_local + ' questions ===== ')

        // 1. loop for each question, get the user's answer , and round it to 2 decimals
        let theuseranswerboxIndex = itq * 6 + 4
        let theuseranswerStr = divs[theuseranswerboxIndex].innerText
        let theuseranswerNum = parseFloat(theuseranswerStr)
        let roundedtheuseranswerNum = Math.round(100 * theuseranswerNum) / 100;
        console.log('the user answer (rounded) is ', roundedtheuseranswerNum, typeof (roundedtheuseranswerNum))

        // 2. calculating the correct answers
        let firstn = divs[itq * 6 + 0].innerText
        let operator = divs[itq * 6 + 1].innerText
        let secondn = divs[itq * 6 + 2].innerText
        let thestr = firstn + operator + secondn
        console.log(thestr)
        let answer =  eval(thestr)

        // var theanswerNum = parseFloat(answer)
        console.log('the answer is', answer)
        var roundedanswerNum = Math.round(100 * answer) / 100;
        console.log('the answer (rounded) is ', roundedanswerNum, typeof (roundedanswerNum))

        // 3. check if the user answer matches the correct answer
        if (roundedanswerNum === roundedtheuseranswerNum) {
            NumberOfCorrectAnswers++;
            console.log('right')
            console.log('number of correct answers', NumberOfCorrectAnswers)
        } else {
            console.log('wrong')
        }

        // 4. determine whether the last question is reached
        if (itq < nq_local) {
            // qcountsofar++;
            // await askAqNVerify()
        } else {
            console.log('all questions are tested. the number of correct answers is ', NumberOfCorrectAnswers)
            var correctrate = Math.floor(NumberOfCorrectAnswers / nq_local * 100);
            var reportstr = 'Out of ' + nq_local + ' questions, you got right for ' + NumberOfCorrectAnswers + ', and the correct percentage is ' + correctrate + '%.';
            console.log(reportstr)
            reportdiv.innerText = reportstr
        }

    }







}


async function askAqNVerify() {
    console.log('==========question ' + qcountsofar + ' of ' + totalqs + ' =============')

    divs[4].innerText = ''


    var theanswer = await qcheck();
    roundedanswerNum = Math.round(100 * theanswer) / 100;
    // Math.round(100*X)/100;   // round X to hundredths

}


async function addDOM_prototype(param) {
    let thedom = document.createElement(param.typeOfDOM)
    param.parent.appendChild(thedom)

    // decorate it
    $(thedom).attr(param.attrs)
    $(thedom).css(param.styles)
    $(thedom).text(param.domtext)
    return thedom
}
