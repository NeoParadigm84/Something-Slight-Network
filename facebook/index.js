// dependencies
// =============================================================
const express = require('express'),
      router = express.Router(),
      Article = require('../models/article');

// root route
router.get('/', function(req, res) {
    Article
        .find({})
        .where('saved').equals(false)
        .where('deleted').equals(false)
        .sort('-date')
        .limit(7)
        .exec(function(error, articles) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                console.log(articles);
                let hbsObj = {
                    title: 'All the News That\'s Fit to Scrape',
                    subtitle: 'ESPN NEWS SCRAPER',
                    articles: articles
                };
                res.render('index', hbsObj);
            }
        });
});

// require controllers
router.use('/api', require('./api'));

module.exports = router;