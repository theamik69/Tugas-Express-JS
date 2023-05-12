require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT || 8000;

function logger(req, res, next){
    console.log(new Date(), req.url)
    next()
}

app.use(logger)

app.use(express.json()); // Untuk membaca body dari request dengan format JSON
app.use(express.urlencoded({ extended: true}));

app.post('/biodata/users', function(req, res) {
    const nama = req.body.nama;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat_lahir': tempat_lahir,
        'tanggal_lahir': tanggal_lahir,
        'alamat': alamat
    })

    res.status(201);
});

app.listen(port)
    console.log('Server is started at http://localhost:' + port);