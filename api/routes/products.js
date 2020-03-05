const express= require('express');
const mongoose= require('mongoose');
const Product= require('../models/product');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    res.status(200).json ({
        message: 'handling GEt reqs'
    });
});  
      //to get incoming requests, first param is url
      router.get('/:prodID', (req, res, next) => {
        const id= req.params.prodID;
        Product.findById(id)
        .exec()
        .then(doc => {
            console.log("from database",doc);
            res.status(200).json(doc);
        })
        .catch(err =>{
            console.log(err);
            res.statusS(500).json({error: err});

        } );
        
    });  
        
      router.post('/', (req, res, next) => {
          
          const product= new Product({                        //constructor for product with javascript object
              _id: new mongoose.Types.ObjectId(),           //auto generated unique id 
              name: req.body.name,
              price: req.body.price
          });
          product
          .save()
          .then(result =>{
              console.log(result);
          })
          .catch(err => console.log(err));

        res.status(201).json ({
            message: 'handling POST reqs',
            createdProduct: product
        });
    });

    router.patch('/:prodID', (req, res, next) => {
        res.status(200).json ({
            message: 'update reqs'
        });
    }); 

    router.delete('/:prodID', (req, res, next) => {
        res.status(200).json ({
            message: 'deleted reqs'
        });
    }); 
    module.exports= router; 