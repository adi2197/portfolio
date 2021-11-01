const express = require('express')
const path = require('path');
const app = express();
var cons = require('consolidate');
const port = process.env.PORT || 3000;

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('resume');
});
app.listen(port, (req, res) => {
    console.log(`started on http://localhost:${port}`);
})