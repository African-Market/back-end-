const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./user/users-router');
// const Router = require('./event_planner/event-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(eventRouter);
// server.use(usersRouter);


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;
