import {app,auth} from "./../firebase-config.js"
 import { createUserWithEmailAndPassword,sendEmailVerification  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// Sign up (Register)
let rEmail=document.getElementById("rEmail");
let rPassword=document.getElementById("rPassword");
let rCPassword=document.getElementById("rCPassword");
let writePassword=document.querySelector(".password");
let writeEmail=document.querySelector(".email")
let rSubmit=document.getElementById("rSubmit");

  rSubmit.addEventListener("click",()=>{
    if(rEmail.value !== ""){
      if(rEmail.value.length > 8){
        console.log("Successful Email")
      }
      else{
        
        writeEmail.innerHTML='Enter correct email'
writePassword.innerHTML='';
        return false
      }

    }
    else{
      writeEmail.innerHTML='Enter Email'
      return false;
    }
    if(rPassword.value !== ""){
      if(rPassword.value.length > 8){
        console.log("Successful Password")
      }
      else{
        writePassword.innerHTML='Enter strong Password'
        writeEmail.innerHTML='';
        return false
      }

    }
    else{
      writePassword.innerHTML='Enter Password'
      return false;
    }

    if(rCPassword !== ""){
      if(rCPassword.value === rPassword.value){
        console.log("Successful Password")
      }
      else{
        writePassword.innerHTML='The password is not matched'
        return false
      }
    }
    else{
      writePassword.innerHTML='Enter Password'
      return false;
    }


    createUserWithEmailAndPassword(auth, rEmail.value, rPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser)
      .then(() => {
        location="Forget Password/Email Verification/verification.html";
      });
      console.log(user)
      // swal("Congratulation!", "You are Sign Up!", "success");
      
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      swal("Sorry!", "You are not  Sign Un "+error);
      
      // ..
    });
  
})
