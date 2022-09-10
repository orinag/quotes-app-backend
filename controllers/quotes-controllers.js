const HttpError = require('../models/http-error');
const Quote = require('../models/quote');

const getQuotes = (req, res, next) => {
  Quote.findAll()
    .then((quotes) => {
      console.log(quotes);
      res.json({ quotes });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSingleQuote = (req, res, next) => {
  const { quoteId } = req.params;
  Quote.findByPy().then((quote) => {
    res.json({ ss }).catch((err) => {
      console.log('err');
    });
  });
};

const addQuote = async (req, res, next) => {
  const { author } = req.body;
  const { content } = req.body;

  Quote.create({
    author,
    content,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteQuote = (req, res, next) => {
  const { quoteId } = req.params;

  Quote.findByPk(quoteId)
    .then((quote) => {
      quote.destroy();
    })
    .then((result) => {
      res.json({ msg: 'DELETED!' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getQuotes = getQuotes;
module.exports.getSingleQuote = getSingleQuote;
module.exports.addQuote = addQuote;
module.exports.deleteQuote = deleteQuote;
