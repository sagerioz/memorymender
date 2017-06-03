import express from 'express';
import User from '../models/user';
let router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(user => {
    if(user) {
     if(bcrypt.compareSync(password, user.get('password_digest'))){
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.jwtSecret);
        console.log({token});
        res.json({token});
     }else{
       res.status(401).json({ errors: { form: 'Invalid credentials'}})
     }

    }else{
      res.status(401).json({ errors: { form: 'Invalid credentials'}})
    }
  });
});
export default router;
