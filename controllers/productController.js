const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get a specific product
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the product' });
  }
};

// Update a product quantity
exports.updateProductQuantity = async (req, res) => {
  try {
    const productId = req.params.id;
    const quantityChange = parseInt(req.query.number); // Parse the query parameter as an integer

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the quantity based on the query parameter
    if (!Number.isNaN(quantityChange)) {
      product.quantity = quantityChange;
      await product.save();

       res.json({
        product: {
          id: product._id,
          name: product.name,
          quantity: product.quantity
        },
        message: 'Updated successfully'
      });
    } else {
      return res.status(400).json({ error: 'Invalid quantity change value' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update the product quantity' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    // res.json(product);
    res.json({ message: "Requested Product Deleted Successfully!" });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the product' });
  }
};
