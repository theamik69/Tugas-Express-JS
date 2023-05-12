require('dotenv').config();
const express = require('express');



const app = express();
const port = process.env.PORT || 8000;

function logger(req, res, next){
    console.log(new Date(), req.url)
    next()
}

app.use(logger)

app.get('/biodata', (req, res) => {
    const name = req.query.name;
    const tempat_lahir = req.query['tempat-lahir'];
    const tanggal_lahir = req.query['tanggal-lahir'];
    const alamat = req.query.alamat;

    res.send({
        'nama': name,
        'tempat_lahir': tempat_lahir,
        'tanggal_lahir': tanggal_lahir,
        'alamat': alamat
    });

});


app.listen(port)
    console.log('Server is started at http://localhost:' + port);
