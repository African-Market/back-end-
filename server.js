const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./user-res/users-router');
const itemsRouter = require('./item-routes/items-router');
const server = express();
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const store = new KnexSessionStore(/* options here */); // defaults to a sqlite3 database

server.use(
  session({
    secret: 'keyboard cat',
    cookie: {
      maxAge: 3000000, // 30 seconds for testing
    },
    store,
  }),
);

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(usersRouter);
server.use(itemsRouter);


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = { server }
