const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Load User model
const User = require('../../models/User');


//@route Get api/users/test
//@desc Tests users rout
//@access Public
router.get('/test', (req, res) => res.json({ msg: "Users Works" }));

//@route Post api/users/register
//@desc Register users rout
//@access Public
router.post("/register", (req, res) => {

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
});
//@route Post api/users/login
//@desc Login users  / returning JWT Token
//@access Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    //Finde user by email
    User.findOne({ email })
        .then(user => {
            //check for user
            if (!user) {
                return res.status(404).json({ email: "User not found" });
            }
            //Chech Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        res.json({ msg: 'seucsuccessses' })
                    } else {
                        return res.status(400).json({ password: 'Password is incorrect' })
                    }
                })
        });
})




module.exports = router;