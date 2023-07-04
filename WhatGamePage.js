const firebaseConfig = {
    apiKey: "AIzaSyDGkQPY1jZE-_NHovhse6p5wY-aqY2K44M",
    authDomain: "whatgame-bdbf9.firebaseapp.com",
    databaseURL: "https://whatgame-bdbf9-default-rtdb.firebaseio.com",
    projectId: "whatgame-bdbf9",
    storageBucket: "whatgame-bdbf9.appspot.com",
    messagingSenderId: "90514574754",
    appId: "1:90514574754:web:d02804972476785467b6fb"
};
firebase.initializeApp(firebaseConfig)
function enviar(){
 msg=document.getElementById("mensage").value;
   
}
function getData() {
    firebase.database().ref("/room" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código

                //Fim do código
            }
        });
    });
}
getData();



function logout() {
    localStorage.removeItem("localsecreto");
    localStorage.removeItem("localMisterioso");
    window.location = ("index.html")
}