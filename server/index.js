require('dotenv').config();
console.log(process.env)
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);
console.log(`App listening at http://localhost:${process.env.PORT || 3000}`);

module.exports = app;