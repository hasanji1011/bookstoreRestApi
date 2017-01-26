var mongoose = require('mongoose');

//Genre Schema
var bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get Boks 
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
};

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
};

//Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
};

//Update Book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        name: book.name,
        author: book.author,
        genre: book.genre
    }
    Book.findOneAndUpdate(query, update, options, callback);
};