var config = {
  apiKey: "AIzaSyDaZN1KPA8rmhRzfco-SDLUYu7_s63WfNE",
  authDomain: "sharelook-db02a.firebaseapp.com",
  databaseURL: "https://sharelook-db02a.firebaseio.com",
  projectId: "sharelook-db02a",
  storageBucket: "sharelook-db02a.appspot.com",
  messagingSenderId: "177544792444"
};
firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
