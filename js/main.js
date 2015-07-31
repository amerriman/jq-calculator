$(document).ready(function(){
  console.log("hello world");

  //when any span, except the =(#calc) is clicked, keyPressed holds the html value and is then appended to the screen
  $('span').not('.operator').on("click", function(){
    var keyPressed = $(this).html();
    console.log(keyPressed);
    $('#screen').append(keyPressed);
  });

 //when an operator is clicked - fire a function based on the html?
  $('.operator').not('#cancel').not("#calc").on("click", function(){
    var opPressed = $(this).html();
    $('#screen').append(" " + opPressed + " ");
  });

  //clear the screen when C is clicked
  $('#cancel').on("click", function(){
    $('#screen').html(null);
  });

//when calc is clicked, clear the html from the screen - and eventually replace with the answer
  $('#calc').on("click", function(){
    //This is where the magic happens
    //var total = eval($('#screen').html());
    getScreen();
    $('#screen').html(null).append(total);
  });

  var operators = ["+", "-", "*", "/"];

  function getScreen(str){
  var screenResults = $('#screen').html().split(" ");
  var a = parseInt(screenResults[0]);
  var b = parseInt(screenResults[2]);
      for (var i = 0; i < screenResults.length; i++) {
        for (var j = 0; j < operators.length; j++) {
          if (screenResults[i] === operators[j]){
          console.log("opj", operators[j]);
          math = operators[j];
          console.log(math, "math");
          //return math;
          if(math === operators[0]){
             total = add(a, b);
          }
          else if(math === operators[1]){
               total = subtract(a, b);
            }
          else if(math === operators[2]){
               total = multiply(a, b);
            }
          else if(math === operators[3]){
               total = divide(a, b);
          }
        }
      }
    }
  }

//var sample = "2 * 2";
//getScreen();
// console.log(math);
// console.log(a);
// console.log(b);





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


        //find the index of +
//          var index = screenResults.indexOf("+");
//           //console.log(screenResults[j]);
//           console.log("index", index);

//           screenResults.splice(index, 1);

//           console.log(screenResults);

//           var a = parseInt(screenResults[0]);
//           var b = parseInt(screenResults[2]);
// //run the double loop with the operator, and then, when it finds a match, run the function based on the index number of the operators




//   function getScreen(str){
//     var screenResults = str.split(" ");

//     //return screenResults;
//       for (var i = 0; i < screenResults.length; i++) {
//         if (screenResults[i] === "+"){
//         //find the index of +
//          var index = screenResults.indexOf("+");
//           //console.log(screenResults[j]);
//           console.log("index", index);

//           screenResults.splice(index, 1);

//           console.log(screenResults);

//           var a = parseInt(screenResults[0]);
//           var b = parseInt(screenResults[2]);
// //run the double loop with the operator, and then, when it finds a match, run the function based on the index number of the operators

//         }
//       }
//   }

// var sample = "943 + 32";
// getScreen(sample);

//If Javascript already knows the order of operations, can't we just return the equation?









});

//unbelievable.
// --sample = "8+2*9"
// --eval(sample)
// --26
