const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {calculatePriceValidation} = require("../middlewares/validations")
const {signUp,logIn,me} =  require("../controllers/user");
const {Productscreate,getAllProducts,getOneProduct} =  require("../controllers/products");
const {calculatePrice,createCarrito} = require('../controllers/compras');

//router.use('/users/',require('./user'));

router.post('/users/signup',signUp);
router.post('/users/login',logIn);
router.get('/users/me',isAuthenticated,me);


router.post('/products',isAuthenticated,Productscreate);
router.get('/products',getAllProducts);
router.get('/products/:id',getOneProduct);


router.post('/carrito/calculate',calculatePriceValidation,calculatePrice);
router.post('/carrito',isAuthenticated,createCarrito);


module.exports = router;

//Productscreate,
//getAllProducts,
//getOneProduct
