import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBopSG0u-7VuXTwEwhSI8LpHFhIN8Wa8aI",
    authDomain: "reactjs-create-recipe.firebaseapp.com",
    databaseURL: "https://reactjs-create-recipe.firebaseio.com",
    projectId: "reactjs-create-recipe",
    storageBucket: "reactjs-create-recipe.appspot.com",
    messagingSenderId: "621066178368"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }