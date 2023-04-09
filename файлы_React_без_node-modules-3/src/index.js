import App from './App.js';
import ReactDOM from 'react-dom/client';
import Obj from './massive.json';


const root = ReactDOM.createRoot(document.querySelector('div#root'));

console.log(Obj)

root.render(
    App
);




let productsDiv = document.querySelector('div.products');
let arrOfApp = productsDiv.children;



let wrapArr = document.querySelectorAll('div.input-wrapper p.no-exist-ever');
let checkInputArr = document.querySelectorAll('div.input-wrapper input.need-to-check');
console.log(checkInputArr);





for (let i = 0; i < checkInputArr.length; i++) {
    checkInputArr[i].addEventListener('click', () => {
        for (let k = 0; k < arrOfApp.length; k++) {
            let elem = arrOfApp[k];
            if (checkInputArr[i].checked !== true) {
                if (wrapArr[i].innerText == elem.children[5].children[1].innerText) {
                    elem.style.display = 'none';
                };
            }
        }
    })
    if (i == 0) {
        checkInputArr[i].addEventListener('click', () => {

            if (checkInputArr[i].checked !== true && checkInputArr[i + 1].checked !== true && checkInputArr[i + 2].checked !== true && checkInputArr[i + 3].checked !== true) {
                for (let k = 0; k < arrOfApp.length; k++) {
                    let elem = arrOfApp[k];
                    elem.style.display = 'block';
                }
            }
        })
        checkInputArr[i].addEventListener('change', () => {
            for (let k = 0; k < arrOfApp.length; k++) {
                let elem = arrOfApp[k];
                if (checkInputArr[i].checked == true) {
                    if (wrapArr[i].innerText !== elem.children[5].children[1].innerText) {
                        elem.style.display = 'none';
                        arrOfApp[k].classList.add('non-visible')
                    }

                    if (wrapArr[i].innerText == elem.children[5].children[1].innerText) {
                        elem.style.display = 'block';
                    };

                    if (checkInputArr[i + 1].checked == true) {
                        if (wrapArr[i + 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }

                    if (checkInputArr[i + 2].checked == true) {
                        if (wrapArr[i + 2].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        }
                    }

                    if (checkInputArr[i + 3].checked == true) {
                        if (wrapArr[i + 3].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        }
                    }







                }
            }

        })
    }
    if (i == 1) {
        checkInputArr[i].addEventListener('change', () => {
            if (checkInputArr[i].checked !== true && checkInputArr[i + 1].checked !== true && checkInputArr[i + 2].checked !== true && checkInputArr[i - 1].checked !== true) {
                for (let k = 0; k < arrOfApp.length; k++) {
                    let elem = arrOfApp[k];
                    elem.style.display = 'block';
                }
            }
            for (let k = 0; k < arrOfApp.length; k++) {
                let elem = arrOfApp[k];
                if (checkInputArr[i].checked == true) {

                    if (wrapArr[i].innerText !== elem.children[5].children[1].innerText) {
                        elem.style.display = 'none';
                        arrOfApp[k].classList.add('non-visible')
                    }


                    if (wrapArr[i].innerText == elem.children[5].children[1].innerText) {
                        elem.style.display = 'block';
                    };

                    if (checkInputArr[i - 1].checked == true) {
                        if (wrapArr[i - 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }



                    if (checkInputArr[i + 1].checked == true) {
                        if (wrapArr[i + 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }

                    if (checkInputArr[i + 2].checked == true) {
                        if (wrapArr[i + 2].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        }
                    }





                }
            }

        })
    }
    if (i == 2) {
        checkInputArr[i].addEventListener('change', () => {
            if (checkInputArr[i].checked !== true && checkInputArr[i + 1].checked !== true && checkInputArr[i - 1].checked !== true && checkInputArr[i - 2].checked !== true) {
                for (let k = 0; k < arrOfApp.length; k++) {
                    let elem = arrOfApp[k];
                    elem.style.display = 'block';
                }
            }
            for (let k = 0; k < arrOfApp.length; k++) {
                let elem = arrOfApp[k];
                if (checkInputArr[i].checked == true) {




                    if (wrapArr[i].innerText !== elem.children[5].children[1].innerText) {
                        arrOfApp[k].classList.add('non-visible');
                        elem.style.display = 'none';
                    }

                    if (wrapArr[i].innerText == elem.children[5].children[1].innerText) {
                        elem.style.display = 'block';
                    };

                    if (checkInputArr[i - 2].checked == true) {
                        if (wrapArr[i - 2].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        }
                    }

                    if (checkInputArr[i - 1].checked == true) {
                        if (wrapArr[i - 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }


                    if (checkInputArr[i + 1].checked == true) {
                        if (wrapArr[i + 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }






                }
            }

        })
    }
    if (i == 3) {
        checkInputArr[i].addEventListener('change', () => {
            if (checkInputArr[i].checked !== true && checkInputArr[i - 1].checked !== true && checkInputArr[i - 2].checked !== true && checkInputArr[i - 3].checked !== true) {
                for (let k = 0; k < arrOfApp.length; k++) {
                    let elem = arrOfApp[k];
                    elem.style.display = 'block';
                }
            }
            for (let k = 0; k < arrOfApp.length; k++) {
                let elem = arrOfApp[k];
                if (checkInputArr[i].checked == true) {

                    if (wrapArr[i].innerText !== elem.children[5].children[1].innerText) {
                        arrOfApp[k].classList.add('non-visible')
                        elem.style.display = 'none';
                    }


                    if (wrapArr[i].innerText == elem.children[5].children[1].innerText) {
                        elem.style.display = 'block';
                    };


                    if (checkInputArr[i - 3].checked == true) {
                        if (wrapArr[i - 3].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }

                    if (checkInputArr[i - 2].checked == true) {
                        if (wrapArr[i - 2].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        }
                    }

                    if (checkInputArr[i - 1].checked == true) {
                        if (wrapArr[i - 1].innerText == elem.children[5].children[1].innerText) {
                            elem.style.display = 'block';
                        };
                    }








                }
            }

        })
    }
}







let fInput = document.querySelector('input.first');
let sInput = document.querySelector('input.second');
fInput.addEventListener('change', () => {
    for (let i = 0; i < arrOfApp.length; i++) {
        let elem = arrOfApp[i];
        let text = elem.lastChild.firstChild.innerText;
        let textMasive = text.split(' ');

        if (+fInput.value > +textMasive[0]) {
            arrOfApp[i].style.display = 'none';
        } else { arrOfApp[i].style.display = 'block'; }

        if (sInput.value) {
            if (+textMasive[0] > +sInput.value || +fInput.value > +textMasive[0]) {
                arrOfApp[i].style.display = 'none';
            } else {
                arrOfApp[i].style.display = 'block';
            }


        }

    }
});
sInput.addEventListener('change', () => {
    for (let i = 0; i < arrOfApp.length; i++) {
        let elem = arrOfApp[i];
        let text = elem.lastChild.firstChild.innerText;
        let textMasive = text.split(' ');

        if (+textMasive[0] > +sInput.value) {
            arrOfApp[i].style.display = 'none'
        } else (
            arrOfApp[i].style.display = 'block'
        )
        if (fInput.value) {
            if (+textMasive[0] > +sInput.value || +fInput.value > +textMasive[0]) {
                arrOfApp[i].style.display = 'none'
            } else (
                arrOfApp[i].style.display = 'block'
            )
        }

    }
});


let CareArr = document.querySelectorAll('.care-type');
let secondCareArr = document.querySelectorAll('div.for-part-of-body p');
for (let i = 0; i < CareArr.length; i++) {
    CareArr[i].addEventListener('click', () => {
        for (let k = 0; k < Obj.length; k++) {
            let arrCategory = Obj[k].category.split(', ');
            console.log(arrCategory);
            console.log(CareArr[i].innerText)
            if (arrCategory[1] !== CareArr[i].innerText || arrCategory[0] !== CareArr[i].innerText) {
                arrOfApp[k].classList.add('non-visible');
            }
            if (arrOfApp[k].classList.contains('unusual-for-every')) {
                arrOfApp[k].style.display = 'block';
            }
            if (arrCategory[0] == CareArr[i].innerText) {
                arrOfApp[k].style.display = 'block';
                arrOfApp[k].classList.add('unusual-for-every');
            }
            if (arrCategory[1] == CareArr[i].innerText) {
                arrOfApp[k].style.display = 'block';
                arrOfApp[k].classList.add('unusual-for-every');
            }

        }
    });
    secondCareArr[i].addEventListener('click', () => {
        // if(CareArr[i].classList.contains('unusual-for-every')){
        //     return;
        // }
        for (let k = 0; k < Obj.length; k++) {
            console.log(Obj[k])
            let arrCategory = Obj[k].category.split(', ');
            if (arrCategory[1] !== secondCareArr[i].innerText || arrCategory[0] !== secondCareArr[i].innerText) {
                arrOfApp[k].classList.add('non-visible');

            }
            if (arrOfApp[k].classList.contains('unusual-for-every')) {
                arrOfApp[k].style.display = 'block';
            }
            if (arrCategory[0] == secondCareArr[i].innerText) {
                arrOfApp[k].style.display = 'block';
                arrOfApp[k].classList.add('unusual-for-every');
            }
            if (arrCategory[1] == secondCareArr[i].innerText) {
                arrOfApp[k].style.display = 'block';
                arrOfApp[k].classList.add('unusual-for-every');
            }

        }
    });
}
for (let i = 0; i < arrOfApp.length; i++) {
    if (arrOfApp[i].classList.contains('non-visible')) {
        arrOfApp[i].style.display = 'none';
    }
}


let absoluteDiv = document.querySelector('div.absolute');

let chekout = document.querySelector('button.checkout');
chekout.addEventListener('click', ()=>{
    let productArr = document.querySelectorAll('div.one-basket-product');
    absoluteDiv.style.display = 'block';
    for(let i = 0; i < productArr.length; i++){
        productArr[i].style.display = 'none';
    }
})



let crossclose = document.querySelector('img.crossclose');
crossclose.addEventListener('click', ()=>{
    absoluteDiv.style.display = 'none'
})
