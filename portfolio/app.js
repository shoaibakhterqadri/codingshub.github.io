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
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
const submitDataBtn = document.querySelector("#submit");

submitDataBtn.addEventListener("click",()=>{
try {
      let collectionRef = collection(db, "my_portfolio")
      const docRef =  addDoc(collectionRef, {
          UserName: userName.value,
        UserEmail: email.value,
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
    } 
});