const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Get all products
router.get('/', async (req, res) => {
  try {
    // Retrieve all products and include associated category and tags
    const products = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }],
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Get one product
router.get('/:id', async (req, res) => {
  try {
    // Retrieve a single product by ID and include associated category and tags
    const product = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }],
    });
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    // Create a new product with the provided data
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      // If tag IDs are provided, create the associations between the product and tags
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    // Update the product with the provided data
    const [affectedRows] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (affectedRows === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    if (req.body.tagIds && req.body.tagIds.length) {
      // Handle tag associations for the updated product
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
      await Promise.all([
        // Remove existing tag associations not present in the updated data
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        // Create new tag associations based on the updated data
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    // Delete a product by ID
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deletedProduct === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Delete the hoodie
router.delete('/hoodie', async (req, res) => {
  try {
    // Find the hoodie product by its name
    const hoodie = await Product.findOne({
      where: { product_name: 'Hoodie' },
    });
    if (!hoodie) {
      res.status(404).json({ error: 'Hoodie not found' });
      return;
    }
    // Delete the hoodie product
    await Product.destroy({
      where: { id: hoodie.id },
    });
    res.json({ message: 'Hoodie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete hoodie' });
  }
});

// Handle the DELETE request to delete the "Hoodie" product:

// Find the "Hoodie" product by its name.
// If the "Hoodie" product is not found, return a 404 error.
// Delete the "Hoodie" product from the database.
// Return a success message if the "Hoodie" product was deleted successfully.
// Handle any errors that occur during the deletion process.

module.exports = router;
