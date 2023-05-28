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
          answer1: answer.value,

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




let logout = document.getElementById("logout");

// logout.addEventListener("click", () => {
//   auth.signOut();
// });






// MCQs real time event listener

onAuthStateChanged(auth , (user) => {
  if (user) {
    const q = query(collection(db, "MCQsData"), where("uid", "==", user.uid));
     onSnapshot(q, (querySnapshot) => {
      mcqsData.innerHTML="";
      // mcqsDataForm.innerHTML="";
      querySnapshot.forEach((doc) => {
       console.log(doc.data().questionStore)
       console.log(doc.data().opt1Store)
       console.log(doc.data().opt2Store)
       console.log(doc.data().opt3Store)
       console.log(doc.data().opt4Store)
       console.log(doc.data().answer1)
      


       mcqsData.innerHTML += `<div>
       <span class="text">
       
       <div class="card rounded bg-white shadow p-2 container my-4" >
       <h5 class="card-header">${doc.data().questionStore}</h5>
       <div class="card-body">
       <h5 class="card-title">${doc.data().answer1}</h5>
         <p class="card-text">${doc.data().opt1Store}</p>
         <p class="card-text">${doc.data().opt2Store}</p>
         <p class="card-text">${doc.data().opt3Store}</p>
         <p class="card-text">${doc.data().opt4Store}</p>


         <div class="list-group">
         <a href="#" class="list-group-item list-group-item-action active">
         ${doc.data().answer1}
         </a>
         <a href="" class="list-group-item list-group-item-action">${doc.data().opt1Store}</a>
         <a href="" class="list-group-item list-group-item-action">${doc.data().opt2Store}</a>
         <a href="" class="list-group-item list-group-item-action">${doc.data().opt3Store}</a>
         <a href="" class="list-group-item list-group-item-action disabled">${doc.data().opt4Store}</a>
       </div>



        

         
       </div>
     </div>
     
       </span>
       </div>`
       
    //    if(answer1==opt1Store){
    //     alert("matched");
    //    }

       

    //    mcqsDataForm.innerHTML += `<div>
    //    <span class="text">
       
    //    <div class="card rounded bg-white shadow p-2 container my-4" >
    //    <h5 class="card-header">${doc.data().questionStore}</h5>
    //    <div class="card-body">
    //    <h5 class="card-title">${doc.data().answer1}</h5>
    //      <p class="card-text">${doc.data().opt1Store}</p>
    //      <p class="card-text">${doc.data().opt2Store}</p>
    //      <p class="card-text">${doc.data().opt3Store}</p>
    //      <p class="card-text">${doc.data().opt4Store}</p>
         
    //    </div>
    //  </div>

           
    //    </span>
      
    //    </div>`
       
      });
      
    });
  }
}
);

// now start tahaokay










// sir is ko dekhe ke yahan per mene ye keya hai 


// MCQs 

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
  answer1: answer.value,

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




 
//  Todo app





 let todoInp = document.getElementById("todos")
 let addBtn = document.getElementById("add")


// adding todos
function addTodo(){
  onAuthStateChanged (auth , async user => {
    if(user){
      try {
        const docRef = await addDoc(collection(db, "todos"), {
          todo: todoInp.value,
          uid: user.uid
        });
        todoInp.value = ""
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

// adding function of todo 
// addBtn.addEventListener("click" ,  addTodo)


// real time event listener

// onAuthStateChanged(auth , (user) => {
//   if (user) {
//     const q = query(collection(db, "todos"), where("uid", "==", user.uid));
//      onSnapshot(q, (querySnapshot) => {
//       ul.innerHTML="";
//       querySnapshot.forEach((doc) => {
//        console.log(doc.data().todo)

//        ul.innerHTML += `<li>
//        <span class="text">
//           ${doc.data().todo}
//        </span>
//        <span class="buttons">
//            <button  id="editBtn" onclick="editTodo('${doc.id}','${doc.data().todo}')">Edit</button>
//            <button id="delete"  onclick="deleteTodo('${doc.id}')">Delete</button>
//        </span>
//        </li>`
       
//       });
      
//     });
//   }
// });





 async function deleteTodo(id){
  let deleteRef= doc(db, "todos", id );
  await deleteDoc(deleteRef);
}

let getId;
async function editTodo(id,val){
  getId=id;
  todoInp.value=val;
  addBtn.setAttribute("onclick",`saveTodo()`)
}


 const saveTodo=async ()=>{
  const docRef = doc(db, "todos", getId);
await updateDoc(docRef, {
  todo: todoInp.value,
});
todoInp.value="";
addBtn.setAttribute("onclick", `addTodo()`);
    getId = undefined;
}



 window.deleteTodo = deleteTodo;
 window.editTodo = editTodo;
  window.saveTodo = saveTodo;
  window.addTodo = addTodo;













// let question=document.getElementById("question");
// let para=document.getElementById("para");

// function add(){
//     // para.innerHTML=question.value;
//     para.innerHTML=question.value+ "<br/>" +para.innerHTML
//     question.value=" ";
// }


// function wrong11(){
//     document.getElementById("wrong11").style.color = "red";}
// function wrong12(){
//     document.getElementById("wrong12").style.color = "red";}
// function wrong13(){
//     document.getElementById("wrong13").style.color = "red";}
// function correct1(){
//     document.getElementById("correct1").style.color = "rgb(15, 185, 15)";}

//     function wrong21(){
//         document.getElementById("wrong21").style.color = "red";}
//     function wrong22(){
//         document.getElementById("wrong22").style.color = "red";}
//     function wrong23(){
//         document.getElementById("wrong23").style.color = "red";}
//     function correct2(){
//         document.getElementById("correct2").style.color = "rgb(15, 185, 15)";}
        
//         function wrong31(){
//             document.getElementById("wrong31").style.color = "red";}
//         function wrong32(){
//             document.getElementById("wrong32").style.color = "red";}
//         function wrong33(){
//             document.getElementById("wrong33").style.color = "red";}
//         function correct3(){
//             document.getElementById("correct3").style.color = "rgb(15, 185, 15)";}

//             function wrong41(){
//                 document.getElementById("wrong41").style.color = "red";}
//             function wrong42(){
//                 document.getElementById("wrong42").style.color = "red";}
//             function wrong43(){
//                 document.getElementById("wrong43").style.color = "red";}
//             function correct4(){
//                 document.getElementById("correct4").style.color = "rgb(15, 185, 15)";}

//                 function wrong51(){
//                     document.getElementById("wrong51").style.color = "red";}
//                 function wrong52(){
//                     document.getElementById("wrong52").style.color = "red";}
//                 function wrong53(){
//                     document.getElementById("wrong53").style.color = "red";}
//                 function correct5(){
//                     document.getElementById("correct5").style.color = "rgb(15, 185, 15)";}

//                     function wrong61(){
//                         document.getElementById("wrong61").style.color = "red";}
//                     function wrong62(){
//                         document.getElementById("wrong62").style.color = "red";}
//                     function wrong63(){
//                         document.getElementById("wrong63").style.color = "red";}
//                     function correct6(){
//                         document.getElementById("correct6").style.color = "rgb(15, 185, 15)";}

//                         function wrong71(){
//                             document.getElementById("wrong71").style.color = "red";}
//                         function wrong72(){
//                             document.getElementById("wrong72").style.color = "red";}
//                         function wrong73(){
//                             document.getElementById("wrong73").style.color = "red";}
//                         function correct7(){
//                             document.getElementById("correct7").style.color = "rgb(15, 185, 15)";}

//                             function wrong81(){
//                                 document.getElementById("wrong81").style.color = "red";}
//                             function wrong82(){
//                                 document.getElementById("wrong82").style.color = "red";}
//                             function wrong83(){
//                                 document.getElementById("wrong83").style.color = "red";}
//                             function correct8(){
//                                 document.getElementById("correct8").style.color = "rgb(15, 185, 15)";}

//                                 function wrong91(){
//                                     document.getElementById("wrong91").style.color = "red";}
//                                 function wrong92(){
//                                     document.getElementById("wrong92").style.color = "red";}
//                                 function wrong93(){
//                                     document.getElementById("wrong93").style.color = "red";}
//                                 function correct9(){
//                                     document.getElementById("correct9").style.color = "rgb(15, 185, 15)";}
                                    
//                                     function wrong101(){
//                                         document.getElementById("wrong101").style.color = "red";}
//                                     function wrong102(){
//                                         document.getElementById("wrong102").style.color = "red";}
//                                     function wrong103(){
//                                         document.getElementById("wrong103").style.color = "red";}
//                                     function correct10(){
//                                         document.getElementById("correct10").style.color = "rgb(15, 185, 15)";}
                                        
//                                         function wrong111(){
//                                             document.getElementById("wrong111").style.color = "red";}
//                                         function wrong112(){
//                                             document.getElementById("wrong112").style.color = "red";}
//                                         function wrong113(){
//                                             document.getElementById("wrong113").style.color = "red";}
//                                         function correct11(){
//                                             document.getElementById("correct11").style.color = "rgb(15, 185, 15)";}

//                                             function wrong121(){
//                                                 document.getElementById("wrong121").style.color = "red";}
//                                             function wrong122(){
//                                                 document.getElementById("wrong122").style.color = "red";}
//                                             function wrong123(){
//                                                 document.getElementById("wrong123").style.color = "red";}
//                                             function correct12(){
//                                                 document.getElementById("correct12").style.color = "rgb(15, 185, 15)";}

//                                                 function wrong131(){
//                                                     document.getElementById("wrong131").style.color = "red";}
//                                                 function wrong132(){
//                                                     document.getElementById("wrong132").style.color = "red";}
//                                                 function wrong133(){
//                                                     document.getElementById("wrong133").style.color = "red";}
//                                                 function correct13(){
//                                                     document.getElementById("correct13").style.color = "rgb(15, 185, 15)";}

//                                                     function wrong141(){
//                                                         document.getElementById("wrong141").style.color = "red";}
//                                                     function wrong142(){
//                                                         document.getElementById("wrong142").style.color = "red";}
//                                                     function wrong143(){
//                                                         document.getElementById("wrong143").style.color = "red";}
//                                                     function correct14(){
//                                                         document.getElementById("correct14").style.color = "rgb(15, 185, 15)";}

//                                                         function wrong151(){
//                                                             document.getElementById("wrong151").style.color = "red";}
//                                                         function wrong152(){
//                                                             document.getElementById("wrong152").style.color = "red";}
//                                                         function wrong153(){
//                                                             document.getElementById("wrong153").style.color = "red";}
//                                                         function correct15(){
//                                                             document.getElementById("correct15").style.color = "rgb(15, 185, 15)";}

//                                                             function wrong161(){
//                                                                 document.getElementById("wrong161").style.color = "red";}
//                                                             function wrong162(){
//                                                                 document.getElementById("wrong162").style.color = "red";}
//                                                             function wrong163(){
//                                                                 document.getElementById("wrong163").style.color = "red";}
//                                                             function correct16(){
//                                                                 document.getElementById("correct16").style.color = "rgb(15, 185, 15)";}

//                                                                 function wrong171(){
//                                                                     document.getElementById("wrong171").style.color = "red";}
//                                                                 function wrong172(){
//                                                                     document.getElementById("wrong172").style.color = "red";}
//                                                                 function wrong173(){
//                                                                     document.getElementById("wrong173").style.color = "red";}
//                                                                 function correct17(){
//                                                                     document.getElementById("correct17").style.color = "rgb(15, 185, 15)";}

//                                                                     function wrong181(){
//                                                                         document.getElementById("wrong181").style.color = "red";}
//                                                                     function wrong182(){
//                                                                         document.getElementById("wrong182").style.color = "red";}
//                                                                     function wrong183(){
//                                                                         document.getElementById("wrong183").style.color = "red";}
//                                                                     function correct18(){
//                                                                         document.getElementById("correct18").style.color = "rgb(15, 185, 15)";}

//                                                                         function wrong191(){
//                                                                             document.getElementById("wrong191").style.color = "red";}
//                                                                         function wrong192(){
//                                                                             document.getElementById("wrong192").style.color = "red";}
//                                                                         function wrong193(){
//                                                                             document.getElementById("wrong193").style.color = "red";}
//                                                                         function correct19(){
//                                                                             document.getElementById("correct19").style.color = "rgb(15, 185, 15)";}

//                                                                             function wrong201(){
//                                                                                 document.getElementById("wrong201").style.color = "red";}
//                                                                             function wrong202(){
//                                                                                 document.getElementById("wrong202").style.color = "red";}
//                                                                             function wrong203(){
//                                                                                 document.getElementById("wrong203").style.color = "red";}
//                                                                             function correct20(){
//                                                                                 document.getElementById("correct20").style.color = "rgb(15, 185, 15)";}

//                                                                                 function wrong211(){
//                                                                                     document.getElementById("wrong211").style.color = "red";}
//                                                                                 function wrong212(){
//                                                                                     document.getElementById("wrong212").style.color = "red";}
//                                                                                 function wrong213(){
//                                                                                     document.getElementById("wrong213").style.color = "red";}
//                                                                                 function correct21(){
//                                                                                     document.getElementById("correct21").style.color = "rgb(15, 185, 15)";}

//                                                                                     function wrong221(){
//                                                                                         document.getElementById("wrong221").style.color = "red";}
//                                                                                     function wrong222(){
//                                                                                         document.getElementById("wrong222").style.color = "red";}
//                                                                                     function wrong223(){
//                                                                                         document.getElementById("wrong223").style.color = "red";}
//                                                                                     function correct22(){
//                                                                                         document.getElementById("correct22").style.color = "rgb(15, 185, 15)";}

//                                                                                         function wrong231(){
//                                                                                             document.getElementById("wrong231").style.color = "red";}
//                                                                                         function wrong232(){
//                                                                                             document.getElementById("wrong232").style.color = "red";}
//                                                                                         function wrong233(){
//                                                                                             document.getElementById("wrong233").style.color = "red";}
//                                                                                         function correct23(){
//                                                                                             document.getElementById("correct23").style.color = "rgb(15, 185, 15)";}

//                                                                                             function wrong241(){
//                                                                                                 document.getElementById("wrong241").style.color = "red";}
//                                                                                             function wrong242(){
//                                                                                                 document.getElementById("wrong242").style.color = "red";}
//                                                                                             function wrong243(){
//                                                                                                 document.getElementById("wrong243").style.color = "red";}
//                                                                                             function correct24(){
//                                                                                                 document.getElementById("correct24").style.color = "rgb(15, 185, 15)";}

//                                                                                                 function wrong251(){
//                                                                                                     document.getElementById("wrong251").style.color = "red";}
//                                                                                                 function wrong252(){
//                                                                                                     document.getElementById("wrong252").style.color = "red";}
//                                                                                                 function wrong253(){
//                                                                                                     document.getElementById("wrong253").style.color = "red";}
//                                                                                                 function correct25(){
//                                                                                                     document.getElementById("correct25").style.color = "rgb(15, 185, 15)";}

//                                                                                                     function wrong261(){
//                                                                                                         document.getElementById("wrong261").style.color = "red";}
//                                                                                                     function wrong262(){
//                                                                                                         document.getElementById("wrong262").style.color = "red";}
//                                                                                                     function wrong263(){
//                                                                                                         document.getElementById("wrong263").style.color = "red";}
//                                                                                                     function correct26(){
//                                                                                                         document.getElementById("correct26").style.color = "rgb(15, 185, 15)";}

//                                                                                                         function wrong271(){
//                                                                                                             document.getElementById("wrong271").style.color = "red";}
//                                                                                                         function wrong272(){
//                                                                                                             document.getElementById("wrong272").style.color = "red";}
//                                                                                                         function wrong273(){
//                                                                                                             document.getElementById("wrong273").style.color = "red";}
//                                                                                                         function correct27(){
//                                                                                                             document.getElementById("correct27").style.color = "rgb(15, 185, 15)";}

//                                                                                                             function wrong281(){
//                                                                                                                 document.getElementById("wrong281").style.color = "red";}
//                                                                                                             function wrong282(){
//                                                                                                                 document.getElementById("wrong282").style.color = "red";}
//                                                                                                             function wrong283(){
//                                                                                                                 document.getElementById("wrong283").style.color = "red";}
//                                                                                                             function correct28(){
//                                                                                                                 document.getElementById("correct28").style.color = "rgb(15, 185, 15)";}

//                                                                                                                 function wrong291(){
//                                                                                                                     document.getElementById("wrong291").style.color = "red";}
//                                                                                                                 function wrong292(){
//                                                                                                                     document.getElementById("wrong292").style.color = "red";}
//                                                                                                                 function wrong293(){
//                                                                                                                     document.getElementById("wrong293").style.color = "red";}
//                                                                                                                 function correct29(){
//                                                                                                                     document.getElementById("correct29").style.color = "rgb(15, 185, 15)";}

//                                                                                                                     function wrong301(){
//                                                                                                                         document.getElementById("wrong301").style.color = "red";}
//                                                                                                                     function wrong302(){
//                                                                                                                         document.getElementById("wrong302").style.color = "red";}
//                                                                                                                     function wrong303(){
//                                                                                                                         document.getElementById("wrong303").style.color = "red";}
//                                                                                                                     function correct30(){
//                                                                                                                         document.getElementById("correct30").style.color = "rgb(15, 185, 15)";}



