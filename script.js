const firebaseConfig = {
    //your firebase config
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