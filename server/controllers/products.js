const {Products,Users} = require("../models");



const Productscreate = async(req,res) => {
    try{
        req.body.userId = req.user.id
        const product = await Products.create(req.body)
        if(!product) res.status(400).json({"message":"Error al crear producto"})
        
    }catch(e){
        console.log(e.message)
        return res.status(400).json({e})
    }

}


const getAllProducts =  async(req,res) => {
    let allProducts = await Products.findAll({where:{},include:[
       {
           model:Users,
           as:"user"
       }
    ]})

    return res.status(200).json(allProducts);
}

const  getOneProduct = async(req,res) => {
    let getProduct = await Product.findOne({where:{id:req.params.id},include:[
        {
            model:Users,
            as:"user"
        }
     ]})
     
     return res.status(200).json(getProduct)
}


module.exports = {
    Productscreate,
    getAllProducts,
    getOneProduct
}