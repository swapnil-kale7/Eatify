import firebase from "firebase";
// import * as dotenv from "dotenv";

// dotenv.config();

const firebaseConfig={
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
// const firebaseConfig={
//     apiKey : "AIzaSyBaIeeRMPuOPhCW56RR5CCY-vy6_awzGQI",
//     authDomain : "geekforgeeksui.firebaseapp.com",
//     projectId: "geekforgeeksui",
//     storageBucket :"geekforgeeksui.appspot.com",
//     messagingSenderId  :"29540729940",
//     appId : "1:295450729940:web:45ae02daac6855e9668a41",
//     measurementId : "G-3THBTZWCWK"
// }


firebase.initializeApp(firebaseConfig);
console.log(firebase.app().options);