document.getElementById("forgotForm").addEventListener("submit", (e)=>{

    e.preventDefault();

    let email = document.getElementById("email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid registered email");

    } else {

        alert("OTP sent successfully");

        window.location.href = "./getotp.html";

    }

});
