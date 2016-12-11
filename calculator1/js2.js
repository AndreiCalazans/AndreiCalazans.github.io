var answer ;
function result(){
  console.log(calcform.display.value);
  answer = eval(calcform.display.value);
console.log(answer);
  calcform.display.value = calcform.display.value +" = " +answer;


}


function displayvalue(n){
  if (n == "÷" ){
    n = "/";
  }else if ( n == "x"){
    n = "*";
  }

  if (/[/*+-]/.test(n) && typeof(answer) == "number" ){
    calcform.display.value = answer;
    answer = "";
  }
  calcform.display.value = calcform.display.value.concat(n);
}
function clearEntry(){
  if(calcform.display.value.length = 1){
    answer ="";
    calcform.display.value = calcform.display.value.substr(0 , calcform.display.value.length - 1 );
  }else{
  calcform.display.value = calcform.display.value.substr(0 , calcform.display.value.length - 1 );
  }



}
function allClear(){
  calcform.display.value = "";
  answer = "";

}

document.addEventListener("keydown", function(n){

  if(/[0-9/*+-]/.test(n.key)){
    if (/[/*+-]/.test(n.key) && typeof(answer) == "number" ){
      calcform.display.value = answer;
      answer = "";
    }

    calcform.display.value = calcform.display.value.concat(n.key);

  }

  if (n.keyCode == 13){
    result();
  }else if(n.which == 8){
    clearEntry();
  }



})
