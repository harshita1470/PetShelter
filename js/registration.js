document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function register() {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            const name=getElementById("name").value
            const age=getElementById("age").value
            const breed=getElementById("breed").value
            const weight=getElementById("weight").value
            const description=getElementById("description").value
            firebase.firestore().collection("pets").add({
                name:name,
                description:description,
                owner:user.uid,
                age:age,
                breed:breed,
                weight:weight
            })
        }
        else {
        }
    })
    .catch((error) => {
    

    });
}
