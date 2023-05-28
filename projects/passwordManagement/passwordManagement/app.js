

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  getDocs,
  doc,
  updateDoc,
   deleteDoc,
   deleteField
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
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
const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Success");
  } else {
    console.log("You are logout");
    alert("You are logout");
    location = "../userAuthentication/signup/index.html";
  }
});


 let  userName = document.querySelector("#name");
let email = document.querySelector("#email");
let websiteName = document.querySelector("#websiteName");
let password = document.querySelector("#password");
let writePassword=document.querySelector(".password")
const nameData = document.getElementById("nameData");
const emailData = document.getElementById("emailData");
const websiteNameData = document.getElementById("websiteNameData");
const passwordData = document.getElementById("passwordData");
const bodyData=document.getElementById("bodyData")
const submitDataBtn = document.querySelector("#rSubmit");
const addInfo = document.querySelector("#addInfo");



if(submitDataBtn){
submitDataBtn.addEventListener("click",()=>{

    if(password.value == ""){
      writePassword.innerHTML='Write your Password'
      return false;
    }
    else{
      writePassword.innerHTML="";
    }
    

    onAuthStateChanged (auth , async user => {
      if(user){
try {
      let collectionRef = collection(db, "additionalInfo")
      const docRef =  addDoc(collectionRef, {
          UserName: userName.value,
          Email: email.value,
          WebsiteName:websiteName.value,
          Password:password.value,

          uid: user.uid
      });
      console.log("Document written with ID: ", docRef.id);


  swal("Congratulation!", "The date is saved!", "success");

    } catch (e) {
      console.error("Error adding document: ", e);
      console.log(e)
     swal("Sorry", "The data is not saved");
    }}
    else{
      console.log("User not Found");
    }
    userName.value="";
    email.value="";
    websiteName.value="";
    password.value="";
    writePassword.innerHTML="";
    
});
})
}

var copyIcon = document.querySelector(".input-box span");



onAuthStateChanged(auth , (user) => {
  if (user) {
    const q = query(collection(db, "additionalInfo"), where("uid", "==", user.uid));
     onSnapshot(q, (querySnapshot) => {
      bodyData.innerHTML="";

      querySnapshot.forEach((doc) => {

      bodyData.innerHTML+=`<tr>
<td id="nameData">${doc.data().UserName}</td>
<td id="emailData">${doc.data().Email}</td>
<td id="websiteNameData">${doc.data().WebsiteName}</td>
<td id="passwordData">${doc.data().Password}</td>
<td>
<div class="input-box">
            <span class="material-symbols-rounded" id="copyIcan" onclick="CopyData('${doc.data().Password}')">copy_all</span>
      </div>
</td>
<td><button type="button" class="btn btn-danger btn-sm" id="delete" onclick="deleteData('${doc.id}')">Delete</button></td>
</tr>`

      });
      
    });
  }
}
);

if(copyIcon){
  copyIcon.addEventListener("click", copyPassword);
  }

async function CopyData(id){
  navigator.clipboard.writeText(id); // copying random password
  // copyIcon.innerText = "check"; // changing copy icon to tick
  // copyIcon.style.color = "#4285F4";
  // setTimeout(() => { // after 1500 ms, changing tick icon back to copy
  //     copyIcon.innerText = "copy_all";
  //     copyIcon.style.color = "#707070";
  // }, 1500);

}


async function deleteData(id){
  const deleteRef= doc(db, "additionalInfo", id );
  await deleteDoc(deleteRef,);


}
if(addInfo){
addInfo.addEventListener("click",()=>{
  location="addInfo.html"
})}

window.deleteData = deleteData;
window.CopyData = CopyData;
