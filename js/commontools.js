 async function adddiv() {
    let div = document.createElement('div')
    body.appendChild(div)
    return div
}

async function qcheck() {

    var firstn = await getRandomInt(0, 9), secondn = await getRandomInt(0, 9);
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