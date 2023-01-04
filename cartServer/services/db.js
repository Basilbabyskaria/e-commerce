const mongoose =require('mongoose');
//connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
console.log('connected to mongodb');
})
//model creatin

const Product=mongoose.model('product',{
    id:Number,
    title:String,
    price:String,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

//export
module.exports={
    Product
}