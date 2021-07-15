const express = require('express');
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config = require('../config/index');

router.post('/login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    if (!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fil email.'}]});
    }
    if (!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fil password.'}]});
    }

    User.findOne({email}, function(err, foundUser) {
        if (err) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'Something wrong.'}]});
        }
        if (!foundUser) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'incollect email or password'}]});
        }
        if (!foundUser.hasSamePassword(password)) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'incollect email or password'}]});
        }
        const token = jwt.sign({
            userid: foundUser.id,
            username: foundUser.username
          }, config.SECRET, { expiresIn: '1h' });
    
        return res.json(token);
    })
})

router.post('/register', function(req, res) {
    const { username, password, email, confirmpassword } = req.body;
    /*
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const confirmpassword = req.body.confirmpassword;
    */

    if (!username) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fil username .'}]});
    }
    if (!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fil email.'}]});
    }
    if (!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fil password.'}]});
    }
    if (password !== confirmpassword) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'invalid password.'}]});
    }

    User.findOne({email}, function(err, foundUser) {
        if (err) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'Something wrong.'}]});
        }
        if (foundUser) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'user already exist.'}]});
        }
        
        const user = new User({username, email, password});
        user.save(function(err) {
            if (err) {
                return res.status(422).send({errors: [{title: 'User error', detail: 'Something wrong.'}]});
            }
            return res.json({"registerd":true});
        })
    })
})

module.exports = router;