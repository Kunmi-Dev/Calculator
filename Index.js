let display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;

    console.log(value)


}

function clearToDisplay(){
    display.value = " ";
}

function solution(){
    try {
        // let display= document.getElementById("display").value;
        play.value = eval(display.value);
        
      }
      catch(err) {
        display.value = " Error";
      }

}

function mathsin(params) {
  display.value = Math.sin(play.value);
  
}

function mathcos(params) {
  display.value = Math.sin(play.value);
  
}

function mathtan(params) {
  display.value = Math.tan(play.value)
  
}

function mathlog(params) {
  display.value = Math.log(play.value)
  
}