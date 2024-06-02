const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2",
 "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
 "$","%","^","&","*","(",")","_","-","+","=","{","[","}",
 "]",",","|",":",";","<",">",".","?",
"/"];

// Using above character the passwords will be made

let password1EL= document.querySelector("#password1");
let password2EL = document.querySelector("#password2");



function generate(){
  
let pass1="";
let pass2=""

let p1=0;
let p2=0;

for (let i=0; i< 15; i++){
    //generating random number
    p1=Math.floor(Math.random()*characters.length);
    p2=Math.floor(Math.random()*characters.length);
    
    //making two different password pass1 and pass2
    pass1+=characters[p1];
    pass2+=characters[p2];
}


console.log(pass1);
console.log(pass2);
password1EL.value=pass1;
password2EL.value=pass2;

}

//Copy on click
function copy1() {
    // const inputElement = document.getElementById(elementId);
    password1EL.select();
    password1EL.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(password1EL.value).then(() => {
        alert('Password copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


function copy2() {
    // const inputElement = document.getElementById(elementId);
    password2EL.select();
    password2EL.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(password2EL.value).then(() => {
        alert('Password copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


