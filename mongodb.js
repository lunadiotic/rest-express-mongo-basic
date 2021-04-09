const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()
app.use(express.json())
let database

app.get('/', (req, res) => {
    res.send('Welcome to MongoDB API')
})

app.listen(3000, () => {
    MongoClient.connect('mongodb://localhost:27017', {
        useUnifiedTopology: true
    }, (error, result) => {
        if (error) throw error
        database = result.db('collect_library')
        console.log('Connection successfully')
        console.log('http://localhost:3000')
    })
})