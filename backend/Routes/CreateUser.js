const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/CreateUser", 
body('email', 'incorrect email').isEmail(),
body('name').isLength({ min: 2 }),
body('password', 'incorrect password').isLength({ min: 2 }),
async(req, res) => {
    try {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

// creating a new user in database with provided data.

    const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
    // try {
        // Save the new user to MongoDB
      await newUser.save();

      res.json({ success: true });
        // await User.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
            
            // location: req.body.location
        // }
        // res.json({success:true})
} catch (error) {
        console.log('Error saving user:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
        // res.json({success:false});
    }
})


router.post("/LoginUser", [
body('email', 'incorrect email').isEmail(),
body('password', 'incorrect password').isLength({ min: 2 })
], async (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    
    try {
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({ errors: "Incorrect Credentials" });
        }
    
        if(req.body.password !== userData.password){
            return res.status(400).json({ errors: "Incorrect Credentials" });
        }

        return res.json({ success:true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


module.exports = router;