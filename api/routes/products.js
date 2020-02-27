const express= require('express');

const router=   express.Router();        //sub pckg of express to handle diff routes

router.get('/', (req, res, next) => {
    res.status(200).json ({
        message: 'handling GEt reqs'
    });
});  
      //to get incoming requests, first param is url
      router.get('/:prodID', (req, res, next) => {
        const id= req.params.prodID;
        if (id==='special'){
            res.status(200).json ({
                message: 'specil id',
                id : id
            });
        } else {
                res.status(200).json ({
                    message: 'norml id',
                    id: id
                }); 
            }
        
        
    });  
        
      router.post('/', (req, res, next) => {
        res.status(201).json ({
            message: 'handling POST reqs'
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