import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//seed database
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';


//config
const config = {
    apiKey: "AIzaSyDv3N9U8C3ITPgF9w1rx2kIstJY1sbdCGA",
    authDomain: "netflix-91fd2.firebaseapp.com",
    projectId: "netflix-91fd2",
    storageBucket: "netflix-91fd2.appspot.com",
    messagingSenderId: "187455299157",
    appId: "1:187455299157:web:90f86d19ded47b6ccc3edc"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

