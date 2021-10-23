const database = firebase.firestore()
function sendMail(head) {
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }else{
            database.collection("pets").doc(head.uid).collection("requests").add({
                  requestId:user.uid
            });
            database.collection("users").doc(user.uid).collection("requestsMade").add({
                petId:head.uid
            });
        }
    });
}
