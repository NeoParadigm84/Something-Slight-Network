
// dependencies
// =============================================================
const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article'),
      ArticleNPR = require('../../models/article'),
      Note = require('../../models/note');

router.get('/', function(req, res) {
    res.status(200).send('<a href=\'/api/articles/\'>articles</a><br><a href=\'/api/notes/\'>notes</a>');
});

router.get('/', function(req, res) {
    res.status(200).send('<a href=\'/api/articlesNPR/\'>articlesNPR</a>');
});

router.use('/articles', require('./articles'));
router.use('/articlesNPR', require('./articlesNPR'));
// router.use('/notes', require('./notes'));

module.exports = router;