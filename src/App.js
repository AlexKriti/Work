import React from 'react';
import Obj from './massive.json';


let catalog = document.querySelector('div.page-of-catalog');
let card = document.querySelector('div.cart-of-the-product');
let basketWrapper = document.querySelector('div.basket-wrapper')
card.style.display = 'none';



function backCard(){
    catalog.style.display = 'none';
    card.style.display = 'block';
}

function addToBasket(){
    basketWrapper.push(
        <div>
            <p class="dash"></p>
                <div class="products">
                    <div class="spec-flexwrap">
                        <a href="#">
                            <div class="product">
                                <img src="images/sorti.png" alt=""/>
                                <div class="description">
                                    <p class="volume">450 мл</p>
                                    <h3>AOS Ср-во для мытья посуды Апельсин+мята</h3>
                                    <p class="regtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. </p>
                                </div>
                                <div class="put-in-cart">
                                    <p class="more-less">1</p>
                                    <p class="cost">48,76 ₸</p>
                                    <button class="delete">
                                        <img src="images/bin.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <p class="dash"></p>
                    <div class="product"></div>
                    <p class="dash"></p>
                    <div class="product"></div>
                </div>
        </div>
    )
}

//onClick={backCard}
function backItem(obj, n) {
    let a = obj;
    let i = n;
    
    let item = (
        <div onClick={backCard} class="item item-catalog">
            <img className='in-catalog' src={obj[n].imageUrl} alt="" />
            <p class="volume">450 мл</p>
            <h5><b>{obj[n].brand}</b> {obj[n].description}</h5>
            <div class="flex-category p20h">
                <p class="category">Штрихкод:</p>
                <p class="in-category">4604049097548</p>
            </div>
            <div class="flex-category">
                <p class="category">Производитель:</p>
                <p class="in-category">Нэфис</p>
            </div>
            <div class="flex-category p30b">
                <p class="category">Бренд:</p>
                <p class="in-category">{obj[n].brand}</p>
            </div>
            <div class="put-in-cart">
                <p class="cost">{obj[n].cost + ' '} ₸</p>
                <button onClick={addToBasket} class="put-in-cart"><p class="in-but">В КОРЗИНУ</p></button>
            </div>
        </div>
    )
    // item.setAttribute('onClick', `${backCard}`)

    return item
}

function repeatBack() {
    let arrayOfItems = [];
    for (let i = 0; i < Obj.length; i++) {
        arrayOfItems.push(backItem(Obj, i));
    }
    return arrayOfItems
}



export default repeatBack();
// export default App;

//проверить работает ли каталог, доделать вставку элементов в каталаог