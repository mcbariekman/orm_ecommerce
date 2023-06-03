const router = require('express').Router();
const { ProductTag } = require('../../models');

// Get all product tags
router.get('/', async (req, res) => {
  try {
    const productTags = await ProductTag.findAll();
    res.json(productTags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve product tags' });
  }
});

// Get a single product tag by ID
router.get('/:id', async (req, res) => {
  try {
    const productTag = await ProductTag.findByPk(req.params.id);
    if (!productTag) {
      res.status(404).json({ error: 'Product tag not found' });
      return;
    }
    res.json(productTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve product tag' });
  }
});

// Create a new product tag
router.post('/', async (req, res) => {
  try {
    const productTag = await ProductTag.create(req.body);
    res.status(201).json(productTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product tag' });
  }
});

// Update a product tag
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await ProductTag.update(req.body, {
      where: { id: req.params.id },
    });
    if (affectedRows === 0) {
      res.status(404).json({ error: 'Product tag not found' });
      return;
    }
    res.json({ message: 'Product tag updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update product tag' });
  }
});

// Delete a product tag
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductTag = await ProductTag.destroy({
      where: { id: req.params.id },
    });
    if (deletedProductTag === 0) {
      res.status(404).json({ error: 'Product tag not found' });
      return;
    }
    res.json({ message: 'Product tag deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete product tag' });
  }
});

module.exports = router;
