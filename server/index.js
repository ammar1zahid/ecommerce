// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// // const UserModel = require('./models/Users')

// const app = express()
// app.use(cors())
// app.use(express.json())

// // mongoose.connect("mongodb+srv://203128:Areebahh7777@cluster0.jxoh8qm.mongodb.net/crud")

// mongoose.connect("mongodb+srv://203128:Areebahh7777@cluster0.jxoh8qm.mongodb.net/clothing")

// app.listen(3001, () => {
//     console.log("Server is running")


// })




// // app.get('/', (req, res) => {
// //     UserModel.find({})
// //     .then(users => res.json(users))
// //     .catch(err => res.json(err))
// // })

// // app.get('/getUser/:id', (req, res) => {
// //     const id = req.params.id;
// //     UserModel.findById({_id:id})
// //     .then(users => res.json(users))
// //     .catch(err => res.json(err))
// // })

// // app.put('/UpdateUser/:id', (req, res) => {
// //     const id = req.params.id;
// //     UserModel.findByIdAndUpdate({_id: id}, {
// //         name: req.body.name,
// //         email: req.body.email,
// //         age: req.body.age})
// //         .then(users => res.json(users))
// //         .catch(err => res.json(err))
// // })

// // app.delete('/DeleteUser/:id', (req, res) => {
// //     const id = req.params.id;
// //     UserModel.findByIdAndDelete({_id: id})
// //     .then(users => res.json(users))
// //     .catch(err => res.json(err))
// // })

// // app.post("/CreateUser", (req, res) => {
// //     UserModel.create(req.body)
// //     .then(users => res.json(users))
// //     .catch(err => res.json(err))
// // })
