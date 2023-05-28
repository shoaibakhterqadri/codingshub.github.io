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
    swal("Congratulations!", "You are Sign in!", "success");

    location="../passwordManagement/index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal("Sorry!", "You are not  sign in "+error);

  });
})