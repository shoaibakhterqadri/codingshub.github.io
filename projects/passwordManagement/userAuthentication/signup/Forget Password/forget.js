
let submit_data=document.getElementById("submit-data");
let forgetEmail=document.querySelector(".forgetEmail");

 import {app} from "../../firebase-config.js"
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth(app);

submit_data.addEventListener("click",()=>{
    sendPasswordResetEmail(auth, forgetEmail.value)
    .then(() => {
      forgetEmail="";
      
      swal("Congratulation!", "Your Password has been reset!", "Please check your email");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      swal("Sorry!", "Please enter correct email or your password has already been reset!");
    });
})
