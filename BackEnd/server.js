const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');



const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// DB
const sequelize = require('./util/database');

//cors
app.use(cors());


app.use('/', routes);


// Automatic table creation if already no table present
sequelize.sync().then(
    result =>{
        // console.log(result);
        app.listen(3000);
    } 
).catch(err=>{
    console.log(err)
});
