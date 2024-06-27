// importing
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


//Setting up the Database
const appSettings = {
    databaseURL: "https://commenlist-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings);
const database= getDatabase(app);
const commentsInDB= ref(database,"CommentList");

// getting elements
const publishBtnEl=document.getElementById("publish-btn")
const inputEl= document.getElementById("inputel");
const CommentListEl= document.getElementById("commentList");


// OnValue render out the list(on Display) into ul 
onValue(commentsInDB,function (snapshot){

    if(snapshot.exists()){

        let arrayItem= Object.entries(snapshot.val());

        clearCommentListEl();
        for(let i=0; i<arrayItem.length; i++){

            let currenItem=arrayItem[i];
            let currenItemID= currenItem[0];
            let currentItemValue=currenItem[1];

            // displaying the value of the current item
            console.log(currentItemValue)

            // calling the function appendItemToCommentListEl
            appendItemToCommentListEl(currenItem);
        }
    } else{
        CommentListEl.innerText=`Nobody has commented...yet!
        Be The First One!☺️`
    }
})


//click to add into Database from inputarea
publishBtnEl.addEventListener("click",()=>{
    let inputValue= inputEl.value;
    push(commentsInDB,inputValue);
    clearInputEl();
})

function clearInputEl(){
    inputEl.value="";   }

function clearCommentListEl(){
    CommentListEl.innerText="";
}

// it will add the new comments/endorements into list
function appendItemToCommentListEl(item){

    let itemValue=item[1];
    let itemId=item[0]

    let newEl= document.createElement("li");
    newEl.innerHTML=itemValue;
    CommentListEl.append(newEl)


    // It will remove the Data from the Database (Firebase)
    newEl.addEventListener("dblclick",()=>{

        let exactLocationOfItemInDB= ref(database,`CommentList/${itemId}`);
        remove(exactLocationOfItemInDB);


    })
}

