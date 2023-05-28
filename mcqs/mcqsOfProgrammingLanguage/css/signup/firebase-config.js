import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";




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
export const db = getFirestore(app);
export const storage = getStorage(app)