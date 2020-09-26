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

    div[3].innerText = '='





})()

