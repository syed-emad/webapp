const express = require('express');
const router = express.Router(); //sub pckg of express to handle diff routes
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
    User.find({ email:req.body.email })
    .exec()
    .then(user =>{
        if(user.length >=1){                           //409 or 422 error both for conflict resources
            return res.status(409).json({
                message:'mail exists'
            });
        } 
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => { //10 is the salting number--adding extra characters in the plaintext pw so that after hash its non readable
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
        
                    user.save()
                    .then(result=>{
                        console.log(result);
                        res.status(201).json({
                            message:'user created'
                        });
                    }).catch(err=>{
                        console.log(err);
                        res.status(500).json({
                            erroe:err
                        });
                    });
                }
            });
        }
    });
    

});

router.post('/login', (req,res,next)=>{
User.find({ email:req.body.email})
.exec()
.then( user=>{
    if(user.length<1){
        return res.status(401).json({
            message:'auth failed'
        });
    } 
    bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
        if(err){
            return res.status(401).json({
                message:'auth failed'
            });
        }
        if(result){
            const token= jwt.sign(
                {
                email:user[0].email,
                 userId: user[0]._id
            },
            process.env.JWT_KEY,
            {
                expiresIn:"1h"
            }
            );
            return res.status(200).json({
            message:'auth success',
            token:token
});
        }
        res.status(401).json({
            message:'auth failed'
            });
        });
    }) 

.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
});

router.delete('/:userId',(req,res,next)=>{
    User.remove({_id:req.params.id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message:'user deleted'
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});

module.exports = router;