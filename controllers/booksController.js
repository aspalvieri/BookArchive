const Book = require("../models/book.js");

exports.new = (req, res) => {
    res.render("books/new", {
        title: "New Book"
    });
};

exports.index = (req, res) => {
    Book.find()
        .then(books => {
            res.render("books/index", {
                books: books,
                title: "Book Archive"
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.show = (req, res) => {
    Book.findById({
            _id: req.params.id
        })
        .then(book => {
            res.render("books/show", {
                title: book.title,
                book: book
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.create = (req, res) => {
    Book.create(req.body.book)
        .then(() => {
            req.flash("success", "Your book was successfully created!");
            res.redirect("/");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.edit = (req, res) => {
    Book.findOne({
            _id: req.params.id
        })
        .then(book => {
            res.render("books/edit", {
                title: `Editing: ${book.title}`,
                book: book
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.update = (req, res) => {
    Book.updateOne({
            _id: req.body.id
        }, req.body.book, {
            runValidators: true
        })
        .then(() => {
            req.flash("success", `${req.body.book.title} was successfully updated!`);
            res.redirect("/");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.destroy = (req, res) => {
    Book.deleteOne({
            _id: req.body.id
        })
        .then(() => {
            req.flash("success", `The book was successfully deleted!`);
            res.redirect("/");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};
