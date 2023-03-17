// Скрыть элемент по нажатию кнопки
// важность: 5
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// Демо:
document.getElementById('hider').onclick = function () {
    document.getElementById('text').hidden = true;
}

//<==>
// Спрятать себя
// важность: 5
// Создайте кнопку, которая будет скрывать себя по нажатию.

// Например: 
// <input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать"> */

//<==>
// Какой обработчик запустится?
// важность: 5
// В переменной button находится кнопка. Изначально на ней нет обработчиков.

// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);

//1 и 2
//<==>
// Передвиньте мяч по полю
// важность: 5
// Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:


// Требования:

// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.


// #field {
//     width: 200px;
//     height: 150px;
//     position: relative;
//   }

//   #ball {
//     position: absolute;
//     left: 0; /* по отношению к ближайшему расположенному предку (поле) */
//     top: 0;
//     transition: 1s all; /* CSS-анимация для значений left/top делает передвижение мяча плавным */
//   }
field.onclick = function (event) {

    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;


    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

//<==>
// Создать раскрывающееся меню
// важность: 5
// Создать меню, которое по нажатию открывается либо закрывается:


// P.S. HTML/CSS исходного документа можно и нужно менять.


//<==>
// Добавить кнопку закрытия
// важность: 5
// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// Результат должен выглядеть, как показано здесь:
let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}

//<==>
// Карусель
// важность: 4
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130;
let count = 3;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

//<==>
// Спрячьте сообщения с помощью делегирования
// важность: 5
// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

// В результате должно работать вот так:


// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.
container.onclick = function (event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
};
//<==>
// Раскрывающееся дерево
// важность: 5
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:


// Требования:

// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}
tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}
//<==>
// Сортируемая таблица
// важность: 4
// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

// Каждый элемент <th> имеет атрибут data-type:

// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Возраст</th>
//       <th data-type="string">Имя</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Вася</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Петя</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

// Сортировка должна поддерживать только типы "string" и "number".

// Работающий пример:


// P.S. Таблица может быть большой, с любым числом строк и столбцов.
grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}

//<==>
// Поведение "подсказка"
// важность: 5
// Напишите JS-код, реализующий поведение «подсказка».

// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

// Пример HTML с подсказками:

// <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
// Результат в ифрейме с документом:


// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

// Детали оформления:

// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:

// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

// P.S. В один момент может быть показана только одна подсказка.
let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};
//<==>
// Почему не работает return false?
// важность: 3
// Почему в коде ниже return false не работает?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

// Браузер переходит по указанной ссылке, но нам этого не нужно.

// Как поправить?
//

/* <script>
  function handler(event) {
    alert("...");
    event.preventDefault();
  }
</script>

<a href="https://w3.org" onclick="handler(event)">w3.org</a> */

//<==>
// Поймайте переход по ссылке
// важность: 5
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Так это должно работать:


// Детали:

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
contents.onclick = function (event) {

    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }

    let target = event.target.closest('a');

    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
    }
};

//<==>
// Галерея изображений
// важность: 5
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

// Например:
thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}

// P.S. Используйте делегирование.



//<==>



//<==>



//<==>