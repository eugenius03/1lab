

function reverseString(str) {
let newString = "";
for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}
return newString;
}   

function reverseInput(){
  let x = document.getElementById("Sch_form");
  let text = "";
  let i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value;
  }
  
  document.getElementById("res").innerHTML = reverseString(text);
}