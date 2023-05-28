import {app,auth} from "./firebase-config.js";
import {signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'



// Sign in (Login)

let lEmail=document.getElementById("lEmail");
let lPassword=document.getElementById("lPassword");
let lSubmit=document.getElementById("lSubmit");

lSubmit.addEventListener("click",()=>{
    signInWithEmailAndPassword(auth, lEmail.value, lPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Congratulations, You are login")
    location="todo/index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Sorry, You are not  sign in "+error)
  });
})