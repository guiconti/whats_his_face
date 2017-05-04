const express = require('express');
const routes = require('../server/core/router');

const PORT = 3102;
const app = new express();

app.use('/api', routes);

app.listen(PORT, (err) => {

    if (err){

        console.log(err);

    } else {

        console.info("🌎  Server is listening on port %s.", PORT);

    }

});