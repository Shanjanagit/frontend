/*fetching I/P from users by creating variables using let keyword */
let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

/*creating wonderful designs for developing an interactive environment */
/*Providing further loop statements */

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
         string = string == '' ? '0': string;
         try{
            string = String(eval(string))
         inputBox.value = string;
         }
         catch(error){
            inputBox.value = "Error(Press AC)"
         }
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})