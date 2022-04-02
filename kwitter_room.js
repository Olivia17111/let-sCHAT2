
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCousOB2Z8g5hDoygvIBKmwz9djhB7E6rQ",
      authDomain: "kwitterwebsite-b85a6.firebaseapp.com",
      projectId: "kwitterwebsite-b85a6",
      storageBucket: "kwitterwebsite-b85a6.appspot.com",
      messagingSenderId: "743485181608",
      appId: "1:743485181608:web:82e0ff4b3f17c3d5aafc9d",
      measurementId: "G-DB559E3CWQ"
    }; 
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 
   
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome " + user_name + "!";
 function addRoom()
 {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose:"Adding room name"
       }) ;
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html" 

       
      

       
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) 
{ console.log(name);
       localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; } 
 
 function logout() { localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
 window.location = "index.html"; }

