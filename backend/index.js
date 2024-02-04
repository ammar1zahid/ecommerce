const express = require('express');
const cors = require('cors');
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, HEAD, POST, PATCH, POST, DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})