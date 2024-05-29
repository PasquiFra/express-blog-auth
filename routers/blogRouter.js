const express = require("express");
const router = express.Router();

// Import controllers e middlewares
const blogController = require("../controller/blog.js");
const authController = require('../controller/auth.js');
const isPostExisting = require('../middlewares/isPostExisting.js');

const multer = require("multer");
const uploader = multer({ dest: "public/img" });

// Questo è il router di /posts

router.get("/", blogController.index);
router.post("/", uploader.single("image"), authController.createPost, blogController.create);
router.get("/:slug", blogController.show);
router.delete("/:slug", isPostExisting, blogController.destroy);

module.exports = router;