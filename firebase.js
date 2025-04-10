import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
await addDoc(collection(db, "reviews"), {
  name: "Jagat",
  rating: 5,
  review: "Superb portfolio!",
  timestamp: new Date()
});
import { getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "reviews"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
