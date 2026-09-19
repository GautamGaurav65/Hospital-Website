// ===============================
// PATIENT REVIEW SLIDER
// ===============================

let slide = document.querySelectorAll(".patientReview");

let card = document.querySelectorAll(".card");

let closeBtn = document.getElementById("closeBtn");

let connectBtn = document.getElementById("connectBtn");

let count = 0;


// Set each slide position
slide.forEach(function (slides, index) {

    slides.style.left = `${index * 100}%`;

});


// Slider function
function myFun() {

    slide.forEach(function (curVal) {

        curVal.style.transform =
            `translateX(-${count * 100}%)`;

    });

}


// Automatic slider
setInterval(function () {

    count++;

    if (count == slide.length) {
        count = 0;
    }

    myFun();

}, 2000);


// ===============================
// DOCTOR CARD POPUP
// ===============================

card.forEach(function (cards) {

    cards.addEventListener("click", function () {

        console.log(cards);

        document.querySelector(".detail").style.display = "flex";

        document.querySelector(".content").innerHTML = `
            
            <img src="${cards.firstElementChild.src}" alt="Doctor">

            <div class="contentText">

                <h1>Alexa Zoan</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Commodi ex accusantium
                    eius magnam, esse repellat veritatis,
                    consectetur aut perspiciatis dolor labore
                    sapiente.
                </p>

            </div>

        `;

    });

});


// ===============================
// CLOSE POPUP
// ===============================

closeBtn.addEventListener("click", function () {

    document.querySelector(".detail").style.display = "none";

});


// ===============================
// CONTACT / LOGIN
// ===============================

connectBtn.addEventListener("click", function () {

    let email = document.getElementById("email");

    let pass = document.getElementById("pass");


    if (email.value == "" || pass.value == "") {

        alert("Enter Details");

    } else {

        alert("You Logged IN");

    }

});