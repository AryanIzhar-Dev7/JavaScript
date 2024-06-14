
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const appSettings = {
    databaseURL: "https://realtimedatabase-336aa-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database= getDatabase(app);
const shoppingListInDB= ref(database,"shoppingList");
const shoppingListEl= document.getElementById("shoppingList");


const inputFieldEl= document.getElementById("input-field");
const addButtonEl= document.getElementById("add-btn")

addButtonEl.addEventListener("click", ()=> {

    let inputFieldValue= inputFieldEl.value
    
    push(shoppingListInDB,inputFieldValue);
    
    clearInputFieldEl();

    // appendItemtoShoppinListEl(inputFieldValue)
    
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