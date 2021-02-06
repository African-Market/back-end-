const jwt = require("jsonwebtoken")
const constant = require("./secret")

function restrict() {
	return async (req, res, next) => {
		if (process.env.NODE_ENV === 'test') return next()

		const { currentUser } = req.session
		const token = req.headers.authorization

	  jwt.verify(token, constant.jwtSecret, (err, decoded) => {
			if (currentUser && decoded.data.email === currentUser.email) {
				next()
			} else {
				return res.status(401).json({error: 'user not authenticated'})
			}
	  })
	}
}

module.exports = restrict

		// const secret = constant.jwtSecret;
		// const authError = {
		// 	message: "Access Denied",
		// }
		//
		// try {
    //   const token = req.headers.authorization
    //   if (!token) {
    //     return res.status(401).json(authError)
    //   }
    //   jwt.verify(token, secret, (err, decoded) => {
    //     if (err) { return res.status(401).json(authError)
    //   }
		//
		// 	next()
		// }) } catch (err) {
		// 	next(err)
		// }
