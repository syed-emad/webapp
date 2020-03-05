 //start: nodemon server.js(package.json) helps restart the server automatically w/o running npm start

const express = require('express'); //imporitng express
const morgan = require('morgan');  //importing morgan which is a logging pckg, shows log on terminal
const bodyParser= require('body-parser'); //parses body of incoming requests(does not support files) nd makes them readable
const mongoose = require('mongoose');  //mongo db pckge
const app = express();
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

mongoose.connect('mongodb+srv://node-api:'+ process.env.MONGO_ATLAS_PW +'@cluster0-qzcg0.mongodb.net/test?retryWrites=true&w=majority' ,
{   useNewUrlParser: true,
    useUnifiedTopology: true 
}

);
mongoose.Promise=global.Promise;

//app.use sets up a middlewre,everything psses thru it
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', '*');  //* means allow aaccessto all to avoid cors error
       res.header('Access-Control-Allow-Headers', '*');
       if(req.method=='OPTIONS'){
           res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,PATCH');
           return res.status(200).json({});
       }
       next();
    }

);

app.use('/products', productRoutes);    //goes to page products
app.use('/orders',orderRoutes); 

app.use((req, res, next) => {
       const error= new Error('not found');
       error.status(404);
       next(error);

});

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    });

});
module.exports= app;
// GET, POST, PUT, DELETE

//Replace with DB
/*const data = [
    {name: "Saif", age: 23},
    {name: "A", age: 22},
    {name: "B", age: 21},
    {name: "C", age: 20},
];
    
// GET
app.get('/', (req, res) =>{
    // <p> My name is {res.body.description}</p>
   
    res.body.description
    res.send("welcome to Home page");
});

app.get('/api/persons', (req, res) =>{
    res.send(data);
});

app.get('/api/person/:name', (req, res) =>{
    const result = data.find(c => c.name === req.params.name);
    res.send(result);
});

// POST
app.post('/api/persons', (req, res) =>{
    const temp = {name: req.body.name, age: req.body.age};
    data.push(temp); //replace woth db insert query
    res.send(data);
});

//PUT
app.put('/api/person/:name', (req, res) =>{
    const result = data.find(c => c.name === req.params.name);
    result.age = req.body.age;
    res.send(result);
});

//Delete
app.delete('/api/person/:num', (req, res) =>{
    data[req.params.num] = null;
    res.send(data);
});

app.listen(3001, ()=> { console.log("Server started on port 3001")});
*/