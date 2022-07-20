const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config();
const auth = async(req, res, next)=> {
    var authheader = req.headers.authorization;
    console.log(req.headers);
 
    if (!authheader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }
 
    var auth = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
   
    // var password = auth[1];
 
    if (user == process.env.USERNAME && pass ==  process.env.PASSWORD) {
 
        // If Authorized user
        next();
    }
        else{
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }

    
 
}
module.exports = auth