document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

const confirmationR;

function phoneAuth() {
    const phoneNumber = document.getElementById("phone").value
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
    const confpassword=document.getElementById("confpassword").value
    const name=document.getElementById("name").value
    const address=document.getElementById("address").value

    if(password!=confpassword) {
        document.getElementById("error").innerHTML=`<div>Passworf and Confrim Password are different. Kindly enter same Password!</div>`
        return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password). then((cred) => {
        return firebase.firestore().collection("users").doc(cred.user.uid).set({
            email:email,
            password:password,
            name:name,
            address:address,
            phone:phone
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
