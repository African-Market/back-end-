const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usersModel = require("./users-model");
const secret = require('./secret')
const database = require('../data/config');

const saltRounds = 14;

router.post("/register", async (req, res, next) => {
  const { email, password, business_name } = req.body

  bcrypt.hash(password, saltRounds, async function(err, hash) {
    await database('users').insert([{ email, business_name, password: hash}])
    const newUser = await database.select('*').from('users').where({ email }).first()
    const token = jwt.sign({
      data: newUser
    }, secret.jwtSecret)
    req.session.currentUser = newUser

    return res.status(201).json({user: newUser, token })
  });
})

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body
  const user = await database.select('*').from('users').where({ email }).first()
  bcrypt.compare(password, user.password, function(err, result) {
    console.log('result: ', result);
    if (result) {
      const token = jwt.sign({
        data: user
      }, secret.jwtSecret)
      req.session.currentUser = user

      return res.status(201).json({user: user, token })
    } else {
      return res.status(500).json({error: 'incorrect email/passowrd combination'})
    }
  });
})

router.delete('/logout', async (req, res, next) => {
  req.session.currentUser = null
  return res.status(201).json({success: true})
})

module.exports = router
