const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
//handle 
const path = require('path'); 
const handlebars = require('express-handlebars'); 

// di vao trang chu

app.use(express.static(path.join(__dirname,'public')));


app.use(morgan('combined'));
//template engine 
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views'); 
app.set('views',path.join(__dirname, './resources/views'));
app.get('/', function(req, res){

 return  res.render('home');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})