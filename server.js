//dependencies
const express = require('express');
const app = express();
const routes = require('./routes/routes');


app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));