const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categories");

/**
 * POST /api/categories
 */
router.post("/", (req, res) => {
  CategoryController.createCagtegories(req, res);
});

/**
 * GET /api/categories
 */
router.get("/", (req, res) => {
  CategoryController.getCategories(req, res);
});

/**
 * Get categories by blogID
 * GET /api/categories/:id
 */
router.get("/:id", (req, res) => {
  CategoryController.getCategoryByID(req, res);
});

/**
 * Put /api/categories/
 */
router.put("/:id", (req, res) => {
  CategoryController.updateCategoryByID(req, res);
});

/**
 * DELETE /api/categories/
 */
router.delete("/:id", (req, res) => {
  CategoryController.deleteCategoryByID(req, res);
});

module.exports = router;