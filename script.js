let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click',(a) =>{
        if(a.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(a.target.innerHTML =='AC'){
             string = "";
             input.value = string;
        }
        else if(a.target.innerHTML == 'DEL'){
             string = string.substring(0,string.length-1);
             input.value = string;
        }
        else{
            string += a.target.innerHTML;
            input.value = string;
        }
    
    })
})
alert("This Calculator is just for Basic Calculations!!");
