const User = require('../models/user')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjksss'

const ValidateToken = async (req, res, next) => {

    const {token} = req.headers;
    if(token == null || token== "" ){
        return res.json("end")
    }

        const user = jwt.verify(token,JWT_SECRET)
        if (user){
            req.user = user
            console.log(user)
            next()
        }else{
            return res.json({
                status:'error',
                error: 'Log In again'
            })
        }
}

  module.exports = {ValidateToken}