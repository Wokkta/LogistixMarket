const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, UserController.check);
router.get('/basket', UserController.getAllBaskets);
router.post('/basket', UserController.basket);
router.post('/addToBusket', UserController.addToBusket);
module.exports = router;
