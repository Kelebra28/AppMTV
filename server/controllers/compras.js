const {Products,Compras} = require('../models');

const calculatePrice = async(req,res) => {

    const product =  await Products.findById(productId)
    if(!product) res.status.json({message:"Products does not exist"});

    const count_compra = await Compras.count({where:{
        productId:productId
    }})

    if(count_compra != 0) res.status(400).json({message:"The product is already sell"})

    let price =   product.price + product.price

    res.status(200).json({price:price,message:"Price calculated correctly"})


}


const createCarrito = async(req,res) => {

    req.body.userId = req.user.id
    const carrito =  await Compras.create(req.body)
            .catch(e=>res.status(400).json(e))
    if(!carrito) res.status(400).json({message:"Promblems to add products"})

    res.status(200).json({message:"Products adds",id:product.id})

}

module.exports = {
    calculatePrice,
    createCarrito
}
