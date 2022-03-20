require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Conectei a base de dados");
    app.emit('pronto');
})
.catch( e => console.log('Falha na conexão com o BD'));




const routes = require("./routes");
const path = require('path');
const {middleware, outroMiddleware} = require('./src/middlewares/middleware.js');


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//nossos próprios middlewares
app.use(middleware);
app.use(outroMiddleware);
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("servidor on")
    });
})

