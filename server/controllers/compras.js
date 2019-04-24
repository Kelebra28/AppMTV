const {Products,Compras} = require('../models');

const calculatePrice = async(req,res) => {

    const product =  await Products.findById(productId)
    if(!product) res.status.json({message:"El producto no exite"});

    const count_compra = await Compras.count({where:{
        productId:productId
    }})

    if(count_compra != 0) res.status(400).json({message:"El producto ya esta vendido"})

    let price =   product.price + product.price

    res.status(200).json({price:price,message:"Precio calculado correctamente"})


}


const createCarrito = async(req,res) => {

    req.body.userId = req.user.id
    const carrito =  await Compras.create(req.body)
            .catch(e=>res.status(400).json(e))
    if(!carrito) res.status(400).json({message:"Problema para añadir el producto"})

    res.status(200).json({message:"Producto añadido",id:product.id})

}

module.exports = {
    calculatePrice,
    createCarrito
}
