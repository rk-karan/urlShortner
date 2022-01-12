// importing express library
const express = require('express')
const app = express()

const linksRoute = require('./routes/links')
const redirRoute = require('./routes/redirection')

app.use(express.json())

app.use('/api/links', linksRoute)
app.use('/', redirRoute)

// importing db instance
const { db } = require('./models/db.js')

// authenticating db connection
db.sync({force: true})
    .then(() => console.log("DB Works"))
        .catch((err) => console.erroe(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Webapp listens on port 4445
app.listen(4445, () => {
    console.log("Server started on https://localhost:4445")
})