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

const currentURL = window.location.href;
const allData = currentURL.split('?');
let formData = allData[1].split('&');

function display(field) {
    let result = '';
    formData.forEach ((item) => {
        if (item.startsWith(field)) {
            result = item.split('=')[1].replace('%40', '@').replace('%27', '\'').replace('+',' ');
        }
    })
    if (field === 'timestamp') {
        const datObj = new Date(parseInt(result));
        const year = dateObj.getFullYear();
        const month = dateObj.getMonthj() + 1;
        const day = dateObj.getDate();
        const hours = dateObj.detHours() % 12;
        let minutes = dateObj.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (dateObj.getHours() > 12) {
            minutes = minutes + 'pm';
        } else {
            minutes = minutes + 'am'
        }
        result = `${year}/${month}/${day} at ${hours}:${minutes}`
    }
    return result
}

const results = document.querySelector('#results');
results.innerHTML = 
`<p>${display('first')} ${display('last')}, we're excited you've joined us!</p>
<br>
<h4>Confirmation of Details:</h4>
<p>Your Phone: ${display('phone')}</p>
<p>Your Email: <a href=mailto:"${display('email')}">${display('email')}</a></p>
<br>
<p>Organization Name: ${display('busName')}</p>
<p>Membership Level: ${display('membership')}</p>
<br>
<p>${display('timestamp')}</p>`;