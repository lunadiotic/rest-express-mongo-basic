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

app.get('/api/books/:id', (req, res) => {
    const book = books.find(book => {
        return book.id === parseInt(req.params.id)
    })

    if (!book) {
        res.status(404).send('resource is not found!')
    }

    res.send(book)
})

app.post('/api/books', (req, res) => {
    const book = {
        id: books.length+1,
        title: req.body.title
    }
    books.push(book)
    res.status(201).send(book)
})

console.log('App start in: 3000')

app.listen(3000)