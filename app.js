// console.log(firebase)

let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          
        });
   window.open('./signin.html')
}

let signin = () =>
{
    var email = document.getElementById('s-email').value
    var password = document.getElementById('s-password').value
    // console.log(email)
    // console.log(password)

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((data) => {
    // var user = userCredential.user;
    console.log(data)
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
  window.open('./welcome.html')
}
