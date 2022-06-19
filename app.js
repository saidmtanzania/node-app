//jshint esversion:6
const path = require('path');
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);
// app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
