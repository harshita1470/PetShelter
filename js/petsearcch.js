document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
});

firebase.auth().onAuthStateChanged((user) => {
    if(!user){
        location.replace("index.html")
    }
    else {
        firebase.firestore()
    }
});

