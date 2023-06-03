const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = async () => {
  try {
    // Bulk create the initial product tags
    await ProductTag.bulkCreate(productTagData);

    // Updating a product tag
    const productTagToUpdate = await ProductTag.findOne({
      where: { product_id: 1, tag_id: 7 },
    });

    if (productTagToUpdate) {
      // Update the tag_id value
      productTagToUpdate.tag_id = 9;
      await productTagToUpdate.save();
      console.log('Product tag updated successfully');
    }
  } catch (error) {
    console.error('Failed to seed product tags:', error);
  }
};

module.exports = seedProductTags;
