const   mongoose            = require("mongoose"),
        uniqueValidator     = require("mongoose-unique-validator");

// Create schema for db
const Schema = mongoose.Schema;

// Create article scehma
const ArticleSchema = new Schema ({
    
    // title for article
    title: {
        type: String,
        required: true
    },
    //link to article
    link: {
        type:String,
        unique: true,
        required: true
    },
    
    // date is set when added to database
    date: {
        type: Date,
        default: Date.now
      },

});

// plugin to make articles unique
ArticleSchema.plugin(uniqueValidator);

// create article model
const Article = mongoose.model("Article" , ArticleSchema);

// export Article for other uses
module.exports = Article;