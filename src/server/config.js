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
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'),'partials'),
        layoutDir: path.join(app.get('views','layouts')),
        extname: '.hbs',
        helpers: require('.helpers')
    }))

    app.set('view engine', '.hbs');

    //middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended:false}));
	app.use(express.json());

    //routes
    routes(app);
    
    //static files
    app.use('/public',express.static(path.join(__dirname,'../public')));
    
    return app;
    
}
