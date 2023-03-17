'use strict'
let body = document.querySelector('body');
let form = document.querySelector('form');
let input = document.querySelector('input#text');
let pRed = document.querySelector('p#one');
let pRed2 = document.querySelector('p#two');
let pRed3 = document.querySelector('p#three');


function createLi(obj, string) {
    let ul = document.querySelector('ul');
    for (let i = 0; i < 10; i++) {
        if (obj[i] == undefined) {
            break;
        }
        let li = document.createElement('li.item');
        let a1 = document.createElement('a');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        a1.setAttribute('href', `${obj[i].clone_url}`);
        a1.setAttribute('target', '_blank')
        a1.innerText = `Name of repository : ${obj[i].name}`;
        p1.innerText = `Login of the Owner : ${obj[i].owner.login}`;
        p2.innerText = `Forks : ${obj[i].forks}`;
        li.style.display = 'flex';
        li.style.flexDirection = 'column';
        li.style.border = '0.5px solid rgb(255, 119, 119)';
        li.style.padding = '20px 0 20px 20px'
        p1.style.margin = '20px 0'
        li.appendChild(a1);
        li.appendChild(p1);
        li.appendChild(p2);
        ul.appendChild(li);
    }

}

form.addEventListener('submit', () => {
    let ul = document.querySelector('ul');
    if (ul.hasChildNodes()) {
        for (let child of ul.childNodes) {
            child.style.display = 'none'
        }
    }
    let searchString = input.value;
    if (searchString.length < 3) {
        pRed3.style.display = 'none';
        pRed2.style.display = 'none'
        pRed.style.display = 'block';
        return;
    } else {
        pRed.style.display = 'none';
    }
    pRed.style.display = 'none';
    pRed2.style.display = 'none';
    pRed3.style.display = 'none';
    fetch(`https://api.github.com/search/repositories?q=${searchString}`)
        .then(response => response.json())
        .then(data => {
            let number = data.total_count;
            if (data == false) {
                pRed2.style.display = 'block';
                pRed.style.display = 'none';
                pRed3.style.display = 'none';
                return;
            } else { pRed2.style.display = 'none'; }
            if (number == 0) {
                pRed.style.display = 'none';
                pRed2.style.display = 'none';
                pRed3.style.display = 'block';
                return;
            } else {
                pRed.style.display = 'none';
                pRed2.style.display = 'none';
                pRed3.style.display = 'none';
                createLi(data.items, searchString);
            }
        })
});

input.addEventListener('click', () => {
    input.value = ''
})

