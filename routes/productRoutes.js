const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post("/create", productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a specific product
router.get('/:id', productController.getProductById);

// Update a product quantity
router.put('/:id/update_quantity', productController.updateProductQuantity);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
