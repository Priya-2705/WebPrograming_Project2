
  function validateForm() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var birthDate = document.getElementById("birthdate").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var region = document.getElementById("region").value;
    var postalCode = document.getElementById("postalCode").value;

    if (fullName == "" || email == "" || phoneNumber == "" || birthDate == "" || address == "" || city == "" || region == "" || postalCode == "") {
      alert("Please fill in all fields");
      return false;
    }

    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits long");
      return false;
    }

    if (isNaN(phoneNumber)) {
      alert("Phone number must contain only numbers");
      return false;
    }

        return true;
  }

