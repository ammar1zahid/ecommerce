const mongoose = require('mongoose');

// const { Schema } = mongoose;
// const UserSchema = new Schema


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    // location:{
    //     type: String,
    //     required: true
    // },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    // date:{
    //     type: Date,
    //     default: Date.now
    // }

});

const User = mongoose.model('User', userSchema);

module.exports = User;

// module.exports = mongoose.model('user', UserSchema)