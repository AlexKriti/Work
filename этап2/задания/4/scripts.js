'use strict'

function createLi(elem, name, text, date) {
    
    let hours = new Date().toLocaleTimeString().slice(0, -3);
    let day = new Date().toLocaleDateString();
    let secondDay = new Date().toLocaleDateString();
    let firstDayToday = +secondDay.slice(0, -8);
    let choseDate = transformDate(date);
    let firstdayDate = +choseDate.slice(0, -8);
    let firstImg = document.createElement("img");
    let secondImg = document.createElement("img");
    let thirdImg = document.createElement("img");
    let div = document.createElement('div.images');
    let pDate = document.createElement('p.date');
    if (choseDate == day || date == '') {
        pDate.innerText = `Сегодня , ${hours}`;
    } else if (day.slice(3, day.length) == choseDate.slice(3, choseDate.length)) {
        if (firstdayDate + 1 == firstDayToday) {
            pDate.innerText = `Вчера , ${hours}`;
        } else {
            pDate.innerText = `${choseDate} , ${hours}`;
        }
    } else if (date == true) {
        pDate.innerText = `${choseDate} , ${hours}`;
    }
    firstImg.setAttribute('src', 'images/blackHeart.png');
    secondImg.setAttribute('src', 'images/bin.png');
    thirdImg.setAttribute('src', 'images/redHeart.png');
    secondImg.style.marginLeft = '10px'
    thirdImg.style.display = 'none'
    firstImg.addEventListener('click', () => {
        firstImg.style.display = 'none';
        thirdImg.style.display = 'inline';
    });
    thirdImg.addEventListener('click', () => {
        thirdImg.style.display = 'none';
        firstImg.style.display = 'inline';
    });
    secondImg.addEventListener('click', () => {
        elem.style.display = 'none';
        return elem;
    })
    let today = new Date().toLocaleDateString();
    let days = +today.substring(0, 2)
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let pTime = document.createElement('p.time');
    h4.innerText = name;
    h4.style.paddingBottom = '17px';
    p.innerText = text;
    p.style.paddingBottom = '17px';
    p.style.maxWidth = '700px';
    div.style.display = 'block';
    h4.style.borderTop = '0.5px solid rgb(54, 114, 167)';
    div.style.borderBottom = '0.5px solid rgb(54, 114, 167)';
    elem.appendChild(h4);
    elem.appendChild(p);
    elem.appendChild(pDate);
    div.appendChild(firstImg);
    div.appendChild(thirdImg);
    div.appendChild(secondImg);
    elem.appendChild(div)
    return elem;
}

let form = document.querySelector('form');
let username = document.querySelector('input.name');
let text = document.querySelector('input.text');
let date = document.querySelector('input.date');
let inputArr=[username, date, text];
let specialP = document.querySelector('p#one')
let errortwo = document.querySelector('p#two');
let ul = document.querySelector('ul');
username.addEventListener('click', () => {
    specialP.style.display = 'none';
});

text.addEventListener('click', () => {
    errortwo.style.display = 'none';
});





console.log(username.value.length)
form.addEventListener('submit', () => {
    if (username.value.length < 4 && text.value == false) {
        specialP.style.display = 'block';
        errortwo.style.display = 'block';
    } else if (username.value.length < 4) {
        specialP.style.display = 'block';
        errortwo.style.display = 'none';
    } else if (text.value == false) {
        specialP.style.display = 'none';
        errortwo.style.display = 'block';
    }else {
        specialP.style.display = 'none';
        errortwo.style.display = 'none';
        let li = document.createElement('li');
        ul.appendChild(createLi(li, username.value, text.value, date.value));
        username.value = '';
        text.value = '';
    }

})

function transformDate(date) {
    let arrayDate = date.split('');
    let newData = [];
    newData.push(arrayDate[arrayDate.length - 2]);
    newData.push(arrayDate[arrayDate.length - 1]);
    newData.push('.');
    newData.push(arrayDate[arrayDate.length - 5]);
    newData.push(arrayDate[arrayDate.length - 4]);
    newData.push('.');
    newData.push(arrayDate[0]);
    newData.push(arrayDate[1]);
    newData.push(arrayDate[2]);
    newData.push(arrayDate[3]);
    let newDataString = newData.join('');
    return newDataString;
}

