import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA3ujn__qo85X_awZzgnP4o_vQ6P3uJOhw",
  authDomain: "curso-react-a3254.firebaseapp.com",
  projectId: "curso-react-a3254",
  storageBucket: "curso-react-a3254.appspot.com",
  messagingSenderId: "72668497880",
  appId: "1:72668497880:web:9c992a5e2fcc425b63d4ad",
  measurementId: "G-VBWW34JM3M"
};

if(!firebase.apps.length){
  //Abrir a conexão com o firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;