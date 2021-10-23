document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
});

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( () => {
        location.replace("home.html")
    })
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    });
}