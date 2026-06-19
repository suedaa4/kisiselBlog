const express = require('express');
const app = express();

let notlar = [
    {id:1, baslik:"ilk Notum",icerik:"Node.js öğrenmeye başladım!"}
]
app.get('/notlar', (req, res) => {
    res.json(notlar);
});

app.get('/not-ekle/:baslik/:icerik', (req, res) => {
    
    const gelenBaslik = req.params.baslik;
    const gelenIcerik = req.params.icerik;

    const yeniNot = {
        id: notlar.length + 1,
        baslik: gelenBaslik,
        icerik: gelenIcerik
    };

    notlar.push(yeniNot);

    res.send("Not başarıyla eklendi! /notlar adresine giderek kontrol edebilirsin.");
});

app.listen(3000, () => {
    console.log("Not API Sunucusu http://localhost:3000 adresinde çalışıyor...");
});