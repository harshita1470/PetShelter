function logout(){
    firebase.auth().signOut()
    location.replace("welcome.html")
}