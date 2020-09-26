 async function adddiv() {
    let div = document.createElement('div')
    body.appendChild(div)
    return div
}

function qcheck(firstn, operator, secondn) {
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