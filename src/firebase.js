import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBA-1DBjWWJqEaa5Q4ARQ9bVvbfyV_tA-A",
    authDomain: "slack-challenge-f5ef5.firebaseapp.com",
    projectId: "slack-challenge-f5ef5",
    storageBucket: "slack-challenge-f5ef5.appspot.com",
    messagingSenderId: "168999889265",
    appId: "1:168999889265:web:53c9acc1215a202a98eed0"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db