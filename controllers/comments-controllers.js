const HttpError = require('../models/http-error');
const Comment = require('../models/comment');

const getCommentsByQuoteId = (req, res, next) => {
  const qid = req.params.quoteId;

  Comment.findAll({ where: { quoteId: qid } })
    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addComment = (req, res, next) => {
  const qid = req.params.quoteId;
  const { name } = req.body;
  const { content } = req.body;
  Comment.create({ name, content, quoteId: qid })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getCommentsByQuoteId = getCommentsByQuoteId;
module.exports.addComment = addComment;
