const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const statusRoutes = require("./statusRoutes");

const app = express();

mongoose.connect('mongodb+srv://WellingtonRoth:braview765@cluster0.ifkal.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

count = 0;
app.use('*', (req, res, next) => {
  count++; 
  next(); 
});

app.use(express.json());
app.use(require('./routes'));
app.use('/', statusRoutes);

app.listen(3333);