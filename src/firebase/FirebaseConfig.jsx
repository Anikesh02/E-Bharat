import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpzfEPiq9RiHiMXiFYv0ELNpBreRlai4A",
  authDomain: "e-bharat-c0a2d.firebaseapp.com",
  projectId: "e-bharat-c0a2d",
  storageBucket: "e-bharat-c0a2d.appspot.com",
  messagingSenderId: "408633071827",
  appId: "1:408633071827:web:e09fbce427880aa77edc26"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;