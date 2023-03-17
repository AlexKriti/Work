
// Работа с прототипами
// важность: 5
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)
// Должно быть 3 ответа.
//

// true, берётся из rabbit.
// null, берётся из animal.
// undefined, такого свойства больше нет.

//<==>
// Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.

// У нас есть объекты:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);
alert(table.money);

//<==>
// Куда будет произведена запись?
// важность: 5
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

//rabbit

//<==>
// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
alert(speedy.stomach);

alert(lazy.stomach);


//<==>
// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// alert( rabbit.eats ); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ?
// …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ?
// Или такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // ?
// Или, наконец, такой:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ?
//1-true
//2-false
//3-true
//4-undefined


//<==>
// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function User(name) {
    this.name = name;
}
User.prototype = {};

let user = new User('John');
let user2 = new user.constructor('Pete');

alert(user2.name);
//<==>
// Добавить функциям метод "f.defer(ms)"
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000);


//<==>
// Добавьте функциям декорирующий метод "defer()"
// важность: 4
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2);

//<==>
// Добавьте toString в словарь
// важность: 5
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    alert(key);
}

alert(dictionary);

//<==>
// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   alert(this.name);
// };

// let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    alert(this.name);
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();



//<==>