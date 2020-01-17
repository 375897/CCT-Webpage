
  function Submit() {// when 'translate' is clicked converts each letter into equivalent latin charaters
var str = document.getElementById("input").innerHTML;//sets str to text box
var x = document.getElementById("input").innerHTML.length/3;//how many times it will attempt to replace a segment of a string 
var i;    
for (i = 0; i < x; i++) {
  
      str = str.replace(   "%$", " ");
      str = str.replace( "%.-$", "a");
      str = str.replace("%-...$","b");
      str = str.replace("%-.-.$","c");
      str = str.replace( "%-..$","d");
      str = str.replace(   "%.$","e");
      str = str.replace("%..-.$","f");
      str = str.replace( "%--.$","g");
      str = str.replace("%....$","h");
      str = str.replace(  "%..$","i");
      str = str.replace("%.---$","j");
      str = str.replace( "%-.-$","k");
      str = str.replace("%.-..$","l");
      str = str.replace(  "%--$","m");
      str = str.replace(  "%-.$","n");
      str = str.replace( "%---$","o");
      str = str.replace("%.--.$","p");
      str = str.replace("%--.-$","q");
      str = str.replace( "%.-.$","r");
      str = str.replace( "%...$","s");
      str = str.replace(   "%-$","t");
      str = str.replace( "%..-$","u");
      str = str.replace("%...-$","v");
      str = str.replace( "%.--$","w");
      str = str.replace("%-..-$","x");
      str = str.replace("%-.--$","y");
      str = str.replace("%--..$","z");
      if (i >= x) {
        str = document.getElementById("output").innerHTML;
      }
}
    document.getElementById("output").innerHTML = str;
  }
  
  
  function updateText() { //on key up updates 'to be traslated line to equal imput'
    document.getElementById('input').innerHTML = document.getElementById("inputText").value;
}
function startWrite(){
  document.getElementById('input').innerHTML += '%'
}
function endWrite(){
  document.getElementById('input').innerHTML += '$'
}
function dotWrite(){
  document.getElementById('input').innerHTML += '.'
}
function dashWrite(){
  document.getElementById('input').innerHTML += '-'
}
function spaceWrite(){
  document.getElementById('input').innerHTML += '$%'
}
function delWrite(){
  var backSpace = document.getElementById('input').innerHTML//sets imput to a var
  var n = backSpace.length                                  //finds length of string
  var backSpace = backSpace.slice(0, n-1);                  // sets var to string - last char
  document.getElementById('input').innerHTML = backSpace    // sets string to var 
}