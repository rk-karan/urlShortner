const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(4445, () => {
    console.log("Server started on https://localhost:4445")
})