import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBgtnPqJwIwea8HkSa0SJ43uL7LT8_pcnw",
    authDomain: "bulavo-70b5e.firebaseapp.com",
    databaseURL: "https://bulavo-70b5e-default-rtdb.firebaseio.com",
    projectId: "bulavo-70b5e",
    storageBucket: "bulavo-70b5e.appspot.com",
    messagingSenderId: "279244806731",
    appId: "1:279244806731:web:ac306b4315c21dea018bce",
    measurementId: "G-P07GYL9KTC",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};