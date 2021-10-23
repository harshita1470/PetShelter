const database = firebase.firestore()
function sendMail(head) {
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html")
        }else{
           database.collection("pets").doc(head.uid).get().then(snapshot => {
               database.collection("users").doc(head.owner).collection("uploads").add({
                  requestId:user.uid,
                  phone:user.phone,
                  petId:head.uid
               })
            });
        }
    });
}
