

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"

 const firebaseConfig = {
   apiKey: "AIzaSyCIVglP8b1ebS0gxo68ppitsYxdg04QXKU",
   authDomain: "codingshub-f0ec1.firebaseapp.com",
   databaseURL: "https://codingshub-f0ec1-default-rtdb.firebaseio.com",
   projectId: "codingshub-f0ec1",
   storageBucket: "codingshub-f0ec1.appspot.com",
   messagingSenderId: "817602244747",
   appId: "1:817602244747:web:e59247780d7e9dffd3248e",
   measurementId: "G-G9P8LXN0JC"
 };
 export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


 let  userName = document.querySelector("#name");
let email = document.querySelector("#rEmail");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
const submitDataBtn = document.querySelector("#rSubmit");

let writeName=document.querySelector(".name")
let writeEmail=document.querySelector(".email")
let writeSubject=document.querySelector(".subject")
let writeMessage=document.querySelector(".message")

submitDataBtn.addEventListener("click",()=>{

  if(userName.value !== ""){
    console.log("");

   }
   else{
    writeName.innerHTML='Write Name'
     return false;
   }

    if(email.value !== ""){
      if(email.value.length > 8){
        console.log("Successful Email")
      }
      else{
        
        writeEmail.innerHTML='Write correct email'
        return false
      }

    }
    else{
      writeEmail.innerHTML='Write Email'
      return false;
    }

    if(subject.value !== ""){
     console.log("");
    }
    else{
      writeSubject.innerHTML='Write Subject'
      return false;
    }


     if(message.value !== ""){
      console.log("");
     }
     else{
      writeMessage.innerHTML='Write Message'
       return false;
     }    
try {
      let collectionRef = collection(db, "contact-us")
      const docRef =  addDoc(collectionRef, {
          UserName: userName.value,
        UserEmail: email.value,
        male:male.value,
        female:female.value,
        userSubject: subject.value,
         UserMessage: message.value
      });
      console.log("Document written with ID: ", docRef.id);


  swal("Congratulation!", "The date is saved!", "success");

    } catch (e) {
      console.error("Error adding document: ", e);
      console.log(e)
      // 
     swal("Sorry", "The data is not saved");
  // swal("Here's the title!", "...and here's the text!");
    }
    userName.value="";
    email.value="";
    message.value="";
    subject.value="";
    writeName.innerHTML=" ";
    writeEmail.innerHTML=" "
    writeSubject.innerHTML=" ";
    writeMessage.innerHTML=" ";
    
});