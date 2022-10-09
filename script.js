let text_area = document.getElementById('text');
// front 

let c_button = document.getElementById('c-button');
let pn_button = document.getElementById('pn-button');

let undo_button = document.getElementById('undo-button');
let delete_button = document.getElementById('delete-button');

let temp = text_area.value;
c_button.onclick = function(){
    temp = text_area.value;
    text_area.setAttribute("placeholder" , "");
    text_area.value = "";
}

pn_button.onclick = function(){
    let num = Number(text_area.value);
    if(num < 0){
        num = num * -1;
        text_area.value = num;
    }
    else{
        text_area.value = "-" + text_area.value;
    }
    
}


undo_button.onclick = function(){
    text_area.value = temp;
}

delete_button.onclick = function(){
    text_area.value = text_area.value.substring(0 , text_area.value.length - 1);
}



// Digits 
let digit_one = document.getElementById('one-button');
let digit_two = document.getElementById('two-button');
let digit_three = document.getElementById('three-button');
let digit_four = document.getElementById('four-button');
let digit_five = document.getElementById('five-button');
let digit_six = document.getElementById('six-button');
let digit_seven = document.getElementById('seven-button');
let digit_eight = document.getElementById('eight-button');
let digit_nine = document.getElementById('nine-button');
let digit_zero = document.getElementById('zero-button');


text_area.value = "";
digit_one.onclick = function(){
     text_area.value = text_area.value + "1";
}
digit_two.onclick = function(){
    text_area.value = text_area.value + "2";
}
digit_three.onclick = function(){
    text_area.value = text_area.value + "3";
}
digit_four.onclick = function(){
    text_area.value = text_area.value + "4";
}
digit_five.onclick = function(){
    text_area.value = text_area.value + "5";
}
digit_six.onclick = function(){
    text_area.value = text_area.value + "6";
}
digit_seven.onclick = function(){
    text_area.value = text_area.value + "7";
}
digit_eight.onclick = function(){
    text_area.value = text_area.value + "8";
}
digit_nine.onclick = function(){
    text_area.value = text_area.value + "9";
}
digit_zero.onclick = function(){
    text_area.value = text_area.value + "0";
}



// oparends 

let percent_button = document.getElementById('percent-button');
let plus_button = document.getElementById('plus-button');
let minus_button = document.getElementById('minus-button');
let div_button = document.getElementById('div-button');
let mul_button = document.getElementById('mul-button');
let equals_button = document.getElementById('equals-button');


let value1;
let oparends;

plus_button.onclick = function(){
     oparends = '+';
     value1 = Number(text_area.value);
     text_area.setAttribute("placeholder" , "+");
     text_area.value = "";    
}

minus_button.onclick = function(){
    oparends = '-';
    value1 = Number(text_area.value);
    text_area.setAttribute("placeholder" , "-");
    text_area.value = "";    
}

mul_button.onclick = function(){
    oparends = '*';
    value1 = Number(text_area.value);
    text_area.setAttribute("placeholder" , "x");
    text_area.value = "";    
}

div_button.onclick = function(){
    oparends = '/';
    value1 = Number(text_area.value);
    text_area.setAttribute("placeholder" , "/");
    text_area.value = "";    
}

percent_button.onclick = function(){
    value1 = Number(text_area.value);
    text_area.value = eval(value1 + " " + '/' + " " + 100);   
}

let value2;
equals_button.onclick = function(){
    value2 =  Number(text_area.value);
    if(value2 == 0 && (oparends == '/')){
        text_area.value = "Error";
        return;
    }
   
    text_area.value = eval(value1 + " " + oparends + " " + value2);
}

// click sound
const audio = new Audio("click sound.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });

