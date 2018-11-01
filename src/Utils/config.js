import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCHBZxTTkgMkfhxuwNz_2A7k4PzkVaB_pM",
    authDomain: "dagk-cdc42.firebaseapp.com",
    databaseURL: "https://dagk-cdc42.firebaseio.com",
    projectId: "dagk-cdc42",
    storageBucket: "dagk-cdc42.appspot.com",
    messagingSenderId: "835313726198"
  };
  
  export const firebaseConnect = firebase.initializeApp(config);
  export const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider).then(result => {
//   // Google Access Token.
//   const token = result.credential.accessToken;
//   console.log(token);
//   // user info.
//   const user = result.user;
//   console.log(user);
//   // ...
// }).catch(error => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   const email = error.email;
//   // Firebase Auth Credential type
//   const credential = error.credential;
//   // ...
// });

// const user = firebase.auth().currentUser;
 
// if (user) {
//     const uid = user.uid;
//     const name = user.displayName;
//     const email = user.email;
//     // ...
// } else {
//     // no user...
// }