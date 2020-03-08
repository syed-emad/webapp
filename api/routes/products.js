const express= require('express');
const mongoose= require('mongoose');
const Product= require('../models/product');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    Product.find()
    .select('name price _id')  
    .exec()
    .then(docs => {
        const response={                   //to have only relevant info displayed
            count: docs.length, 
            product: docs.map(doc =>{        
                return {
                    name: doc.name,
                    price: doc.price,
                    _id:doc._id,
                    request: {                //extra info that u want to display
                        type:'GET',
                        url: 'http://localhost:3001/products/'+ doc._id

                    }
                }
            })
        } 
        //console.log(docs);
        // if(docs.length >=0){
            res.status(200).json(response);
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
        .select('name price _id')
        .exec()
        .then(doc => {
            console.log("from database",doc);
            
            if(doc){
                res.status(200).json({
                    product:doc,
                    request:{
                        type:'GET',
                        description: 'GET_ALL_PRODUCTS',
                        url: 'http://localhost:3001/products/'

                    }
                });
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
                message: 'created product sucessfully',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    request: {                //extra info that u want to display
                        type:'GET',
                        url: 'http://localhost:3001/products/'+ result._id

                    }
                }
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
            res.status(200).json({
                message: 'Product updated',
                request:{
                    type:'GET',
                    url: 'http://localhost:3001/products/'+ id
                }
            });
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
        res.status(200).json({
            message:'product deleted',
            request:{
             type: 'POST',
             url:'http://localhost:3001/products',
             body:{name :'String', price: 'Number'}
            }
        });
       })
       .catch(err => {
           console.log(err); 
           res.status(500).json({
               error:err
           });
       });
    }); 
    module.exports= router; 