import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();

router.post('/', (req, res) => {
 console.log("REQ BODY", req.body);
  const { errors, isValid } = validateInput(req.body);

  if(!isValid){
    res.status(400).json(errors);
  }
});

export default router;
