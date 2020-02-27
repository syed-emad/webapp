const express= require('express');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    res.status(200).json ({
        message: 'orders fetched'
    });
});  

router.post('/', (req, res, next) => {
    const order= {
            productId: req.body.productId,
            quantity: req.body.quantity
    }
    res.status(201).json ({
        message: 'orders created',
        createdOrder: order
    });
});  

router.get('/:orderID', (req, res, next) => {
    res.status(200).json ({
        message: 'order detils',
        orderID: res.params.orderID
    });
}); 

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json ({
        message: 'deleted order',
        orderID: res.params.orderID
    });
});   
module.exports = router;