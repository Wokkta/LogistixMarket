const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRoute');
const brandRouter = require('./brandRoute');
const typeRouter = require('./typeRoute');
const userRouter = require('./userRoute');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
