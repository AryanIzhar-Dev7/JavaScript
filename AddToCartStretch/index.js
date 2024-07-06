
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const appSettings = {
    databaseURL: "https://realtimedatabase-336aa-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database= getDatabase(app);
const shoppingListInDB= ref(database,"shoppingList");
const shoppingListEl= document.getElementById("shoppingList");
let imageEl=document.getElementById("cat");


const inputFieldEl= document.getElementById("input-field");
const addButtonEl= document.getElementById("add-btn")




addButtonEl.addEventListener("click", ()=> {

    let inputFieldValue= inputFieldEl.value
    
    push(shoppingListInDB,inputFieldValue);
    
    clearInputFieldEl();

    // appendItemtoShoppinListEl(inputFieldValue);


    

})

const images=[

    "Randomimages/0.png",
    "Randomimages/1.png",
    "Randomimages/2.png",
    "Randomimages/3.png",
    "Randomimages/4.png",
    "Randomimages/5.png",
    "Randomimages/6.png",
    "Randomimages/7.png",
    "Randomimages/8.gif",
    "Randomimages/9.png",
    "Randomimages/10.png",
    "Randomimages/11.png",
    "Randomimages/12.png",
    "Randomimages/13.png",
    "Randomimages/14.gif",
    "Randomimages/15.png",
    "Randomimages/16.png",
    "Randomimages/17.gif"
    ]



function renderRandomImages() {
   let randomImageIndex = Math.floor(Math.random() * images.length);
   imageEl.src=images[randomImageIndex];

}

renderRandomImages();

// On Click Change the Picture
imageEl.addEventListener("click",()=>{
    renderRandomImages();
})




onValue(shoppingListInDB, function (snapshot){
    
    if(snapshot.exists()){
        let arrayItem= Object.entries(snapshot.val())
    
    clearShoppingListEl();

    for(let i=0; i<arrayItem.length; i++){
        let currentItem= arrayItem[i];
        let currentItemID = currentItem[0];
        let currentItemValue = currentItem[1];

        console.log(currentItemValue);
        appendItemtoShoppinListEl(currentItem);
    }
    } else{
        shoppingListEl.innerHTML="No Item is here... yet!"
    }

})



function clearShoppingListEl(){
    shoppingListEl.innerText="";
}
function clearInputFieldEl(){
    inputFieldEl.value="";
}

function appendItemtoShoppinListEl(item){

    //  shoppingListEl.innerHTML+= `<li> ${itemValue} </li>`\
    let itemId=item[0];
    let itemValue=item[1];

    let newEl= document.createElement("li");
    newEl.textContent=itemValue;
    shoppingListEl.append(newEl);

    newEl.addEventListener("dblclick",()=>{
        console.log("clicked")

        let exactLocationOfItemInDB= ref(database,`shoppingList/${itemId}`);

        remove(exactLocationOfItemInDB);


    })
}