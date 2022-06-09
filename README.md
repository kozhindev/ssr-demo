
## Установка и запуск

Все команды запускать в папке проекта

##### Установка

Выполнить `yarn`


##### Запуск webpack сервера

1. Выполнить `yarn watch`
2. Открыть http://localhost:9991/

##### Запуск storybook-сервера

1. Выполнить `yarn storybook`
2. Открыть http://localhost:6006/


### Включение eslint в IDE

Для WebStorm/PhpStorm идем в `Настройки` -> `Langiages & Frameworks` -> `Code Quality Tools` -> `ESLint`

И включаем там пункты `Automatic ESLing configuration` и `Run eslint --fix on save`

### Настройка обработчика ошибок Sentry

1. Создать проект в Sentry
2. В файле `.gitlab-ci.yml` заменить `REPLACE_WITH_REAL_SENTRY_DSN` на верный dsn и раскомментировать строку


## Backend nodejs sample

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/get-message/:title', (req, res) => {
    const userTitle = req.params.title;
    const textMessage = 'its wednesday'
        + (userTitle ? ', ' + userTitle : '');

    res.send(textMessage);
});

app.get('/api/v1/get-message', (req, res) => {
    setTimeout(
        () => res.send('its wednesday'),
        100
        // 2000
    )
});
app.post('/api/v1/init', (req, res) => {
    res.send(JSON.stringify({user: {name: 'dude'}}));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```