document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

const confirmationR;

function phoneAuth() {
    const phoneNumber = document.getElementById("phone");
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      confirmationR =  window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
}
function signup() {
    const code = document.getElementById("code");
    confirmationR.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const name=document.getElementById("name").value
    firebase.auth().createUserWithEmailAndPassword(email, password). then((cred) => {
        return firebase.firestore().collection("users").doc(cred.user.uid).set({
            email:email,
            password:password,
            name:name
        })
        .then((docRef) => {
            alert("Signup successful")
        })
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
    })
    .then(() => {
        location.replace("home.html")
    })
    .catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
    });
}
