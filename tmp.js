
   

        


        
        /**Randomly extract one element from ten
* Repeating for ten times, each for a different element
* */
        console.log('bring it on ! ================================')

        var unselectedQs = [] // to initiate an array and name it 'list'
        for (var i = 1; i <= 3; i++) {
            var tmpstr = 'Question ' + i // producing strings like 'Question 1'
            unselectedQs.push(tmpstr)
        }




        var btn1 = addbutton()
        btn1.innerText = 'Hello'
        btn1.style.color = 'blue'
        btn1.onclick = DisplayQ
        

        // add div1 here
        let divQ = adddiv()


        var selectedquestions = []

        //create a loop (an iteration) between 9 and 0 
        function DisplayQ() {
            console.log('this is before updating the unselectedQs ================')
            console.log(unselectedQs)


            var maxindexn = unselectedQs.length - 1

            // 1. randomly select a question from unselectedQs
            // 1a. randomly decide an index number 
            var theindexn = getRandomInt(0, maxindexn);
            // 1b. convert the selected index number into the question number
            var thequestion = unselectedQs[theindexn]
            // 2. display the selected question inside of div1
            divQ.innerText = thequestion
            // 3. make the contents in div1 visible
            // 4. add the selected question to the selectedQs
            selectedquestions.push(unselectedQs[theindexn])

            console.log('this is after updating the selectedquestions ================')
            console.log(selectedquestions)

            // 5. remove the selected question from the unselectedQs
            unselectedQs.splice(theindexn, 1)

            console.log('this is after updating the unselectedQs ================')
            console.log(unselectedQs)
            // 6. if the unselectedQs is empty, then change the button text and display that all questions have been displayed.
            if (unselectedQs.length === 0) {
                btn1.innerText = "You're done!"
                btn1.onclick = null
                div1.innerText = 'Good Job!'
            }
            if (thequestion == "Question 1") {
                div1.innerText = 1
                div2.innerText = '+'
                div3.innerText = 2
                div5.innerText = ""
                div5.style.backgroundColor = "white"
                div5.setAttribute('contentEditable',true)
            }
            if (thequestion == "Question 2") {
                div1.innerText = 5
                div2.innerText = '*'
                div3.innerText = 12
                div5.innerText = ""
                div5.style.backgroundColor = "white"
                div5.setAttribute('contentEditable',true)

            }
            if (thequestion == "Question 3") {
                div1.innerText = 4
                div2.innerText = '-'
                div3.innerText = 2
                div5.innerText = ""
                div5.style.backgroundColor = "white"
                div5.setAttribute('contentEditable',true)

            }

            
        } // DisplayQ ()

        // a function to get a random integer within a defined range (min, max)
        function getRandomInt(min, max) {
            var min = Math.ceil(min);
            var max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function addbutton() {
            let button = document.createElement('button')
            body.appendChild(button)
            return button
        }


        function checkanswer() {
            factor1 = parseFloat(div1.innerText)
            thiscalsign = div2.innerText
            factor2 = parseFloat(div3.innerText)
            var answer = eval(factor1 + thiscalsign + factor2)
            console.log(answer)

            if (div5.innerText == answer) {
                div5.style.backgroundColor = 'blue'
                div5.setAttribute('contentEditable', false)
                btn1.onclick = DisplayQ
            } else if (div5.innerText == '') {
                div5.style.backgroundColor = 'white'
                btn1.onclick = null
            } else {
                div5.style.backgroundColor = 'red'
                btn1.onclick = null
            }
        }