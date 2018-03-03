var words = ["elephant", "dog", "cat", "mouse", "monkey", "giraffe", "tiger", "lion"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var newRandWord;
var wins = 0;
var loss = 0;
var used = [];
var left = [];

 document.onkeypress = function(event) {
    var string = String.fromCharCode(event.keyCode).toLowerCase();
    //the document.getelement code is overwriting the words, find a way to store this
    
    // var storeWords = document.getElementById("userOutput").innerHTML = string;
    var node = document.createElement("li");
    var textnode = document.createTextNode(string);
    node.appendChild(textnode);
    document.getElementById("userOutput").appendChild(node);
    
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

    
};  

    
    function randWords() {
        newRandWord = words[Math.floor(Math.random() * words.length)];
        var underScore = [];
        for( var i = 0; i < newRandWord.length; i++){
            underScore[i] = "_";
             document.getElementById("ramword").innerHTML = underScore.join(" ");
             console.log(newRandWord);
            }
        }
         randWords();

    function wordZero(){
       var a = words[0].split(words);
    //    for (i = 0; i < words[0].length; i++)
    if (words[0] === "a");
    var b = a.slice(0,1);
       console.log(b)
        }
        wordZero();
    

    //     ramword.addEventListener("keypress", function(){
    //         alert("clicked");
        
    //     })
    // attempts();
    function atleft(){
    var attempts = document.getElementById("attempts-left").innerHTML = left;
    console.log(attempts);
    }
    atleft();