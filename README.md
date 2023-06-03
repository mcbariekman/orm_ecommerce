# E-Commerce Express.js API

This is a functional Express.js API for an e-commerce application. It allows you to manage categories, products, and tags in a MySQL database. The API utilizes Sequelize as the ORM tool for interacting with the database, providing you with a seamless data handling experience. With this API, you can perform CRUD operations on categories, products, and tags using RESTful API routes.

This project is based on the fantastic-umbrella project by [Coding Boot Camp](https://github.com/coding-boot-camp/fantastic-umbrella). 

## Features

- Seamless connection to MySQL database using Sequelize
- Database schema creation and data seeding
- Synchronization of Sequelize models with the MySQL database
- API routes for GET, POST, PUT, and DELETE operations on categories, products, and tags
- Formatted JSON responses for GET routes in Insomnia Core
- Successful creation, update, and deletion of data in the database

## Screenshot
![Screenshot](/assets/screenshot.png)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mcbariekman/e-commerce-express-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-express-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Specify the following environment variables in the `.env` file:
     - `DB_NAME`: The name of your MySQL database
     - `DB_USER`: Your MySQL username
     - `DB_PASSWORD`: Your MySQL password

5. Run the database schema and seed commands:

   ```bash
   npm run db:setup
   ```

   This will create the development database and seed it with test data.

6. Start the application:

   ```bash
   npm start
   ```

   The application will start running on `http://localhost:3001`.

## API Routes

- Categories:
  - GET all categories: `GET /api/categories`
  - GET a specific category: `GET /api/categories/:id`
  - CREATE a new category: `POST /api/categories`
  - UPDATE a category: `PUT /api/categories/:id`
  - DELETE a category: `DELETE /api/categories/:id`

- Products:
  - GET all products: `GET /api/products`
  - GET a specific product: `GET /api/products/:id`
  - CREATE a new product: `POST /api/products`
  - UPDATE a product: `PUT /api/products/:id`
  - DELETE a product: `DELETE /api/products/:id`

- Tags:
  - GET all tags: `GET /api/tags`
  - GET a specific tag: `GET /api/tags/:id`
  - CREATE a new tag: `POST /api/tags`
  - UPDATE a tag: `PUT /api/tags/:id`
  - DELETE a tag: `DELETE /api/tags/:id`

Make sure to replace `:id` with the actual ID of the category, product, or tag you want to retrieve, update, or delete.

## Testing with Insomnia Core

To test the API routes, you can use a tool like Insomnia Core:

1. Download and install Insomnia Core from the official website: <https://insomnia.rest/download>.

2. Launch Insomnia Core and create a new workspace.

3. Set up requests for the API routes using the base URL `http://localhost:3001/api`.

4. Send requests to the respective routes to interact with the categories, products, and tags.

## License

This project is licensed under the MIT License. See the

 [LICENSE](LICENSE) file for more information.
