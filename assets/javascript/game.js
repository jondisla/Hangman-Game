var words = ["elephant", "dog", "cat", "mouse", "monkey", "giraffe", "tiger", "lion"];

var wins = 0;
var loss = 0;
var used = [];
var left = [];

 document.onkeyup = function() {
//     var string = String.fromCharCode(event.keyCode).toLowerCase();

//     document.getElementById("userOutput").innerHTML = string;

//     var randomword = words[Math.floor(Math.random() * words.length)];

//     document.getElementById("ramword").innerHTML = randomword;

   function consoleInside(arr) {
       for (var i = 0; i< arr.length; i++){
           console.log(arr[0]);
       }
       console.log("--------------");
   }
   consoleInside(words);
 }


