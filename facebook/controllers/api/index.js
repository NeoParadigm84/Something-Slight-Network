// dependencies
// =============================================================
const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article');

router.get('/', function(req, res) {
    res.status(200).send('<a href=\'/api/articles/\'></a><br><a href=\'/api/notes/\'></a>');
});
// NPR articles
router.get('/', function(req, res) {
    res.status(200).send('<a href=\'/api/articlesNPR/\'>articlesNPR</a>');
});

router.use(require('./articles'));
router.use('/articlesNPR', require('./articlesNPR'));


module.exports = router;