 function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let mobile = document.getElementById("mobile").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let mobilePattern = /^[0-9]{10}$/;

            if (name === "") {
                alert("Please enter your full name");
                return false;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return false;
            }

            if (!mobilePattern.test(mobile)) {
                alert("Mobile number must be 10 digits");
                return false;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return false;
            }

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Registration Successful!");
            window.location.href = "login.html";
            return false;
        }