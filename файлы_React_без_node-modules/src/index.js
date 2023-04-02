import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.querySelector('div#root'));


Rendering(App);
function Rendering(a){
    root.render(
        a
    );
    a.onClick = function(){
        console.log('hi')
    }
}


let arr = document.querySelectorAll('div.item-catalog');


