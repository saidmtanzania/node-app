//jshint esversion:6
const express = require('express'); 
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require("./util/database");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((errr) => {
    console.log(err);
  });

// app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
