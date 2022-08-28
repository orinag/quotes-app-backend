const express = require("express");

const router = express.Router();
const quotesControllers = require("../controllers/quotes-controllers");

router.get("/quotes", quotesControllers.getQuotes);


module.exports = router;
