const express=require('express');
const cors=require('cors')
const dataService=require('./services/dataService')
const app=express();

//to parse 
app.use(express.json())
app.listen(3000,()=>{
    console.log('listening to port 3000');
})
app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all prodcts 
app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    
})

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description)
    .then(
        (result)=>{
            res.status(result.statusCode).json(result)

        }
    )
})

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    
})
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
            
        }
    )
})