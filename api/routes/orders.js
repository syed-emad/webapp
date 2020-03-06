 const express= require('express');

const router=   express.Router();        //sub pckg of express to handle diff routes
const mongoose= require('mongoose');

const Order= require('../models/order');
const Product=require('../models/product');

router.get('/', (req, res, next) => {
    Order.find()
    .select('product quantity _id')
    .exec()
    .then(docs=>{
        res.status(200).json({
            count: docs.length,
            orders:docs.map(doc=>{
                return{
                    _id: doc._id,
                    quantity:doc.quantity,
                    request:{
                        type:'GET',
                        url: 'http://localhost:3001/orders/'+doc._id
                    }
                }
            })
        });
    })
    .catch(err=> {
        res.status(500).json({
            error:err
        });
    });
});  

router.post('/', (req, res, next) => {
Product.findById(req.body.prodID)
.then(product=>{
    if(!product){
        return res.status(404).json({
            message:"product not found"
        });
    }
    const order= new Order({
        _id:mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.prodID                      //check if we do have a product
    });
    return order
    .save();            //saving that product if it exists
    
    })
    .then(result =>{                   //the trying to execute it
            console.log(result);
            res.status(201).json({
                message:'order stored',
                createdOrder:{
                    _id: result._id,
                    product: result.product,
                    quantity:result.quantity
                },
                request:{
                    type:'GET',
                    url: 'http://localhost:3001/orders/'+result._id
                }
            });

    })
    .catch(err =>{               //if wrong id eused catch error here
        console.log(err);
        res.status(500).json({
            error: err
        });
        
    });
});  

router.get('/:orderID', (req, res, next) => {
    Order.findById(req.params.orderID)
    .exec()
    .then(order=>{
        if(!order){               //if order does not exist
            return res.status(404).json({
                message:"order not found"
            })
        }
        res.status(200).json({
            order:order,
            request:{
                type:'GET',
                url: 'http://localhost:3001/orders/'
            }
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err            //wrap error in error property
        })
    });
}); 

router.delete('/:orderID', (req, res, next) => {
    Order.remove({_id: req.params.orderID})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: "order deleted",
            request:{
                type:'POST',
                url: 'http://localhost:3001/orders/',
                body:{ prodID:'ID', quantity:"Number"}
            }
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err            //wrap error in error property
        })
    });
});   
module.exports = router;