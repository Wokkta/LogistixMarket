const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket, BasketDevice } = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    { expiresIn: '24h' },
  );
};

class UserController {
  // переделать на норм регу,авторизацию

  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Please enter a valid email or password'));
    }

    // check if the user exists
    const curUser = await User.findOne({ where: { email } });
    if (curUser) {
      return next(ApiError.badRequest('User with that email already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ email, role, password: hashedPassword });
    const basket = await Basket.create({ userId: user.id });

    const token = generateJWT(user.id, user.email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.badRequest('User not found'));
    }

    let comparePasswords = bcrypt.compareSync(password, user.password);
    if (!comparePasswords) {
      return next(ApiError.badRequest(' Wrong password'));
    }

    const token = generateJWT(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
  async getAllBaskets(req, res, next) {
    const baskets = await Basket.findAll();
    return res.json(baskets);
  }
  async basket(req, res, next) {
    const { userId } = req.body;

    if (!userId) {
      return next(ApiError.badRequest('no user ID provided'));
    }
    const basket = await Basket.findOne({ where: { userId: userId } });
    if (!basket.id) {
      return next(ApiError.badRequest('no busket with that ID '));
    } else {
      const BasketDevices = await BasketDevice.findAll({ where: { BasketId: basket.id } });

      return res.json(BasketDevices);
    }
  }
  async addToBusket(req, res, next) {
    const { BasketId, deviceId } = req.body;
    if (!BasketId || !deviceId) {
      return next(ApiError.badRequest('wrong device id or basket id'));
    }
    const basketDevice = await BasketDevice.create({ BasketId, deviceId });
    return res.json(basketDevice);
  }
}
module.exports = new UserController();
