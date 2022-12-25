const express = require('express')

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Index Sayfası')
})

app.get('*', (req, res) => {
    res.status(404).send('404 SAYFA BULUNAMADI!..')

})

app.listen(port, () => {
    console.log(`Server is up!... On port: ${port} `)
})   