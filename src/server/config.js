const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');

//routes
const routes = require('../routes/index');

module.exports = app => {

    //Settings
    app.set('port', process.env.PORT || 3000 );
    app.set('views', path.join(__dirname,'../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main'
    }))

}
