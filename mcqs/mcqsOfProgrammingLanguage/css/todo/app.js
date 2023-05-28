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
   deleteField,
   getDocs,
   
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

async function addMCQs(){
      try {
        const docRef = await addDoc(collection(db, "MCQsDataOfCss"), {   
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
// MCQs real time event listener


let mainLoader=document.querySelector(".mainLoader");


(async function(){
    try{
      mainLoader.style.display = 'block'
      const colRef = collection(db, "MCQsDataOfCss");
      const docsSnap = await getDocs(colRef);
      mainLoader.style.display = 'none'
      docsSnap.forEach(doc => {
        mcqsData.innerHTML += `
      <div class="my-4">
     <span class="text">          
     <div class="list-group">
<button type="button" class="list-group-item list-group-item-action active" aria-current="true">
${doc.data().questionStore}
</button> 
<button type="button"  id="firstOpt" onclick="checkAnswerofMcqs(this,'${doc.data().opt1Store}', '${doc.data().answerStore}')" class="list-group-item list-group-item-action ">${doc.data().opt1Store}</button>
<button type="button" id="secondOpt"  onclick="checkAnswerofMcqs(this,'${doc.data().opt2Store}', '${doc.data().answerStore}')"  class="list-group-item list-group-item-action">${doc.data().opt2Store}</button>
<button type="button" id="thirdOpt"  onclick="checkAnswerofMcqs(this,'${doc.data().opt3Store}', '${doc.data().answerStore}')"  class="list-group-item list-group-item-action">${doc.data().opt3Store}</button>
<button type="button" id="fourthOpt"  onclick="checkAnswerofMcqs(this,'${doc.data().opt4Store}', '${doc.data().answerStore}')"  class="list-group-item list-group-item-action">${doc.data().opt4Store}</button>
</div>
     </div>
   </div>  
     </span>
     </div>`
        console.log(doc.data());
    })
    } catch(err){
      console.log(err);
    }
  })();
function checkAnswerofMcqs(button,option , answer){
  if(option== answer){
    console.log("answer match")
    button.style.backgroundColor="#1fa135";
    button.style.color="white";
    // setTimeout(()=>{
    //   button.style.backgroundColor="white";
    //   button.style.color="black";
    // },1500)
    }
    else{
      button.style.backgroundColor="#FF0000";
      button.style.color="white";
      setTimeout(()=>{
        button.style.backgroundColor="white";
      button.style.color="black";
      },1500)
    }
}
// MCQs 

async function deleteMcqs(id){
  const deleteRef= doc(db, "MCQsDataOfCss", id );
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
window.deleteMcqs = deleteMcqs;
window.editMcqs = editMcqs;
 window.saveMcqs = saveMcqs;
 window.addMCQs = addMCQs;
  window.checkAnswerofMcqs = checkAnswerofMcqs;