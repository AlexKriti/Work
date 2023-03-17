// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// В песочнице есть тестовый пример.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.
async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        jobs.push(job);
    }

    let results = await Promise.all(jobs);

    return results;
}
//<==>
// Почему нам нужен Origin?
// важность: 5
// Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.

// Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:

// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url
// Как вы можете видеть, присутствуют и Referer, и Origin.

// Вопросы:

// Почему нужен Origin, если Referer содержит даже больше информации?
// Возможно ли отсутствие Referer или Origin, или это неправильно?

//Нам нужен Origin, потому что иногда Referer отсутствует. 
//Например, когда мы запрашиваем через fetch HTTP-страницу с HTTPS 
//(менее безопасный доступ с более безопасного), то Referer нет.