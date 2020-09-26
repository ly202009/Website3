const body = document.body;
var divs=[], tmpdiv = undefined;

for (var i =0; i < 2; i++) {
    var tmpdiv = adddiv()
    console.log (tmpdiv)
    tmpdiv.setAttribute('class', 'equation')
    divs.push(tmpdiv)
}
divs[0].textContent='1'
divs[1].textContent='2'

// (async ()=>{

//     // console.log(tmpdiv)
//     // // make five divs
//     for (var i = 0; i < 5; i++) {
//         // console.log(i)
//         var tmpdiv = await adddiv()
//         tmpdiv.setAttribute('class', 'equation')
//         divs.push(tmpdiv)
//     }
//     // divs[0].textContent='1'
//     // divs[1].textContent='2'

// })()




// let div1 = adddiv()
// div1.setAttribute('class', 'equation')

// let div2 = adddiv()
// div2.setAttribute('class', 'equation')

// let div3 = adddiv()
// div3.setAttribute('class', 'equation')

// let div4 = adddiv()
// div4.setAttribute('class', 'equation')

// div4.innerText = '='

// let div5 = adddiv()
// div5.setAttribute('class', 'equation')



// div5.setAttribute('contentEditable', true)
// div5.addEventListener('input', checkanswer)