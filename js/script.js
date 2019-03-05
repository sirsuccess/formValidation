$("document").ready(function () {
    var submitBtn = $("#submit")
    function enable() { // function to enable submit button
        submitBtn.attr("disabled", false)
        submitBtn.css("background-color", " rgb(6, 202, 6)");

    }
    function disable() { // function to disable submit button
        submitBtn.attr("disabled", true);
        submitBtn.css("background-color", "blue")
    }

    var username = $("#userName");
    username.blur(function () {
        disable();
        $(".error").remove(); //remove previous error messages
        let usernameVal = username.val();
        //checking username
        if (usernameVal === "") { //empty username
            disable();
            $(".word").after("<span class='error'>Username can not be empty!</span>");
        }
        else if (usernameVal.length < 7) { //if length of username is less than 7 is should throw error
            disable();
            $(".word").after("<span class='error'>Username can not be less than 6 character</span>");

        }
        else {
            $(".fa-user").css("background-color", " rgb(6, 202, 6)")
            // enable();
        }

    });

    //checking Age
    var age = $("#age");
    age.blur(function () {
        disable();
        $(".error").remove(); //remove previous error messages
        var ageVal = age.val();
        if (ageVal === "") { //empty age
            disable();
            $(".word1").after("<span class='error'>Age field can not be empty!</span>");
        }
        else if (ageVal < 18) { //if age is less than 18 is should throw error
            disable();
            $(".word1").after("<span class='error' >Oop! you must be older than 17 years to apply");

        }
        else {
            $(".fa-male").css("background-color", " rgb(6, 202, 6)")
            // enable();
        }
    });


    //checking password
    var password = $("#password");

    password.blur(() => {
        disable();
        $(".error").remove(); //remove previous error messages
        var passwordVal = password.val();
        if (passwordVal === "") { // empty password
            disable();
            $(".word2").after("<span class='error'>Password can not be empty!</span>");
        }
        else if (passwordVal.length < 8) { //if length of password is less than 8 is should throw error
            disable();
            $(".word2").after("<span class='error'>Password can not be less than 8 character</span>");
        }
        else {
            $(".pass").css("background-color", " rgb(6, 202, 6)")
            // enable();
        }
    })

    // comfirmed password

    var comfirmedPassword = $("#comfirmedPassword");

    comfirmedPassword.blur(function () {
        let passwordVal = $("#password").val();
        let comfirmedPasswordVal = comfirmedPassword.val();
        $(".error").remove(); //remove previous error messages

        if (comfirmedPasswordVal === "") { // empty password
            disable();
            $(".word3").after("<span class='error'>Match Password can not be empty!</span>");
        }
        else if (comfirmedPasswordVal != passwordVal) { //checking password and comfirmed password
            disable();
            $(".word3").after("<span class='error'>Your Passwords Must Match!</span>");
        }
        else {
            enable();
            $(".pass1").css("background-color", " rgb(6, 202, 6)");
            // submitBtn.css("background-color", " rgb(6, 202, 6)");
        }
    })

    //Enabling the Submit button
    let usernameVal = username.val();
    var ageVal = age.val();
    var passwordVal = password.val();
    let comfirmedPasswordVal = comfirmedPassword.val();
    if (usernameVal.length > 6 && ageVal > 17 && passwordVal.length > 7 && comfirmedPasswordVal === passwordVal) {

        enable();
    }

});