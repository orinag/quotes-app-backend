const HttpError = require("../models/http-error");
const Quote = require("../models/quote");

const getQuotes = async (req, res, next) => {
  let quotes;
  try {
    quotes = await Quote.fetchAll();
  } catch (err) {
    return next(new HttpError(err.sqlMessage, 404));
  }

  res.json({ quotes: quotes[0] });
};

const getSingleQuote = (req, res, next) => {
  const quoteId = req.params.quoteId;
  const singleQuote = DUMMY_QUOTES.find((quote) => quoteId === quote.id);

  if (singleQuote === undefined) {
    return next(new HttpError("Can't found quote id...", 404));
  }
  res.json({ singleQuote });
};

const addQuote = async (req, res, next) => {
  const author = req.body.author;
  const content = req.body.content;
  const newQuote = new Quote(null, author, content);

  try {
    await newQuote.save();
  } catch (err) {
    return next(new HttpError(err, 404));
  }

  res.json({ quote: newQuote });
};

module.exports.getQuotes = getQuotes;
module.exports.getSingleQuote = getSingleQuote;
module.exports.addQuote = addQuote;
