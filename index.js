const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');
const exphbs = require('express-handlebars');


  // TEST DB CONNECTION
  db.authenticate()
  .then(() =>console.log('SuccessFully-DateBase-Connected') )
  .catch((err) =>console.log(err))


const app = express()  // Creates an express application

// app.engine('handlebars' , exphbs({defaultLayout : 'main'}));
// app.set('vie engine' , 'handlebars')
app.get('/', (req , res) => {res.send("EXPRESS APP")}) 

// dev Routes 
app.use('/devs' ,require('./routes/route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT , console.log(`app listening at ${PORT}`))



