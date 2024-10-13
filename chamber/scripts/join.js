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

import {membershipLevels} from "../data/membership.js";

const options = document.querySelector('#memberOptions');
const dialogBox = document.querySelector('#dialog h3');
const closeButton = document.querySelector('#dialog button');
const benefits = document.querySelector('#dialog ul');
const price = document.querySelector('#price');

function displayMemberships(data) {
    data.forEach(x => {
        const membershipLabel = document.createElement('label');
        membershipLabel.innerHTML = `<input type="radio" name="membership" required title="${x.level}" value="${x.level}"> ${x.level} <span id="${x.id}"><sup>ⓘ</sup></span>`;
        options.appendChild(membershipLabel);
        const infoIcon = document.getElementById(`${x.id}`);
        infoIcon.addEventListener('click', () =>
            showDetails(x));
        })
        closeButton.addEventListener('click', () => dialogBox.closest());
}

function showDetails(x) {
    title.innerHTML = `${x.level}`;
    benefits.innerHTML = "";
    x.benefits.forEach(b => {
        const benefit = document.createElement('li');
        benefit.innerHTML = b;
        benefits.appendChild(benefit);
    })
    price.innerHTML = `<strong>Price: </strong>${x.price}`;
    dialogBox.showModal();
    dialogBox.addEventListener('click', dismiss);
}
displayMemberships(membershipLevels);

const dismiss = ({target:dialogBox}) => {
    if (dialogBox.nodeName === 'DIALOG')
        dialogBox.close('dismiss')
}

const timestamp = document.querySelector('#timestamp');
timestamp.value = Date.now();