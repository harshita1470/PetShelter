document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
});

firebase.auth().onAuthStateChanged((user) => {
    var doc=firebase.firestore().collection("users").doc(user.uid)
    doc.get().then((userdata) => {
           //userdata

           userdata.collection("requestsMade").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
    });
     
    var pet=firebase.firestore().collection("pets")
    pet.where("ownerId", "==", user.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

});
