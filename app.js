const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');

const config = require('./config.json')[process.env.NODE_ENV || "development"];

const app = express()
app.use(express.json())
fs.readdir('./routes', (err, files) => {
  files.forEach(file => {
    var name = file.split('.');
    name.pop();
    app.use(`/${name}`, require(`./routes/${name}`));
  });
})

app.listen(process.env.PORT || config.port, function () {
  console.log('app listening at port %s', config.port);
});

mongoose.connect(config.db_url, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = app;