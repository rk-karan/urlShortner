// importing express library
const express = require('express')
const app = express()

// importing db instance
const { db } = require('./models/db.js')

// authenticating db connection
db.authenticate()
    .then(() => console.log("DB Works"))
        .catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Webapp listens on port 4445
app.listen(4445, () => {
    console.log("Server started on https://localhost:4445")
})