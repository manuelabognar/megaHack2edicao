const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors');
//const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://scm:1234@megahack-ru7dt.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('MongoDB Atlas not connected. Ooooh my gooood!', err.stack));

app.use(cors());
app.use(express.json());
//app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);