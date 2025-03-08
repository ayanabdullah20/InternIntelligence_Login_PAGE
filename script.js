const firebaseConfig = {
    apiKey: "AIzaSyAcq6QbJuS0kAB5OEsinY6J1wjZattOty4",
    authDomain: "login-page-67e68.firebaseapp.com",
    projectId: "login-page-67e68",
    storageBucket: "login-page-67e68.appspot.com",
    messagingSenderId: "855980609859",
    appId: "1:855980609859:web:29b85b36ec99008dd25ff6",
    measurementId: "G-ZJVCQMH9Q4"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function toggleForm() {
    document.getElementById('login-container').classList.toggle('hidden');
    document.getElementById('signup-container').classList.toggle('hidden');
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert('Signup Successful!');
            document.getElementById('signup-email').value = "";
            document.getElementById('signup-password').value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert(error.message);
        });
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Login Successful!');
            document.getElementById('login-email').value = "";
            document.getElementById('login-password').value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert(error.message);
        });
}