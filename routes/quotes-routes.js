const express = require("express");

const router = express.Router();
const quotesControllers = require("../controllers/quotes-controllers");

router.get("/quotes", quotesControllers.getQuotes);
router.get("/:quoteId", quotesControllers.getSingleQuote);
router.post("/add-quote", quotesControllers.addQuote);
router.delete("/:quoteId/delete-quote", quotesControllers.deleteQuote);

module.exports = router;
