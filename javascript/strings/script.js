let userInfoOutput = document.getElementById("main");

let user = {
    firstName: "Erikas",
    lastName: "Zilinskas"
};

userInfoOutput.innerHTML = `<h2>User information</h2>
<p>User name is ${user.firstName}, and surname ${user.lastName}.</p>`;