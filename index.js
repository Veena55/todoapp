const express = require('express');
const app = express();
const PORT = 5000;

const mongoose = require('./config/mongoose');
app.use(express.urlencoded());
app.use('/', require('./routes'));

app.use(express.static('assets'));


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res)=>{
    return res.send('<h1 class="text-3xl font-bold underline"> Hello world!</h1>');
});

app.listen(PORT,(err)=>{
    if (err) {
        console.log('Something went wrong');
        return;
    }
    console.log(`Congratulations!! Server is running on the PORT - ${PORT}`);
});