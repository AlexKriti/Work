import React, { useState } from 'react';
import Obj from './massive.json';
import ReactDOM from 'react-dom/client';
let main = document.querySelector('main');
const mainRoot = ReactDOM.createRoot(main);
// let inputArr = document.querySelectorAll('form.dark-form input.need-to-check');
let basketWrapper = document.querySelector('div.basket-wrapper');
const basketWrapperRoot = ReactDOM.createRoot(basketWrapper);
let catalog = document.querySelector('div.page-of-catalog');
let basketStorage = [];
let basketInvis = document.querySelector('div.basket-invis');
let card = document.querySelector('div.cart-of-the-product');

let flexLi = document.querySelector('header li.flex');
let imgCart = document.querySelector('img.need-to-back-cart');
flexLi.addEventListener('click', basketFunc);
imgCart.addEventListener('click', basketFunc);

function basketFunc() {
    let cartOfTheProduct = document.querySelector('div.cart-of-the-product');
    catalog.style.display = 'none';
    cartOfTheProduct.style.display = 'none';
    basketInvis.style.display = 'block'
}

function RepeatBack() {
    

    let arrayOfItems = [];
    for (let i = 0; i < Obj.length; i++) {
        arrayOfItems.push(BackItem(Obj, i));
    }
    return arrayOfItems;
}



function BackItem(obj, n) {
    // let pMorLesss = 1;
    // const [likes, setLikes] = useState(likes);
    
    
    // function getLess(){
    //     setLikes(likes - 1)
    // }
    // function getMore(){
    //     setLikes(likes + 1)
    // }
    function addToBasket() {
        let string = 'images/' + obj[n].typeOfSize + '.svg';
        let itemSelf = (
            <div className='one-basket-product'>
                <p class="dash"></p>
                <div class="products">
                    <div class="spec-flexwrap">
                        <a href="#">
                            <div id={obj[n].id} class="product">
                                <img onClick={backCard} className='mainImage' src={obj[n].imageUrl} alt="" />
                                <div onClick={backCard} class="description">
                                    <div className='decs-wrap'>
                                        <img src={string} />
                                        <p class="volume">{obj[n].amountOfSize}</p>
                                    </div>
                                    <h3>{obj[n].brand + ' '} {obj[n].nameOfProduct}</h3>
                                    <p class="regtext">{obj[n].description} </p>
                                </div>
                                <div class="put-in-cart">
                                    <div onClick={backCard} class="more-less-but">
                                        <button  class="less">-</button>
                                        <p class="more-less">1</p>
                                        <button  class="more">+</button>
                                    </div>
                                    <p onClick={backCard} class="cost">{obj[n].cost} ₸</p>
                                    <button id={obj[n].id} onClick={deleteFunc} class="delete">
                                        <img src="images/bin.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
            console.log('working right now')
        // Вместо этого вызовите root.render() для существующего корня, если вы хотите его обновить.
        function deleteFunc() {
            let divId = document.querySelector(`div#${obj[n].id}`);
            divId.style.display = 'none'

        }
        basketStorage.push(itemSelf)
        return basketWrapperRoot.render(
            basketStorage
        )
    }






    function backCard() {
        console.log('Work!');

        let string = 'images/' + obj[n].typeOfSize + '.svg';
        let mainCard = (
            <div>
                <div class="container cart-of-the-product">
                    <div class="way">
                        <p class="way">Главная</p>
                        <p class="dash"></p>
                        <p class="way">Косметика и гигиена</p>
                        <p class="dash"></p>
                        <p class="way">Уход за руками</p>
                        <p class="dash"></p>
                        <p class="way">Мыло твердое</p>
                        <p class="dash"></p>
                        <p class="way-name">BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</p>
                    </div>
                    <div class="about">
                        <div class="image">
                            <img src="images/soap.png" alt="" />
                            <img className='non-visible' src='images/littlesoap.png'></img>
                        </div>
                        <div class="moreInf">
                            <p class="have">В наличии</p>
                            <h2 class="name"><b>{obj[n].brand + ' '}</b>{obj[n].nameOfProduct}</h2>
                            <div class="weight">
                                <img src={string} alt="" />
                                <p class="weight">{obj[n].amountOfSize}</p>
                            </div>
                            <div class="put-in-cart">
                                <p class="cost">{obj[n].cost} ₸</p>
                                <div class="more-less-but">
                                    <button class="less">-</button>
                                    <p class="more-less">1</p>
                                    <button  class="more">+</button>
                                </div>
                                <button onClick={addToBasket} class="bck-yellow-three">
                                    <p>В корзину</p>
                                </button>
                            </div>
                            <div class="share">
                                <a href="#"><img src="images/share.svg" alt="" /></a>
                                <p class="free-delivery">При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
                                </p>
                                <div class="list-inside"><a href="#" class="list">Прайс-лист</a></div>
                            </div>
                            <div class="more-about">
                                <div class="flex-category">
                                    <p class="category">Производитель:</p>
                                    <p class="in-category">{obj[n].production}</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Бренд:</p>
                                    <p class="in-category">{obj[n].brand}</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Артикул:</p>
                                    <p class="in-category">{obj[n].article}</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Кол-во в коробке:</p>
                                    <p class="in-category">2</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Штрихкод:</p>
                                    <p class="in-category">{obj[n].barcode}</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Размеры коробки<sub>(Д*Ш*В)</sub>:</p>
                                    <p class="in-category">10х10х10</p>
                                </div>
                                <div class="flex-category">
                                    <p class="category">Вес коробки:</p>
                                    <p class="in-category">1020 г</p>
                                </div>
                            </div>
                            <div class="description">
                                <button class="description"><p>Описание</p> <img class="closed" src="images/triangle.svg" alt="" /><img class="open" src="images/opentriangle.svg" alt="" /> </button>
                                <p class="desc-invis">{obj[n].description}</p>
                            </div>
                            <div class="hor-border"></div>
                            <div class="charact">
                                <button class="charact">
                                    <p>Характеристики</p> <img class="closed" src="images/triangle.svg" alt="" /><img
                                        class="open" src="images/opentriangle.svg" alt="" />
                                </button>
                                <div class="char-invis">
                                    <div class="flex-category">
                                        <p class="category">Название:</p>
                                        <p class="in-category">{obj[n].description}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Тип:</p>
                                        <p class="in-category">{obj[n].kinOofProduct + ' '} {obj[n].kinOofProductBody}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Производитель:</p>
                                        <p class="in-category">{obj[n].production}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Бренд:</p>
                                        <p class="in-category">{obj[n].brand}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Артикул:</p>
                                        <p class="in-category">{obj[n].article}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Штрихкод:</p>
                                        <p class="in-category">{obj[n].barcode}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Вес/Объем:</p>
                                        <p class="in-category">{obj[n].amountOfSize}</p>
                                    </div>
                                    <div class="flex-category">
                                        <p class="category">Кол-во в коробке:</p>
                                        <p class="in-category">2 шт</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        //
        // let AllIn = (mainCard, basketInvis)








        card.style.display = 'block';



        return mainRoot.render(
            mainCard
        );

    }

    let item = (
        <div class="item item-catalog">
            <img onClick={backCard} className='in-catalog' src={obj[n].imageUrl} alt="" />
            <p onClick={backCard} class="volume">450 мл</p>
            <h5 onClick={backCard}><b>{obj[n].brand}</b> {obj[n].nameOfProduct}</h5>
            <div onClick={backCard} class="flex-category p20h">
                <p class="category">Штрихкод:</p>
                <p class="in-category">4604049097548</p>
            </div>
            <div onClick={backCard} class="flex-category">
                <p class="category">Производитель:</p>
                <p class="in-category">Нэфис</p>
            </div>
            <div onClick={backCard} class="flex-category p30b">
                <p class="category">Бренд:</p>
                <p class="in-category  the-brand">{obj[n].brand}</p>
            </div>
            <div class="put-in-cart">
                <p onClick={backCard} class="cost">{obj[n].cost + ' '} ₸</p>
                <button onClick={addToBasket} class="put-in-cart"><p class="in-but">В КОРЗИНУ</p></button>
            </div>
        </div>
    )
    
    return item
}



export default RepeatBack();



// export default App;

//проверить работает ли каталог, доделать вставку элементов в каталаог