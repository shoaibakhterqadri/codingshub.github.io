import { app, db } from "./firebase-config.js"
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"



const userName = document.querySelector(".user-name");
const email = document.querySelector(".email");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const subject = document.querySelector("#subject");
const message = document.querySelector(".message");
const submitDataBtn = document.querySelector("#submit-data");

 const submitData = () =>  {

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
      
          alert("Your data is saved")
        } catch (e) {
          console.error("Error adding document: ", e);
          console.log(e)
          
          console.log("The data is not saved")
          alert("The data is not saved")
      
        }
}
submitDataBtn.addEventListener("click",submitData);








//  
// }







// submitDataBtn.addEventListener("click",submitData);