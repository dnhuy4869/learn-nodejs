const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})