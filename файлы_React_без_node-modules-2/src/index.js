import App from './App.js';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.querySelector('div#root'));
// let basketInvis = document.querySelector('div.basket-invis');



Rendering(App);
function Rendering(a) {
    if (a) {
        root.render(
            a
        );
    }

}

let ItemCatArr = document.querySelectorAll('div.item-catalog');
console.log(ItemCatArr)
// let basketArr = document.querySelectorAll('div.one-basket-product');
// let delArr = document.querySelectorAll('button.delete');
// console.log(basketArr)
// for(let i = 0; i<delArr.length; i++){
//     delArr[i].addEventListener('click', ()=>{
//         console.log('Work!')
//         basketArr[i].style.display = 'none';
//     })
// }
//checked != true

//Вот тут, в слушателе инпута
