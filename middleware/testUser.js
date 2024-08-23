import { BadRequestError } from '../errors/index.js';

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Test User - limitation applied!!');
  }
  next();
};

export default testUser;
