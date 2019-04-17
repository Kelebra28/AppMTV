const {Products,Compras} = require('../models');

const calculatePrice = async(req,res) => {

    const product =  await Products.findById(productId)
    if(!product) res.status.json({message:"Products does not exist"});

    const count_booking = await Bookings.count({where:{
        start_date:{
            $between:[date_init,date_due]
        },
        houseId:houseId
    }})

    if(count_booking != 0) res.status(400).json({message:"The house is already booked"})

    let price =  dayDiff *  house.price

    res.status(200).json({price:price,message:"Booking price calculated correctly"})


}



const createBooking = async(req,res) => {

    req.body.userId = req.user.id
    const booking =  await Bookings.create(req.body)
            .catch(e=>res.status(400).json(e))
    if(!booking) res.status(400).json({message:"Promblems to create booking"})

    res.status(200).json({message:"Booking created",id:booking.id})

}


module.exports = {
    calculatePrice,
    createBooking
}
