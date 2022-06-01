import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7-17gK6GgW6pg59WFg47AqzNs7HZ9BtQ",
    authDomain: "sae-203-28d68.firebaseapp.com",
    projectId: "sae-203-28d68",
    storageBucket: "sae-203-28d68.appspot.com",
    messagingSenderId: "179409608537",
    appId: "1:179409608537:web:f3e9ad25d3c03d33c37648"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
