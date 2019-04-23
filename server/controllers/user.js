const {Users,Compras} = require('../models');
const createToken = require('../resolvers/createToken');


const signUp = async(req,res) => {
    let user = await Users.create(req.body).catch((error)=> res.status(400).json({error}))

    if(!user) return res.status(400).json({message:"Couldn't create user"})

    return res.status(201).json({message:"User created",id:user.id})
}


const logIn =  async(req,res) => {

    let user =  await Users.find({where:{email:req.body.email}})
    if(!user) return res.status(404).json({"message":"User does not exist"})

    user.comparePassword(req.body.password).then(async(result) => {
        if(result){
            let token  = await createToken(user)
            return res.status(200).json({"message":"User logged successfully",token})
        }else{
            return res.status(400).json({"message":"Password is incorrect"})
        }

    }).catch((err) => console.log(err))
}


const me = async(req,res)=>{

    const profile = await Users.findOne(
        {where:{id:req.user.id},
        attributes:{exclude:["password"]},
        include:[
            {   
                model:Compras,
                as:"compras"
            }
        ]
    }
    )

    if(!profile) res.status(404).json({message:"User not found"})

    res.status(200).json(profile)

}

module.exports = {
    signUp,
    logIn,
    me
}
