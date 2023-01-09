const db=require('./db')

//get all the product from db
const getProducts=()=>{
    return db.Product.find()
    .then(
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
const addtowishlist=(id,title,price,image,description)=>{
    //data addedto mongodb -create a model in db.js
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"product already exists"
                }
            }
            else{
                const newproduct=new db.Wishlist({id,title,price,image,description})
                newproduct.save()
                return{
                    status:false,
                    statusCode:404,
                    message:"product added to wishlist"
                }
            }
        }
    )
}
const getwishlist=()=>{
    return db.Wishlist.find().then(
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
                    message:"wishlist is empty"
                }
            }
        }
    )
}
module.exports={
    getProducts,
    addtowishlist,
    getwishlist
}