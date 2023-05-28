import { app, db } from "./firebase-config.js"
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
// 
// 
// 
const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const subject = document.querySelector("#subject");
const message = document.querySelector(".message");
const submitDataBtn = document.querySelector("#submit-data");
// 
 const submitData = () =>  {
// 
    console.log(userName.value,email.value)
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
      // 
          alert("Your data is saved")
        } catch (e) {
          console.error("Error adding document: ", e);
          console.log(e)
          // 
          console.log("The data is not saved")
          alert("The data is not saved")
      // 
        }
}
submitDataBtn.addEventListener("click",submitData);
// 
// 
// 
// 
// 
// 
// 
// 
//  
// }
// 
// 
// 
// 
// 
// 
// 
// submitDataBtn.addEventListener("click",submitData);



// import {app,auth} from "./firebase-config"
//  import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// Sign up (Register)
// let rEmail=document.getElementById("rEmail");
// let rPassword=document.getElementById("rPassword");
// let rCPassword=document.getElementById("rCPassword");
// let writePassword=document.querySelector(".password");
// let writeEmail=document.querySelector(".email")
// let rSubmit=document.getElementById("rSubmit");




  // rSubmit.addEventListener("click",()=>{
    // if(rEmail.value !== ""){
      // if(rEmail.value.length > 8){
        // console.log("Successful Email")
      // }
      // else{
        // 
        // writeEmail.innerHTML='Enter correct email'
        // return false
      // }

    // }
    // else{
      // writeEmail.innerHTML='Enter Email'
      // return false;
    // }
    // if(rPassword.value !== ""){
      // if(rPassword.value.length > 8){
        // console.log("Successful Password")
      // }
      // else{
        // writePassword.innerHTML='Enter strong Password'
        // return false
      // }

    // }
    // else{
      // writePassword.innerHTML='Enter Password'
      // return false;
    // }

    // if(rCPassword !== ""){
      // if(rCPassword.value === rPassword.value){
        // console.log("Successful Password")
      // }
      // else{
        // writePassword.innerHTML='The password is not matched'
        // return false
      // }
    // }
    // else{
      // writePassword.innerHTML='Enter Password'
      // return false;
    // }


    // createUserWithEmailAndPassword(auth, rEmail.value, rPassword.value)
    // .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // console.log(user)
      // alert("Congratulations, You are sign up")
      // 
      // ...
    // })
    // .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorMessage)
      // alert("Sorry, You are not  sign up "+error)
      // 
      // ..
    // });
  // 
// })



