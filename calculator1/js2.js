var answer ;
function result(){

  answer = eval(calcform.display.value);

  calcform.display.value = calcform.display.value +" = " +answer;


}


function displayvalue(n){
  console.log(calcform.display.value.length);
  if (n == "÷"){
    n = "/";
  }else if ( n == "x"){
    n = "*";
  }

  if(/[/*+-.]/.test(n) && /[/*+-.]/.test(calcform.display.value[calcform.display.value.length-1]) ){

    var array = calcform.display.value.split("");
    array[array.length-1] = n ;
    calcform.display.value = array.join("");


  }else if (/[/*+-]/.test(n) && typeof(answer) == "number" ){

    calcform.display.value = answer;
    answer = "";
    calcform.display.value = calcform.display.value.concat(n);
  }else if( /[0-9]/.test(n) && typeof(answer) == "number" ){
    calcform.display.value = n;
  }else {
    calcform.display.value = calcform.display.value.concat(n);
  }

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
  if(/([0-9/*+-.])/.test(n.key[0])){
    if (/[/*+-.]/.test(n.key) && /[/*+-.]/.test(calcform.display.value[calcform.display.value.length-1])){
     var array = calcform.display.value.split("");
     array[array.length-1] = n.key;
     calcform.display.value = array.join("");

    }else if (/[/*+-]/.test(n.key) && typeof(answer) == "number" ){
      calcform.display.value = answer;
      answer = "";
      calcform.display.value = calcform.display.value.concat(n.key);
    }else if( /[0-9]/.test(n.key) && typeof(answer) == "number" ){
      calcform.display.value = n.key;
    }else{
      calcform.display.value = calcform.display.value.concat(n.key);
    }
  }
  if (n.keyCode == 13){
    result();
  }else if(n.which == 8){
    clearEntry();
  }
})
