import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDNJbUvNjHu3lXTs52DPVa7BxjHLAFz3D0",
  authDomain: "projetoflexxo.firebaseapp.com",
  databaseURL: "https://projetoflexxo-default-rtdb.firebaseio.com",
  projectId: "projetoflexxo",
  storageBucket: "projetoflexxo.appspot.com",
  messagingSenderId: "1079845505103",
  appId: "1:1079845505103:web:cf799ac31b30145102023a",
  measurementId: "G-DR9ENGSS4Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export default firebaseConfig;
export const firebaseDatabase = firebase.database();
