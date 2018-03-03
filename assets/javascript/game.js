var words = ["elephant", "dog", "cat", "mouse", "monkey", "giraffe", "tiger", "lion"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var newRandWord;
var wins = 0;
var loss = [];
var used = [];
var left = 7;
var guess = [];
var underScore = [];

 document.onkeyup = function(event) {
    var string = String.fromCharCode(event.keyCode).toLowerCase();
    //the document.getelement code is overwriting the words, find a way to store this
    newRandWord = words[Math.floor(Math.random() * words.length)];
    
    for( var i = 0; i < newRandWord.length; i++){
        underScore.push = ("_");
    }   
         document.getElementById("ramword").innerHTML = underScore.join(" ");
         console.log(underScore)
    // var storeWords = document.getElementById("userOutput").innerHTML = string;
    // var guess = document.createElement("li");
    // var textnode = document.createTextNode(string);
    // guess.appendChild(textnode);
    // document.getElementById("userOutput").appendChild(guess);

    document.getElementById("attempts-left").innerHTMLl=left;
    console.log(left)
}
    

    // Elephant
    // function game() {  
    // var a = words[0].split(words);

    
    
    // if (string == "e"){
    // var e = a[0].slice(0,1);
    //    console.log(e);
    // }if (string === "l"){
    // var l = a[0].slice(0,2);
    //    console.log(l);
    // }if (string === "e"){
    // var ee = a[0].slice(0,3);
    //    console.log(ee);
    // }if (string === "p"){
    // var p = a[0].slice(0,4);
    //    console.log(p);
    // }if (string === "h"){
    // var h = a[0].slice(0,5);
    //    console.log(h);
    // }if (string === "a"){
    // var a = a[0].slice(0,6);
    //    console.log(a);
    // }if (string === "n"){
    // var n = a[0].slice(0,7);
    //    console.log(n);
    // }if (string === "t"){
    // var t = a[0].slice(0,8);
    //    console.log(t);
    // }else
    //     alert();
    // }game();


console.log(words);
    

    
    // function randWords() {
    
    

    //     ramword.addEventListener("keypress", function(){
    //         alert("clicked");
        
    //     })
    // attempts();
    // function atleft(){
    // var attempts = document.getElementById("attempts-left").innerHTML = left;
    // console.log(attempts);
    // }
    // atleft()
// }};