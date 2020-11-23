
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function toProfilePage() {
    window.location.href = "personal_homepage.html";
}
function toSchedulePage() {
    window.location.href = "schedule.html";
}

function toHomePage() {
    window.location.href = "index.html";
}

function signIn() {
    let userEmail = document.getElementById("email-field").value;
    let userPass = document.getElementById("password-field").value;
    login(userEmail, userPass);
}

function login(userEmail, userPass) {
    let isLoggedIn = true;
    if (userEmail && userPass) {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode) {
                document.getElementById("errorMessage").innerHTML = errorMessage;
                console.log("Failed to login");
                isLoggedIn = false;
            }
        });
    }
    setTimeout(function () {
        if (isLoggedIn) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    toProfilePage();
                }
            });
        }
    }, 500);
}

function signUp() {
    let fn = document.getElementById("fn-user").value;
    let ln = document.getElementById("ln-user").value;
    let email = document.getElementById("email-user").value;
    let pw = document.getElementById("pass-user").value;
    let cfpw = document.getElementById("pass-cf-user").value;
    let userUID = ""
    let userName = fn + ln;

    if (email && pw && cfpw && userName) {
        if (!isBcitEmail(email)) {
            // Please use the BCIT email (my.bcit.ca).
            document.getElementById("emailError").innerHTML = "Please use the BCIT email (my.bcit.ca)."
        } else if (pw != cfpw) {
            // The password does not match.
            document.getElementById("passConfirmError").innerHTML = "The password does not match."

        } else {
            firebase.auth().createUserWithEmailAndPassword(email, pw)
                .then(function (data) {
                    userUID = data.user.uid;
                    addUserToJson(userName, email, userUID);
                    login(email, pw);
                    console.log(userUID);
                    toSchedulePage();
                    //Here if you want you can sign in the user
                }).catch(function (error) {
                    //Handle error
                });
        }
    } else {
        // Please fill in the blanks.
    }
}



$(document).ready(function () {
    $("#login-btn").addClass("active");
    $("#signup").hide();
    $("#signup").removeClass("active");
    $("#login-btn").click(function () {
        $("#signup").hide();
        $("#signin").show();
        $("#signup-btn").removeClass("active");
        $("#login-btn").addClass("active");
    });

    $("#signup-btn").click(function () {
        $("#signin").hide();
        $("#signup").show();
        $("#login-btn").removeClass("active");
        $("#signup-btn").addClass("active");
    });
});

$('login-btn').click(function () {
    $(this).addClass('makebuttonsgrey');
});

function isBcitEmail(email) {
    let re = /\w+[@]my[.]bcit[.]ca/;

    if (re.exec(email) != null) {
        return true;
    } else {
        return false;
    }
}

function addUserToJson(userName, email, uid) {

    let ref = firebase.database().ref("users");
    ref.update({
        [uid]: {
            name: userName,
            email: email,
        }
    });
}