const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser =require('../middleware/fetchuser')


router.post('/createuser', [
  body('name', 'enter a valid name').isLength({ min: 3 }),
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Password must be of length 5').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {

    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists.." })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const jwtData = jwt.sign(data, "param");
    res.json({ jwtData });
  } catch (error) {
    console.log(error.message)
  }
})
router.post('/login', [
  body('email', 'enter a valid email').isEmail(),
  body('password', 'Password must be of length 5').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: "sorry user doesn't exists" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "sorry user doesn't exists" });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const jwtData = jwt.sign(data, "param");
    res.json({ jwtData });
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Sorry, Some error occured");
  }
});

//Route-3 get logged in user details 
router.post('/getuser',fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Sorry, Some error occured");
  }
})
module.exports = router