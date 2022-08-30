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

const getAllQuotes = async (req, res, next) => {
  Quote.fetchAll()
    .then(([rows, dataFiles]) => {
      console.log(rows);
      res.json({ quotes: rows });
    })
    .catch((err) => {});
  let quotes;

  try {
    quotes = await User.findById(userId);
  } catch (err) {
    return next(new HttpError("can't fetch user", 500));
  }
  if (!user) {
    return next(new HttpError("can't found user cart", 404));
  }
  res.status(200).json(user.cart);
};

module.exports.getQuotes = getQuotes;
module.exports.getSingleQuote = getSingleQuote;
