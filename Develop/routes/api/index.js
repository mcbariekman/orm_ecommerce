const router = require('express').Router(); // Import the Router class from Express.js and create a new router instance

// Import the route handlers for categories, products, and tags from their respective files
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount the imported route handlers onto the corresponding endpoints
router.use('/categories', categoryRoutes); // Mount category routes under '/categories' endpoint
router.use('/products', productRoutes); // Mount product routes under '/products' endpoint
router.use('/tags', tagRoutes); // Mount tag routes under '/tags' endpoint

module.exports = router; // Export the configured router for use in other parts of the application
