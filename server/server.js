const express = require("express");
const bodyParser =  require("body-parser");
const morgan =  require("morgan");

const routes =  require('./routes/index');

const app =  express();

const port  = process.env.PORT || 9000 

const {errors} = require("celebrate");

const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/api/mtv',routes);
app.use(errors());


app.get('/', (req,res) => {
    res.send("Todo funcionando cool uwu");
});


app.listen(port,e =>console.log(`works in port ${port}`));

module.exports = app;