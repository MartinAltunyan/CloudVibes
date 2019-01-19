const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const users = require('./routes/api/users')
const orders = require('./routes/api/orders')
const app = express();

//DB Config

const db = require('./config/keys').mongoURI;
//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }).
    then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello!'));


//Use Routes
app.use('/api/users', users);
app.use('/api/orders', orders);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port ${port}`))