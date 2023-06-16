const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))


app.listen(port, () => {
          console.log(`My Blog app listening at http://localhost:${port}`);

});


