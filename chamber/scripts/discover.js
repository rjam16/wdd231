const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const visitMsg = document.querySelector('#visits p');
const msToDays = 86400000;
if (localStorage.lastVisit) {
    const currentDate = Date.now();
    let lastVisit = localStorage.lastVisit;
    const numDays = (currentDate - lastVisit) / msToDays;
    if (numDays < 1) {
        visitMsg.innerHTML = "Back so soon? Great!"
    } else if (numDays.toFixed(0) == 1) {
        visitMsg.innerHTML = `You last visited 1 day ago.`
    } else {
        visitMsg.innerHTML = `You last visited ${numDays.toFixed(0)} days ago.`
    }
} else {
    visitMsg.innerHTML = "Welcome! Let us know about your experience!"
}
localStorage.setItem("lastVisit", Date.now());