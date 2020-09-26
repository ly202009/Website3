const body = document.body;
var divs = [], tmpdiv = undefined;
var operators = ['+', '-', '*', '/'];

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
    $(submitbtn).text('next').css({'font-size': '30px'})

    // 4. an example of making a question and prepare the answer  
    var theanswer  = await qcheck();
    console.log('the answer is ', theanswer)


    







})()

