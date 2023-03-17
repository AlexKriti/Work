// Добавьте пункт к выпадающему списку
// важность: 5
// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.
// 1)
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

// 2)
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3)
newOption.selected = true;

//<==>

// Редактируемый div
// важность: 5
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
let area = null;
let view = document.getElementById('view');

view.onclick = function () {
    editStart();
};

function editStart() {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = view.innerHTML;

    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    area.onblur = function () {
        editEnd();
    };

    view.replaceWith(area);
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}
//<==>
// Редактирование TD по клику
// важность: 5
// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.
// Демо:
let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function (event) {

    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {
        finishTdEdit(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
        finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == 'TD') {
        if (editingTd) return;

        makeTdEditable(target);
    }

};

function makeTdEditable(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };

    td.classList.add('edit-td');

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
}

function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data;
    }
    td.classList.remove('edit-td');
    editingTd = null;
}
//<==>

// Мышь, управляемая клавиатурой
// важность: 4
// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// Демо в новом окне

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.
mouse.tabIndex = 0;

mouse.onclick = function () {
    this.style.left = this.getBoundingClientRect().left + 'px';
    this.style.top = this.getBoundingClientRect().top + 'px';

    this.style.position = 'fixed';
};


mouse.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
            return false;
        case 'ArrowUp':
            this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
            return false;
        case 'ArrowRight':
            this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
            return false;
        case 'ArrowDown':
            this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
            return false;
    }
};

//<==>
// Депозитный калькулятор
// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.

// Демо-версия:


// Любое изменение введённых данных должно быть обработано немедленно.

// Формула:

// // initial: начальная сумма денег
// // interest: проценты, например, 0.05 означает 5% в год
// // years: сколько лет ждать
// let result = Math.round(initial * (1 + interest) ** years);

let form = document.forms.calculator;

    form.money.oninput = calculate;
    form.months.onchange = calculate;
    form.interest.oninput = calculate;

    function calculate() {
      let initial = +form.money.value;
      if (!initial) return;

      let interest = form.interest.value * 0.01;

      if (!interest) return;

      let years = form.months.value / 12;
      if (!years) return;

      let result = Math.round(initial * (1 + interest) ** years);

      let height = result / form.money.value * 100 + 'px';
      document.getElementById('height-after').style.height = height;
      document.getElementById('money-before').innerHTML = form.money.value;
      document.getElementById('money-after').innerHTML = result;
    }

    calculate();

//<==>
// Модальное диалоговое окно с формой
// важность: 5
// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
// Пример использования:

// showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
//   alert(value);
// });
// Демо во фрейме:


// P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.
function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';

    
    document.body.style.overflowY = 'hidden';

    document.body.append(coverDiv);
  }

  function hideCover() {
    document.getElementById('cover-div').remove();
    document.body.style.overflowY = '';
  }

  function showPrompt(text, callback) {
    showCover();
    let form = document.getElementById('prompt-form');
    let container = document.getElementById('prompt-form-container');
    document.getElementById('prompt-message').innerHTML = text;
    form.text.value = '';

    function complete(value) {
      hideCover();
      container.style.display = 'none';
      document.onkeydown = null;
      callback(value);
    }

    form.onsubmit = function() {
      let value = form.text.value;
      if (value == '') return false; 

      complete(value);
      return false;
    };

    form.cancel.onclick = function() {
      complete(null);
    };

    document.onkeydown = function(e) {
      if (e.key == 'Escape') {
        complete(null);
      }
    };

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
      if (e.key == 'Tab' && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function(e) {
      if (e.key == 'Tab' && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };

    container.style.display = 'block';
    form.elements.text.focus();
  }

  document.getElementById('show-button').onclick = function() {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
      alert("Вы ввели: " + value);
    });
  };
//<==>