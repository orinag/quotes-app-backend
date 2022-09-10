const express = require('express');

const router = express.Router();
const commentsControllers = require('../controllers/comments-controllers');

router.get('/:quoteId/comments', commentsControllers.getCommentsByQuoteId);
router.post('/:quoteId/add-comment', commentsControllers.addComment);

module.exports = router;
