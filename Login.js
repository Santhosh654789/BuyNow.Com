 function loginUser() {
            let loginEmail = document.getElementById("loginEmail").value;
            let loginPassword = document.getElementById("loginPassword").value;


            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("Login Successful...!!!");
                window.location.href = "index.html";
                return false;
            } else {
                alert("Invalid Email or Password");
                return false;
            }
        }