$(document).ready(function(){
  console.log("hello world");

  //when any span, except the =(#calc) is clicked, keyPressed holds the html value and is then appended to the screen
  $('span').not('#calc').on("click", function(){
    var keyPressed = $(this).html();
    console.log(keyPressed);
    $('#screen').append(keyPressed);
  });

  //clear the screen when C is clicked
  $('#cancel').on("click", function(){
    $('#screen').html(null);
  });

  //when an operator is clicked - fire a function based on the html?
  $('.operator').on("click", function(){

  });

  //when calc is clicked, clear the html from the screen - and eventually replace with the answer
  $('#calc').on("click", function(){
    //var answer = $function(){
      $('#screen').html('calculating...');
      //console.log($('#screen').html(null));
    //}
  });

  // function grabInteger (var) {
  //   var toCalculate = [];
  //   var x = document.getElementById('screen')
  // }
//need to take the strings from the div id screen, convert to integers, run the function attached to the operator and return the integer answer.
  // if ('.operator' === +){
  //   add()
  // }

  function add (a, b){
    var result = a + b;
    return result;
  }

  function subtract (a, b) {
    var result = a - b;
    return result;
  }

  function multiply (a, b) {
    var result = a * b;
    return result;
  }

  function divide (a, b) {
    var result = a / b;
    return result;
  }



});


//make a switch statement?  If the html includes a +, then add?
//or attach the function right to the button and call the html as the parameters?
