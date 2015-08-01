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

//when calc is clicked, clear the html from the screen - run the massive function and append the answer to the screen
  $('#calc').on("click", function(){
    //This is where the magic happens
    //var total = eval($('#screen').html());
    getScreen();
    $('#screen').html(null).append(total);
  });

});

//all the operators html
  var operators = ["+", "-", "*", "/"];

  function getScreen(str){
    //variable that grabs the screen, and splits it so it becomes an array
    var screenResults = $('#screen').html().split(" ");
    console.log(screenResults);
    //assign variables to the number strings at positions 0 and 2 to use later in the calculations
    var a = parseInt(screenResults[0]);
    var b = parseInt(screenResults[2]);

      //loop through the operators array AND the newly created screenResults array to find which operator is being used.
      for (var i = 0; i < screenResults.length; i++) {
        for (var j = 0; j < operators.length; j++) {
          //when the operator is found
          if (screenResults[i] === operators[j]){
          console.log("opj", operators[j]);
          //assign the operator to 'math'
          math = operators[j];
          console.log(math, "math");
          //return math;
          //if math matches the operator at index 0 in the operators array, then run the funtion 'addition' with variables a and b as created above. Etc for each operator index.
          if(math === operators[0]){
            total = addition(a, b);
          }
          else if(math === operators[1]){
               total = subtract(a, b);
               //total = total.toFixed(5);
            }
          else if(math === operators[2]){
               total = multiply(a, b);
               total = total.toFixed(2);
            }
          else if(math === operators[3]){
               total = divide(a, b);
               total = total.toFixed(2);
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



//basic math functions

function addition (a, b){
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


//unbelievable.
// --sample = "8+2*9"
// --eval(sample)
// --26

//grabs first number and the operator and add its to the arithmetic array
// $('.operator').not('#cancel').not("#calc").on("click", function(){

//     var opPressed = $(this).html();
//     var calcScreenArray = $('#screen').html().split('');
//     operator = calcScreenArray.pop();
//     arthimeticArray.push(calcScreenArray.join(''));
//     arthimeticArray.push(operator);
//     tempArray.push(num2)
// ;    $('#screen').append(" " + opPressed + " ");
//   });


// function normalizeData(resultsArray) {
//   var operators = ["+", "-", "*", "/"];
//   var tempArray = [];
//   for (var i = 0; i < operators.length; i++) {
//     if(operator === '*'){
//       for (var j = 0; j < resultsArray.length; j++) {
//     console.log(tempArray.push(resultsArray[i]));
//       }
//     }
//   }

// }


// switch(operatorInput){
//   case '+':
//     return(a + b);
//   case '-':
//     return(a + b);
//   case '*':
//       return(a + b);
//   case '/':
//       return(a + b);
// }
