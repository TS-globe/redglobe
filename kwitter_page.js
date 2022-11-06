//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCPMnAY0rdyuXdyyzIEbkLHT2EPkhhXgrc",
      authDomain: "redglobe-database.firebaseapp.com",
      databaseURL: "https://redglobe-database-default-rtdb.firebaseio.com",
      projectId: "redglobe-database",
      storageBucket: "redglobe-database.appspot.com",
      messagingSenderId: "1638043135",
      appId: "1:1638043135:web:a17badecf495a73c8dabca",
      measurementId: "G-DB95J562FE"
    };
    firebase.initializeApp(firebaseConfig);
    romname = localStorage.getItem("Th");
    function send()
    {
          firebase.database().ref(romname).push(
                {
                      msg : document.getElementById("tp").value,
                      msgsender : localStorage.getItem("username"),
                      like : 0
                }
          )
          document.getElementById("tp").value="";
    }
    
    
function getData() { firebase.database().ref("/"+romname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 sender = message_data.msgsender;
  like = message_data.like;
  msg = message_data.msg;
console.log(sender);
console.log(like);
console.log(msg);

  document.getElementById("output").innerHTML+="<div><h1>"+ sender +"</h1><br><p class='messageh4'>"+ msg +"</p><br><button onclick='like1(this.id)' id="+firebase_message_id+">"+ like +"</button></div>"
//End code
      } });  }); }
getData();


document.getElementById("roomname").innerHTML=romname;

function like1(msg_id) 
{
      msg_like = document.getElementById(msg_id).value;
      msg_like = Number(msg_like);
      msg_like = msg_like + 1;
      firebase.database().ref(romname).child(msg_id).update(
            {
                  like: msg_like
            }
      )
}