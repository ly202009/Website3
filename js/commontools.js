 async function adddiv() {
    let div = document.createElement('div')
    body.appendChild(div)
    return div
}

async function qcheck() {

    var firstn = await getRandomInt(0, 9), secondn = await getRandomInt(1, 9);
    var operatorindex =await getRandomInt(0,3)
    var operator = operators[operatorindex];


    divs[0].innerText = firstn
    divs[1].innerText = operator
    divs[2].innerText = secondn
    var answer = eval(firstn + operator + secondn)
    // console.log(answer)
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
        var reportstr = 'Out of ' + totalqs + ' questions, you got right for ' + NumberOfCorrectAnswers + ', and the correct percentage is ' + correctrate +'%.';
        console.log(reportstr)
        reportdiv.innerText = reportstr
    }



}