import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCbisyfbIuszf3iB5aCVJA3pDRyfVUMr9M",
  authDomain: "forum-instibuddy.firebaseapp.com",
  databaseURL: "https://forum-instibuddy.firebaseio.com",
  projectId: "forum-instibuddy",
  storageBucket: "forum-instibuddy.appspot.com",
  messagingSenderId: "57948093972",
  appId: "1:57948093972:web:7409dc3eb13dcac4a97101",
  measurementId: "G-HMRY2NESS1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var provider_g = new firebase.auth.GoogleAuthProvider();
  var provider_fb = new firebase.auth.FacebookAuthProvider();
  var provider_tw = new firebase.auth.TwitterAuthProvider();
  export {provider_g} ;
  export {provider_fb} ;
  export {provider_tw} ;

  export default firebase;