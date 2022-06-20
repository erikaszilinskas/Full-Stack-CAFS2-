document.addEventListener("DOMContentLoaded", function (event) {
    carousel();
    startTime();
    form.addEventListener('submit', logSubmit);
});


// https://stackoverflow.com/questions/50375384/how-can-i-change-the-imageslider-one-by-one-every-3-seconds-in-javascript
let sliderIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > x.length) { sliderIndex = 1 }
    x[sliderIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}



// https://stackoverflow.com/questions/50438363/show-real-time-clock-on-html-using-javascript
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}




const form = document.getElementById('form');
const msg = document.getElementById('message');
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const address = document.getElementById("address");
const email = document.getElementById("email");

function logSubmit(event) {
    event.preventDefault();
    if (fName.value == "" || lName.value == "") {
        msg.textContent = "First name or Last name is required !";
        msg.style.background = 'red';
        return false;
    }
    if (address.value == "" || email.value == "") {
        msg.textContent = "Address or Email is required !";
        msg.style.background = 'red';
        return false;
    }

    msg.textContent = "Form submitted successful !";
    msg.style.background = 'green';
}






