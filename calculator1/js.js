var answer ;


function result(){
  answer = eval(calcform.display.value);
  calcform.display.value = calcform.display.value + " = " + answer;
  calcform.displayEntry.value = answer;
}
function displayvalue(n){
  if(n == "." && calcform.display.value === ""){
    n = "0."
  }


// try to concat the values and empty the answer var after concatinating it , see if
//this could work, try that for everything ( concat);
  if(typeof(answer) === "number" && /[0-9.]/.test(n)){
    calcform.display.value = "";
    calcform.displayEntry.value ="";

  }else if (typeof(answer) === "number") {

  }

  if (n == "÷" ){
    n = "/";
  }else if ( n == "x"){
    n = "*";
  }


  if(n === "/" || n === "*" || n=== "+" || n == "-" ){
    calcform.displayEntry.value = n ;
  }else {
      if (/[/*+-]/.test(calcform.displayEntry.value)){
        calcform.displayEntry.value = "";
      }
    calcform.displayEntry.value = calcform.displayEntry.value +  n;

  }
  calcform.display.value = calcform.display.value + n;
}
function allClear(){
  calcform.display.value = "";
  calcform.displayEntry.value = "";
}
function clearEntry(){
  calcform.display.value = calcform.display.value.replace(calcform.displayEntry.value , "");
  calcform.displayEntry.value = "";
}
document.addEventListener("keypress",function(n){
  if(typeof(answer) === "number"){
    calcform.display.value = "";
    calcform.displayEntry.value = "";
    answer = "";
  }
function result(){
 answer = eval(calcform.display.value);
 calcform.display.value = calcform.display.value + " = " + answer;
  calcform.displayEntry.value = answer;
 }
  if(n.keyCode === 13 ){
    console.log("Yo");
    result();

  }else {
  var number = String.fromCharCode(n.keyCode);
 calcform.display.value = calcform.display.value + number;
     if(/[/*+-]/.test(number)){
       calcform.displayEntry.value = number;
  }else {
      if (/[/*+-]/.test(calcform.displayEntry.value)){
        calcform.displayEntry.value  = "";
      }
    calcform.displayEntry.value = calcform.displayEntry.value + number;
  }
    }
})
