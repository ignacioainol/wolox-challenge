const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);

//routes
app.use('/api/',require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});