const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const productRouter = require('./Routers/ProductRouter')

app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');

app.use(express.static('public'))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

app.use('/product',productRouter);
app.get('/',(req,res)=>{res.redirect('/product')})

app.listen(3000)