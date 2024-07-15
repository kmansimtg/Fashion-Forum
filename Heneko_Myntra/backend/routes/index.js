// routes/index.js
const express = require('express');


const router = express.Router();
const questionRouter = require('./Question');
// const answerRouter = require('./Answer');

// Middleware for the root route
router.get('/', (req, res) => {
  res.send("This API is reserved for Heneko");
});

// Use your other routers
router.use("/questions", questionRouter);
// router.use('/answers', answerRouter);

module.exports = router;
