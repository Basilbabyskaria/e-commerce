const db=require('./db')

//get all the product from db
const getProducts=()=>{
    return db.Product.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }else{
            return{
                status:false,
                statusCode:404,
                message:'no product found'
            }
        }
    })
}
module.exports={
    getProducts
}