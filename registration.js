document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

function register() {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            const name=getElementById("name");
            const description=getElementById("description")
            firebase.firestore().collection("pets").add({
                name:name,
                desc:description,
                owner:user.uid
            })
        }
        else {
        }
    })
    .catch((error) => {
    

    });
}
