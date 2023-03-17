let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};



// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
//
function sumTo() {
    let b = +prompt('Введите число');
    let sum = 0;
    do {
        sum = sum + b--;
    } while (b >= 1);
    return sum;
}

console.log(sumTo());

//
function sumTo(n) {
    let result = 0;
    if (n == 1) {
        result = n;
    } else {
        return result = n + sumTo(n - 1);
    }
    return result;
}
let a = +prompt('Введите число');
alert(sumTo(a))
//
function sumTo(a) {
    return a * (a + 1) / 2;
}
//


// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Определение факториала можно записать как:

// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

let a1 = prompt('Введите число');
let num = 0
function fact(a) {
    if (a > 1) {
        return a * fact(a - 1);
    } else { return a }
}
console.log(fact(a1));
//

// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
//
// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):


// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?



function printList(list) {
    let obj = list;

    while (obj) {
        alert(obj.value);
        obj = obj.next;
    }

}

printList(list);

//
function printList(list) {

    alert(list.value);

    if (list.next) {
        printList(list.next);
    }

}

printList(list);
//


// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.


function printReverse(list) {

    if (list.next) {
        printReverse(list.next);

    }
    alert(list.value);
}
printReverse(list);
//
function printReverseList(list) {
    let array = [];
    let tmp = list;

    while (tmp) {
        array.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        alert(array[i]);
    }
}

printReverseList(list);

//<==>

// Независимы ли счётчики?
// важность: 5
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ?
// alert( counter2() ); // ?

//0,1

//<==>
// Объект счётчика
// важность: 5
// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

alert(counter.up());
alert(counter.up());
alert(counter.down());
//<==>
// Функция в if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

//в результате мы получим ошибку

//<==>
// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {

    return function (b) {
        return a + b;
    };

}

alert(sum(1)(2));
alert(sum(5)(-1));


//<==>
// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

//<==>
// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name));

users.sort(byField('age'));
users.forEach(user => alert(user.name));


//<==>
// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            alert(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();

//<==>
// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}


//<==>
// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));


//<==>
// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.
function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);

//<==>
// Что покажет setTimeout?
// важность: 5
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }
// Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.
// Последнee значение i = 100000000



//<==>
// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.
function spy(func) {

    function wrapper(...args) {
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}
//<==>
// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.
function delay(f, ms) {

    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(alert, 1000);

f1000("test");

//<==>

// Декоратор debounce
// важность: 5
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

// Например:

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
// На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.
function debounce(f, ms) {

    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}
//<==>
// Тормозящий (throttling) декоратор
// важность: 5
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

// Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, откуда оно взято.

// Например, мы хотим отслеживать движения мыши.

// В браузере мы можем объявить функцию, которая будет запускаться при каждом движении указателя и получать его местоположение. Во время активного использования мыши эта функция запускается очень часто, это может происходить около 100 раз в секунду (каждые 10 мс).

// Мы бы хотели обновлять информацию на странице при передвижениях.

// …Но функция обновления update() слишком ресурсоёмкая, чтобы делать это при каждом микродвижении. Да и нет смысла делать обновление чаще, чем один раз в 1000 мс.

// Поэтому мы обернём вызов в декоратор: будем использовать throttle(update, 1000) как функцию, которая будет запускаться при каждом перемещении указателя вместо оригинальной update(). Декоратор будет вызываться часто, но передавать вызов в update() максимум раз в 1000 мс.

// Визуально это будет выглядеть вот так:

// Для первого движения указателя декорированный вариант сразу передаёт вызов в update. Это важно, т.к. пользователь сразу видит нашу реакцию на его перемещение.
// Затем, когда указатель продолжает движение, в течение 1000 мс ничего не происходит. Декорированный вариант игнорирует вызовы.
// По истечению 1000 мс происходит ещё один вызов update с последними координатами.
// Затем, наконец, указатель где-то останавливается. Декорированный вариант ждёт, пока не истечёт 1000 мс, и затем вызывает update с последними координатами. В итоге окончательные координаты указателя тоже обработаны.
// Пример кода:

// function f(a) {
//   console.log(a)
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
// P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.
function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
//<==>
// Связанная функция как метод
// важность: 5
// Что выведет функция?

// function f() {
//   alert( this ); // ?
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();
//null
//<==>
// Повторный bind
// важность: 5
// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();
// Вася

//<==>
// Свойство функции после bind
// важность: 5
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// alert( bound.test ); // что выведет? почему?
//undefined

//<==>
// Исправьте функцию, теряющую "this"
// важность: 5
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk, user.loginFail);
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//<==>
// Использование частично применённой функции для логина
// важность: 5
// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(?, ?); // ?
// Ваши изменения должны затрагивать только выделенный фрагмент кода.
askPassword(() => user.login(true), () => user.login(false));
//<==>


//<==>
