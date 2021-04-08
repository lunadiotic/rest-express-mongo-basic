const express = require('express')

const app = express()

app.use(express.json())

const books = [
    {
        id: 1, 
        title: 'Javascript For Newbies'
    },
    {
        id: 2, 
        title: 'Node.js For Beginner'
    }
]

app.get('/', (req, res) => {
    res.send('Welcome, IDRanger')
})

app.get('/api/books', (req, res) => {
    res.send(books)
})

console.log('App start in: 3000')

app.listen(3000)