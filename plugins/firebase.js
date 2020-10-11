import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCW9oLUxKcyLdxcKElmdpPEvjBPrLc8ubU",
    authDomain: "takechi-firebase-login.firebaseapp.com",
    databaseURL: "https://takechi-firebase-login.firebaseio.com",
    projectId: "takechi-firebase-login",
    storageBucket: "takechi-firebase-login.appspot.com",
    messagingSenderId: "12006975675",
    appId: "1:12006975675:web:45d2e8c79cbe5f914ae19e",
    measurementId: "G-9PWDEXX67J"
  })
}

export default firebase
