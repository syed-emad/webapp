const express= require('express');
const mongoose= require('mongoose');
const Product= require('../models/product');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        // if(docs.length >=0){
            res.status(200).json(docs);
        // } else{
        //     res.status(404).json({
        //         message:'empty array'
        //     });
        // }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
});  
      //to get incoming requests, first param is url
      router.get('/:prodID', (req, res, next) => {
        const id= req.params.prodID;
        Product.findById(id)
        .exec()
        .then(doc => {
            console.log("from database",doc);
            
            if(doc){
                res.status(200).json(doc);
            }
            else{
                res.status(404).json({message :'No valid entry found in database'});
            }
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
              res.status(201).json ({
                message: 'handling POST reqs',
                createdProduct: result
            });
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({
                  error:err
              });
          });

       
    });

    router.patch('/:prodID', (req, res, next) => {
        const id= req.params.prodID;
        const updateOps={};
      for(const ops of req.body ){                 //dynmic approach: can change just name or price or both or nothing
          updateOps[ops.propName]=ops.value;       //does not allow adding new properties, only the ones described already in the schema
      }                                            //so if u try to add new property like isbn then wont patch it in the database
        Product.update({_id:id}, {$set : updateOps})
        .exec()
        .then(result =>{
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err); 
            res.status(500).json({
                error:err
            });
        });

        // res.status(200).json ({
        //     message: 'update reqs'
        // });
    }); 

    router.delete('/:prodID', (req, res, next) => {
      const id= req.params.prodID;
      
        Product.remove({_id:id})
       .exec()
       .then(result =>{
           res.status(200).json(result);
       })
       .catch(err => {
           console.log(err); 
           res.status(500).json({
               error:err
           });
       });
    }); 
    module.exports= router; 