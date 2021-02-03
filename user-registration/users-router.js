const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const secrets = require("./secret")



router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!req.body.username) {
      return res.status(400).json({
        errorMessage: "username is Missing"
      });
  }
