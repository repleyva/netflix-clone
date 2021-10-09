import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOtIZqhbryNcGdK7z_k-_x6bRkjubYJYY",
  authDomain: "netflix-clone-ad149.firebaseapp.com",
  projectId: "netflix-clone-ad149",
  storageBucket: "netflix-clone-ad149.appspot.com",
  messagingSenderId: "922814499815",
  appId: "1:922814499815:web:4656115cb962e6c67d8b42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
