'use strict'




// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin;
let Name;
Name = 'Джон';
admin = Name;
alert(admin);

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
let planet;
let userOnline;

// let name = "Ilya";

// alert( `hello ${1}` ); // ?
//hello 1

// alert( `hello ${"name"}` ); // ?
//hello name

// alert( `hello ${name}` ); // ?
//hello Ilya

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.
let age = prompt('Сколько Вам лет?');
alert(`Вам ${age} лет!`);


// Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;

// let c = ++a; // ?==>>c=2
// let d = b++; // ?==>>d=1


// let a = 2;

// let x = 1 + (a *= 2);==>>x=5; a=4



// "" + 1 + 0 ==>> 10
// "" - 1 + 0 ==>> 2
// true + false ==>> 1
// 6 / "3" ==>> 2
// "2" * "3" ==>> 6
// 4 + 5 + "px" ==>> 9px
// "$" + 4 + 5 ==>>$45
// "4" - 2 ==>> 2
// "4px" - 2 ==>>NaN
// "  -9  " + 5 ==>> -9 5
// "  -9  " - 5 ==>> -14
// null + 1 ==>>1
// undefined + 1==>> NaN
// " \t \n" - 2 ==>> -2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12


// 5 > 4==>>true
// "ананас" > "яблоко"==>>false
// "2" > "12"==>>true
// undefined == null==>>true
// undefined === null==>>false
// null == "\n0\n"==>>false
// null === +"\n0\n"==>>false


// if ("0") {
//     alert( 'Привет' );
//   } ==>> alert не выведится тк 0 = false при приравнивании к булевому типу данных



// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let ans = prompt('Какое «официальное» название JavaScript?');
if (ans === 'ECMAScript') {
    alert('Верно');
} else {
    alert('Не знаете? ECMAScript!')
}

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
let num = prompt('Введите число');
num = Number(num);
if (num>0) {
    alert(1)
} else if(num<0){
    alert(-1)
} else{
    alert(0)
}


// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }


let c;
let d;
c = d = 5
let result =(c+d<4) ? 'Мало' : 'Много'
console.log(result)



// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.



let login = '';
let message = (login =='Сотрудник')? 'Привет':
(login == 'Директор')?'Здравствуйте':
(login == '')?'Нет логина':
'';
console.log(message);




// Что выведет код ниже?
alert( null || 2 || undefined );// || ищет первую переменную, которая даст значение true, поэтому получится alert(2)

alert( alert(1) || 2 || alert(3) );// функция alert возвращает undefined, 2 возвращает true , значит получится alert(2)

alert( 1 && null && 2 );//alert(null) тк оператор && останавливается на первом значении, которое возвращает false

alert( alert(1) && alert(2) );// 1, затем undefined

alert( null || 2 && 3 || 4 );// 3, у && приоритет больше чем у ||, в && останется 3 и оно будет первым true-значением

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
let age1 = 15;
if(age1>=14 && age1<=90){
    console.log('Привет')
}

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age2 = 11;
if(!(age2>=14 && age2<=90)){
    console.log('Привет')
}
if(age2<=14 || age2>=90){
    console.log('Привет')
}

// Какие из перечисленных ниже alert выполнятся?

// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );// выполнится тк -1 это true
if (-1 && 0) alert( 'second' );// не выполнится
if (null || -1 && 1) alert( 'third' );// выполнится,у && приоритет больше чем у ||, и получим (null || 1) - true


// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», 
//в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let log = prompt('Введите ваш логин');
if (log === 'Админ'){
    let pass = prompt('Введите пароль')
    if(pass == false || pass == null){
        alert('Отменено');
    } else if(pass === 'Я главный'){
        alert('Здравствуйте!')
    } else{
        alert('Я вас не знаю')
    }
} else if(log == false || log == null){
    alert('Отменено');
} else{
    alert('Я вас не знаю')
}


// Какое последнее значение выведет этот код? Почему?
// let i = 3;

// while (i) {
//   alert( i-- );
// } //1 , тк 0=false


// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:

// let i = 0;
// while (++i < 5) alert( i );//  будет выводить от 1 до 4 тк ++i сначала увеличит и потом произойдет сравнение
// Постфиксный вариант i++

// let i = 0;
// while (i++ < 5) alert( i );// выведет 4 раза от 1 до 5 тк в alert придет значение i=i+1, а в цикле останется старое тк оператор i++ возвращает старое значение



// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

// for (let i = 0; i < 5; i++) alert( i );//от 0 до 4 
// Префиксная форма:

// for (let i = 0; i < 5; ++i) alert( i );// от 0 до 4


//При помощи цикла for выведите чётные числа от 2 до 10.

for(let i = 2; i<=10;i++){
    let value = i %2;
    if(value ==0){
    console.log(i);
    }
}



// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

let i = 0;
while ( i < 3) {
    alert( `number ${i}!` );
    i++;
}



// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

for(;;){
    let numb = +prompt('Введите число больше 100');
    if(numb>100 || numb == false)break
}



// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.


let n = 10;
number: for(let i = 3; i<=n; i++){
    for(let k = 2; k<i;k++){
        if(i%k==0){
            continue number
        }
    }
    alert(i)
}


// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser;
if (browser == 'Edge'){
    alert( "You've got the Edge!" );
} else if((browser =='Chrome')||(browser =='Firefox')||(browser =='Safari')||(browser =='Opera')){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}



// Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');
switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:case 3:
        alert('Вы ввели число 2, а может и 3');
        break
}


// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?// Оба варианта функций работают одинаково, отличий нет.






// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||

function checkAge(age) {
    return age>18 ? true : confirm('Родители разрешили?')
}
checkAge(needAge)

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');}


//   Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

//   Пример вызовов:
  
//   min(2, 5) == 2
//   min(3, -1) == -1
//   min(1, 1) == 1
let min = function(a, b){
    let minNumb;
    if (a>b){
        minNumb = b;
    } else{
        minNumb = a;
    }
    return minNumb
}



// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

let pow = (x, n)=>{
    return x**n;
}
console.log(pow(2, 5));



//Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  
//

let ask11 = (question, yes, no) => {
    confirm(question)?yes():no();
}

ask11(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );