




// Дочерние элементы в DOM
// важность: 5
// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?
console.log(document.body.firstElementChild)
console.log(document.body.children[1]);
//

//<==>

// Вопрос о соседях
// важность: 5
// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null? да, верно, тк после последнего элемента ничего нет
// Правда, что elem.children[0].previousSibling всегда равен null ?нет, тк перед элементом может стоять текстовый узел
//

//<==>

// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
let table1 = document.body.firstElementChild;

for (let i = 0; i < table1.rows.length; i++) {
    let row = table1.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
//

//<==>

// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
//table `id="age-table"`.
let table = document.getElementById('age-table')

// label
document.querySelectorAll('#age-table label')

// td 
table.querySelector('td')

// form name="search"
document.querySelector('form[name="search"]')

// первый input 
form.getElementsByTagName('input')[0]

// последний input 
let inputs = form.querySelectorAll('input')
inputs[inputs.length - 1]
//
//<==>
// Считаем потомков
// важность: 5
// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();
    let count = li.getElementsByTagName('li').length;
    alert(title + ': ' + count);
}
//

//<==>
// Что содержит свойство nodeType?
// важность: 5
// Что выведет этот код?

// <html>

// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>

// </html>
// 1, тк последний элемент в body это script, он является элементом

//<==>

// Тег в комментарии
// важность: 3
// Что выведет этот код?

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет? // BODY
// </script>

//<==>

// Где в DOM-иерархии "document"?
// важность: 4
// Объектом какого класса является document?
alert(document.constructor.name);

// Какое место он занимает в DOM-иерархии?

// Наследует ли он от Node или от Element, или может от HTMLElement?

// alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
// alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
// alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node

//<==>

// Получите атрибут
// важность: 5
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

// <!DOCTYPE html>
// <html>
// <body>

//   <div data-widget-name="menu">Choose the genre</div>

//   <script>
//     /* your code */
//   </script>
// </body>
// </html>

//

//     let elem = document.querySelector('[data-widget-name]');
//     alert(elem.dataset.widgetName);
///


//<==>


// Сделайте внешние ссылки оранжевыми
// важность: 3
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.
// Пример:

// <a name="list">the list</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>

// <script>
//   // добавление стиля для одной ссылки
//   let link = document.querySelector('a');
//   link.style.color = 'orange';
// </script>
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');


//<==>


// createTextNode vs innerHTML vs textContent
// важность: 5
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text
//первая и третья

//<==>

// Очистите элемент
// важность: 5
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>

// <script>
//   function clear(elem) { /* ваш код */ }

//   clear(elem); // очищает список
// </script>

//function clear(elem) {
//     elem.innerHTML = '';
// }


//<==>

// Почему остаётся "aaa"?
// важность: 1
// В примере ниже вызов table.remove() удаляет таблицу из документа.

// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

// Почему так происходит?

// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>

// <script>
//   alert(table); // таблица, как и должно быть

//   table.remove();
//   // почему в документе остался текст "ааа"?
// </script>
//Проблема в некоректности HTML



//<==>

// Создайте список
// важность: 4
// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Введите текст", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

//<==>



//Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };
// Синтаксис:

// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
// Результат (дерево):


let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(container, obj) {
    container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeDom(obj[key]);
        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

let container = document.getElementById('container');
createTree(container, data);
//<==>


// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

// Результат:
let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';
}

//

//<==>

// Цветные часы с использованием setInterval
// важность: 4
// Создайте цветные часы как в примере ниже:


// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.
let timerId;

function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    if (!timerId) {
        timerId = setInterval(update, 1000);
    }
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}




//<==>


// Вставьте HTML в список
// важность: 5
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


//<==>

// Сортировка таблицы
// важность: 5
// Вот таблица:

// <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);


//<==>
// Создать уведомление
// важность: 5
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:

// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//   top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//   right: 10, // 10px от правого края окна (по умолчанию 0px)
//   html: "Hello!", // HTML-уведомление
//   className: "welcome" // дополнительный класс для div (необязательно)
// });
// Демо в новом окне

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.
function showNotification({ top = 0, right = 0, className, html }) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);



//<==>
// Найти размер прокрутки снизу
// важность: 5
// Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

// Напишите соответствующее выражение для произвольного элемента elem.

// P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//<==>

// Узнать ширину полосы прокрутки
// важность: 3
// Напишите код, который возвращает ширину стандартной полосы прокрутки.

// Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

// P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);


//<==>


// Поместите мяч в центр поля
// важность: 5
// Исходный документ выглядит так:


// Каковы координаты центра поля?

// Вычислите их и используйте, чтобы поместить мяч в центр поля:


// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
//<==>

// В чём отличие CSS-свойств width и clientWidth
// важность: 5
// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.

// clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце.
// getComputedStyle не всегда даст ширину, он может вернуть, к примеру, "auto" для строчного элемента.
// clientWidth соответствует внутренней области элемента, включая внутренние отступы padding, а CSS-ширина (при стандартном значении box-sizing) соответствует внутренней области без внутренних отступов padding.
// Если есть полоса прокрутки, и для неё зарезервировано место, то некоторые браузеры вычитают его из CSS-ширины (т.к. оно больше недоступно для содержимого), а некоторые – нет. Свойство clientWidth всегда ведёт себя одинаково: оно всегда обозначает размер за вычетом прокрутки, т.е. реально доступный для содержимого.


//<==>
// Найдите координаты точек относительно окна браузера
// важность: 5
// В ифрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.


// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
let answer4 = [
    coords.right - parseInt(getComputedStyle(field).borderRightWidth),
    coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];


//<==>
// Покажите заметку рядом с элементом
// важность: 5
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

// Демо заметки:


function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }

}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");



//<==>
// Покажите заметку около элемента (абсолютное позиционирование)
// важность: 5
// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
    }

}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote1 = document.querySelector('blockquote');

showNote(blockquote1, "top", "note above");
showNote(blockquote1, "right", "note at the right");
showNote(blockquote1, "bottom", "note below");
//<==>
// Расположите заметку внутри элемента (абсолютное позиционирование)
// важность: 5
// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
// Например:

// // показывает заметку поверх цитаты
// positionAt(blockquote, "top-out", note);

// // показывает заметку внутри цитаты вблизи верхнего края элемента
// positionAt(blockquote, "top-in", note);
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
            break;

        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;

        case "top-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "right-in":
            elem.style.width = '150px';
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;

        case "bottom-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            break;
    }

}


let blockquote2 = document.querySelector('blockquote');

showNote(blockquote2, "top-in", "note top-in");
showNote(blockquote2, "top-out", "note top-out");
showNote(blockquote2, "right-out", "note right-out");
showNote(blockquote2, "bottom-in", "note bottom-in");


