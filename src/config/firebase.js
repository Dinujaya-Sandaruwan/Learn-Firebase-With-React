// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAHCA1FwMFDy8qsAFCWbqSUcGTPYohGcHU",
	authDomain: "first-firebase-course.firebaseapp.com",
	projectId: "first-firebase-course",
	storageBucket: "first-firebase-course.appspot.com",
	messagingSenderId: "883222021106",
	appId: "1:883222021106:web:fd158e31bbe1362552216b",
	measurementId: "G-Y7WJDF3KFF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
