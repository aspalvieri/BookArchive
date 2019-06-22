const router = require("express").Router();

const booksController = require("../controllers/booksController.js");

router.get("/new", booksController.new);
router.get("/", booksController.index);
router.get("/:id", booksController.show);
router.get("/:id/edit", booksController.edit);

router.post("/", booksController.create);
router.post("/update", booksController.update);
router.post("/destroy", booksController.destroy);

module.exports = router;