const express= require('express');
const mongoose= require('mongoose');
const multer= require('multer');

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file,cb){
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter= (req, file, cb)=>{       //storing the files in correct format as u like
    //reject a file
    if(file.mimetype=== 'image/jpeg' || file.mimetype==='image/png'){
        cb(null,true);
    } else{
        cb(null,false);
    }
 
};

const upload= multer({
    storage: storage, 
    limits:{
    fileSize: 1024 * 1024 * 5
},
    fileFilter:fileFilter

});

const Product= require('../models/product');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    Product.find()
    .select('name price _id productImage')     //to just get name, price and id from db,nothing else
    .exec()
    .then(docs => {
        const response={                   //to have only relevant info displayed
            count: docs.length, 
            product: docs.map(doc =>{        
                return {
                    name: doc.name,
                    price: doc.price,
                    productImage: doc.productImage,
                    _id:doc._id,
                    request: {                //extra info that u want to display
                        type:'GET',
                        url: 'http://localhost:3001/products/'+ doc._id

                    }
                }
            })
        } 

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
        .select('name price _id productImage')
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
                 //upload.single means pasre only 1 file
      router.post('/',  upload.single('productImage'), (req, res, next) => {
          
          const product= new Product({                        //constructor for product with javascript object
              _id: new mongoose.Types.ObjectId(),           //auto generated unique id 
              name: req.body.name,
              price: req.body.price,
              productImage: req.file.path
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