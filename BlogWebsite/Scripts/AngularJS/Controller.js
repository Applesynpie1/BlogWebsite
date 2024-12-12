app.controller("BlogWebsiteController", function ($scope, BlogWebsiteService) {
    var userInformation = [];
    $scope.submitFunc = function () {
        $scope.errorMessage = "";

        var alertFname = $scope.fName;
        var alertLname = $scope.lName;
        var alertMname = $scope.mName;
        var alertuAdd = $scope.uAddress;
        var alertuPhone = $scope.uPhone;
        var alertuEmail = $scope.uEmail;
        var alertuserName = $scope.userName;
        var alertuPassword = $scope.uPassword;
        var alertuConfirmPass = $scope.uConfirmPass;

        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var phonePattern = /^[0-9]{11}$/;
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/; // Minimum 8 characters
        var namePattern = /^[a-zA-Z\s]+$/;
        var middleInitialPattern = /^[a-zA-Z]{1,5}$/;
        var addressPattern = /^(?!.*--)(?!.*,,)(?!.*,$)(?!^,)(?!.*\s,$)[A-Za-z0-9\s,.-]+$/;

        var userSearch = userInformation.find(
            ASearch => ASearch.UserEmail === $scope.uEmail || ASearch.Username === $scope.userName
        );

        // Perform validations and set error messages
        if (!alertFname || alertFname.length < 1 || alertFname.length > 50 || !namePattern.test(alertFname)) {
            $scope.errorMessage = "First name is required, should contain only letters and spaces, and be less than 50 characters.";
        } else if (alertMname && (alertMname.length > 5 || !middleInitialPattern.test(alertMname))) {
            $scope.errorMessage = "Middle initials should be 1-5 letters.";
        } else if (!alertLname || alertLname.length < 1 || alertLname.length > 50 || !namePattern.test(alertLname)) {
            $scope.errorMessage = "Last name is required, should contain only letters and spaces, and be less than 50 characters.";
        } else if (!alertuEmail || !emailPattern.test(alertuEmail) || userSearch) {
            $scope.errorMessage = "Enter a valid email address (e.g., example@domain.com) and ensure it is unique.";
        } else if (!alertuserName || alertuserName.length < 3 || alertuserName.length > 20 || !/^[a-zA-Z0-9]+$/.test(alertuserName)) {
            $scope.errorMessage = "Username should be 3-20 characters long and contain only letters and numbers.";
        } else if (!alertuPassword || !passwordPattern.test(alertuPassword)) {
            $scope.errorMessage = "Password must contain at least one uppercase letter, one lowercase letter, one special character, and is at least 8 characters long..";
        } else if (alertuConfirmPass !== alertuPassword) {
            $scope.errorMessage = "Passwords do not match.";
        } else if (!alertuAdd || alertuAdd.length < 1 || alertuAdd.length > 100 || !addressPattern.test(alertuAdd)) {
            $scope.errorMessage = "Address is required, should be less than 100 characters, and contain only letters, numbers, spaces, and commas without consecutive commas or hyphens.";
        } else if (!alertuPhone || !phonePattern.test(alertuPhone)) {
            $scope.errorMessage = "Enter a valid phone number (only numbers, 11 digits only).";
        } else {
            // If all validations pass, clear the error message and proceed with registration
            $scope.errorMessage = "";  // Clear any previous error message
            userInformation.push({
                Firstname: $scope.fName,
                Lastname: $scope.lName,
                Middlename: $scope.mName,
                UserEmail: $scope.uEmail,
                Username: $scope.userName,
                Password: $scope.uPassword,
                UserAddress: $scope.uAddress,
                UserPhone: $scope.uPhone
            });

            sessionStorage.setItem("credentials", JSON.stringify(userInformation));
            alert("Registered successfully. Please login again to continue.");
            window.location.href = "/Home/Login";
        }
    }

    $scope.fetchFunc = function () {
        var getCredentials = sessionStorage.getItem("credentials");
        var jsonCredentials = JSON.parse(getCredentials);
        userInformation = jsonCredentials || [];
    }

    $scope.cancelFunc = function () {
        $scope.fName = null;
        $scope.mName = null;
        $scope.lName = null;
        $scope.userName = null;
        $scope.uEmail = null;
        $scope.uPassword = null;
        $scope.uConfirmPass = null;
        $scope.uAddress = null;
        $scope.uPhone = null;
    }

    $scope.createAccountFunc = function () {
        window.location.href = "/Home/Registration";
    }

    $scope.loginFunc = function () {


        var data = JSON.parse(sessionStorage.getItem("credentials")) || [];

        var storedUser = data.find(userInformation => userInformation.Username === $scope.loginUsername && userInformation.Password === $scope.loginPassword);

        if (storedUser) {

            alert("Login successful! Welcome, " + storedUser.Firstname + ".");
            window.location.href = "/Home/Dashboard";

        } else {

            alert("Invalid Credentials");
        }
    }

    $scope.signinFunc = function () {
        window.location.href = "/Home/Login";
    }
});