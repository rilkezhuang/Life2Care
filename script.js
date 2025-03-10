// Firebase Configuration (Add your own Firebase details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => alert("Login Successful!"))
        .catch(error => alert("Error: " + error.message));
}

// Chatbot
function handleChat(event) {
    if (event.key === "Enter") {
        const userText = event.target.value;
        const chatbox = document.getElementById("chatbox");
        chatbox.innerHTML += `<p>You: ${userText}</p>`;
        setTimeout(() => {
            chatbox.innerHTML += `<p>Bot: I'll get back to you soon!</p>`;
        }, 1000);
        event.target.value = "";
    }
}

// Appointment Booking
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Appointment Booked Successfully!");
});
