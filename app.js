//jshint esversion:6
const path = require('path');
const express = require('express'); 
const bodyParser = require('body-parser');
const ehbs = require('express-handlebars');

const app = express();

app.engine('hbs', ehbs.engine({layoutsDir: 'views/layouts', defaultLayout: 'main-layouts', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404',{ docTitle: '404'});
});
app.listen(3000);
// app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
