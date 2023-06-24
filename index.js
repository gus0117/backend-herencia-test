var express = require('express');
var app = express();

const { mongoose } = require('./database');
const cors = require('cors');

// Middlewares
app.use(express.json({limit: '50mb'}));
app.use(cors({ origin: 'http://localhost:4200' }));

//admin logic
app.use('/api/admin', require('./routes/admin.routes'));


// Setting
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
})