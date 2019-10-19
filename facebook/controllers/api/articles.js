const express = require('express'),
      router = express.Router(),
      request = require('request'),
      cheerio = require('cheerio'),
      Article = require('../../models/article');
     

// get all articles from database
router.get('/articles', function(req, res) {
    Article
        .find({})
        .limit(7)
        .exec(function(error, docs) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                res.status(200).json(docs);
            }
        });
});


// scrape articles
router.get('/scrape', function(req, res, next) {

    request('http://www.espn.com/espn/latestnews', function(error, response, html) {
        let $ = cheerio.load(html);
        let results = [];
        $("ul.inline-list.indent li a").each(function(i, e) {
            let title = $(this).text(),
            link = $(this).attr('href'),
            single = {};

            if (link !== undefined && link.includes('http') &&  title !== '') {
                single = {
                    title: title,
                    link: link
                };
                // create new article
                let entry = new Article(single);
                // save to database
                entry.save(function(err, doc) {
                    if (err) {
                        if (!err.errors.link) {
                            console.log(err);
                        }
                    } else {
                        console.log('new article added');
                        
                    }
                });
            }
        });
        console.log(response);
        next();
    });
}, function(req, res) {
    res.redirect('/');
});

module.exports = router;
