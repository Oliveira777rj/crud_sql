const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extends:true}));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', './views');

const Router = require('./routes/routes');

app.use('/', Router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});