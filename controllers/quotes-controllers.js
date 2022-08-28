const HttpError = require("../models/http-error");
const DUMMY_QUOTES = [
  { id: "a1", auther: "Moshe", quote: "Hello!" },
  { id: "a2", auther: "David", quote: "Hello World!" },
];

const getQuotes = (req, res, next) => {
  if (!DUMMY_QUOTES) {
    return next(new HttpError("There is no Quotes to show...", 404));
  }
  res.json({ quotes: DUMMY_QUOTES });
};

module.exports.getQuotes = getQuotes;
