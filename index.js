const express = require('express');
const router = require('./router.js'); // импортируем роутер

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', router); // запускаем

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
