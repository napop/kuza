firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
        window.location = "/index.html";
  } else {
    // No user is signed in.
  }
});
