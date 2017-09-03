const express = require('express');
const path = require ('path');
const logger = require ('morgan');
const bodyParser = require('body-parser');
const methodOverride= require ('method-override')

const listRouter = require('./routes/listRoutes');
// creates a PORT variable that checks the process.env or defaults to 300
const PORT = process.env.PORT || 3000;

//start the server
const app = express();

// set up logging
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));


/*Routes*/
app.use('/lists', listRouter);

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('index', {
    message: 'Your list',
  });
});

// starts server
app.listen(PORT, () => {
  console.log(`Server up and listening to port ${PORT}, in ${app.get('env')} mode.`);
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Page Not Found',
  });
});
