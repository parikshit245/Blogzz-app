const express = require("express");
const cors = require("cors");
const app = express();
const blogs = require('./router/blogs')
require('dotenv').config() 

require('./connection/cont')

app.use(cors());
app.use(express.json());

app.use('/add', blogs)
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
