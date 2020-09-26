const body = document.body;
var divs=[], tmpdiv = undefined;

(async ()=>{

    // console.log(tmpdiv)
    // // make five divs
    for (var i = 0; i < 5; i++) {
        var tmpdiv = await adddiv()
        tmpdiv.setAttribute('class', 'equation')
        // console.log('the tmp div here', tmpdiv)
        divs.push(tmpdiv)
    }

    divs[3].innerText = '='
    // divs[4].contentEditable= true
    $(divs[4]).attr({'contentEditable':true}) // jquery syntax

    var firstn = 1, secondn = 2;
    var operator = '+';
    divs[0].inn



})()

