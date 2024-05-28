const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categories");

/**
 * POST /api/blogs
 */
router.post("/", (req, res) => {
  CategoryController.createCagtegories(req, res);
});

/**
 * GET /api/blogs
 */
router.get("/", (req, res) => {
  CategoryController.getCategories(req, res);
});

/**
 * Get blogs by blogID
 * GET /api/blogs/:id
 */
router.get("/:id", (req, res) => {
  CategoryController.updateCategoryByID(req, res);
});

/**
 * Put /api/blogs/
 */
router.put("/:id", (req, res) => {
  CategoryController.updateCategoryByID(req, res);
});

/**
 * DELETE /api/blogs/
 */
router.delete("/:id", (req, res) => {
  CategoryController.deleteCategoryByID(req, res);
});

module.exports = router;