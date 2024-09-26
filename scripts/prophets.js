const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthday = document.createElement('p');
        let place = document.createElement('p');
        let portrait = document.createElemtent('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthday.textContent = `<strong>Date of Birth:</strong> ${prophet.birthdate}`;
        place.textContent = `<strong>Place of Birth:</strong> ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.image.url);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthday);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}