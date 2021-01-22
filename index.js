const express = require('express');

const app = express();

app.use(() => {
    console.log('hallo server');
})


app.listen(4000);