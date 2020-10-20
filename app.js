const express = require('express');
const app = express();


const path = require('path')

// set the view for express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use static assets
app.use(express.static(path.join(__dirname, 'public')));


app.use('/ejs', require('./routes/ejsRoutes'));
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
