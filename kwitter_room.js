// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAL0OMi1CMKpqORiJozMNETInEEmFYZxOs",
    authDomain: "project-c94-d9c5d.firebaseapp.com",
    databaseURL: "https://project-c94-d9c5d-default-rtdb.firebaseio.com",
    projectId: "project-c94-d9c5d",
    storageBucket: "project-c94-d9c5d.appspot.com",
    messagingSenderId: "563152523934",
    appId: "1:563152523934:web:e073e8b819687b123ae18f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
