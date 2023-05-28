// import {getAuth,onAuthStateChanged} from "../signup/firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const ul = document.getElementById("list");
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Success");
  } else {
    console.log("You are logout");
    alert("You are logout");
    location = "../index.html";
  }
});

// MCQs
let question = document.getElementById("question")
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")
let answer = document.getElementById("answer")
let addMcqs = document.getElementById("addMcqs")
const mcqsData = document.getElementById("mcqsData");
const mcqsDataForm = document.getElementById("mcqsDataForm");

// Adding MCQs 

function addMCQs(){
  onAuthStateChanged (auth , async user => {
    if(user){
      try {
        const docRef = await addDoc(collection(db, "MCQsData"), {
          questionStore: question.value,
          opt1Store: opt1.value,
          opt2Store: opt2.value,
          opt3Store: opt3.value,
          opt4Store: opt4.value,
          answerStore: answer.value,

          uid: user.uid
        });
        question.value = "";
        opt1.value = "";
        opt2.value = "";
        opt3.value = "";
        opt4.value = "";
        answer.value = "";
        console.log("Document written with ID: ", docRef.id); 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    else{
      console.log("User not Found")
    }
  })
}

// adding function of MCQs
addMcqs.addEventListener("click" ,  addMCQs)

// MCQs real time event listener

onAuthStateChanged(auth , (user) => {
  if (user) {
    const q = query(collection(db, "MCQsData"), where("uid", "==", user.uid));
     onSnapshot(q, (querySnapshot) => {
      mcqsData.innerHTML="";
      querySnapshot.forEach((doc) => {
       console.log(doc.data().questionStore)
       console.log(doc.data().opt1Store)
       console.log(doc.data().opt2Store)
       console.log(doc.data().opt3Store)
       console.log(doc.data().opt4Store)
       console.log(doc.data().answerStore)

       mcqsData.innerHTML += `<div>
       <span class="text">
       
       <div class="card rounded bg-white shadow p-2 container my-4" >
       <h5 class="card-header">${doc.data().questionStore}</h5>
       <div class="card-body">
       <h5 class="card-title">${doc.data().answerStore}</h5>
         <p class="card-text">${doc.data().opt1Store}</p>
         <p class="card-text">${doc.data().opt2Store}</p>
         <p class="card-text">${doc.data().opt3Store}</p>
         <p class="card-text">${doc.data().opt4Store}</p>
         <button type="button" class="btn btn-primary" id="editBtn" onclick="editMcqs('${doc.id}','${doc.data().questionStore}','${doc.data().opt1Store}',
         '${doc.data().opt2Store}','${doc.data().opt3Store}','${doc.data().opt4Store}','${doc.data().answerStore}')">Edit</button>
         <button type="button" class="btn btn-danger" id="delete"  onclick="deleteMcqs('${doc.id}')">Delete</button>
       </div>
     </div>        
       </span>
       <span class="buttons">          
      </span>
       </div>`   
      }); 
    });
  }
});

async function deleteMcqs(id){
  const deleteRef= doc(db, "MCQsData", id );
  await deleteDoc(deleteRef,);
}

let getIdOfMcqs;
async function editMcqs(id,question1,option1,option2,option3,option4,answerOption){
  getIdOfMcqs=id;
  question.value=question1;
  opt1.value=option1;
  opt2.value=option2;
  opt3.value=option3;
  opt4.value=option4;
  answer.value=answerOption;
  addMcqs.setAttribute("onclick",`saveMcqs()`)
}

 const saveMcqs=async ()=>{
  const docRef = doc(db, "questionStore", getIdOfMcqs);
await updateDoc(docRef, {
  questionStore: question.value,
  opt1Store: opt1.value,
  opt2Store: opt2.value,
  opt3Store: opt3.value,
  opt4Store: opt4.value,
  answerStore: answer.value,

});
question.value="";
opt1.value="";
opt2.value="";
opt3.value="";
opt4.value="";
answer.value="";

addMcqs.setAttribute("onclick", `addMCQs()`);
getIdOfMcqs = undefined;
}









//  MCQS


window.deleteMcqs = deleteMcqs;
window.editMcqs = editMcqs;
 window.saveMcqs = saveMcqs;
 window.addMCQs = addMCQs;








