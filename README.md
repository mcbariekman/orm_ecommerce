# ORM E-commerce Back End

## Description

This is the server-side part of a website where people can buy things online. It allows users to browse products by category, add new products to the database, and edit or delete existing products. The application uses a tool called Sequelize to connect to a database of products, and it provides a way for other software to communicate with it by using a set of standardized rules called RESTful API.

The server is built using several technologies, including Node.js, Express.js, Sequelize, and MySQL2. It has different parts that handle different tasks, like keeping track of products and categories, and making sure data is formatted correctly.

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal in the root directory of the project and run `npm install` to install the required dependencies.
3. Set up a MySQL database and create a `.env` file in the root directory of the project with the following content:

   ```
   DB_NAME=ecommerce_db
   DB_USER=root
   DB_PASSWORD=your_password_here
   DB_HOST=localhost
   ```

   Replace `your_password_here` with your actual MySQL password.

4. Run `npm run seed` to seed the database with test data.
5. Run `npm start` to start the server.

The server should now be running at `http://localhost:3001`.

## Usage

The application provides the following routes for accessing the data:

- `GET /api/products` - get all products
- `GET /api/products/:id` - get a single product by ID
- `POST /api/products` - create a new product
- `PUT /api/products/:id` - update a product by ID
- `DELETE /api/products/:id` - delete a product by ID

- `GET /api/categories` - get all categories
- `GET /api/categories/:id` - get a single category by ID
- `POST /api/categories` - create a new category
- `PUT /api/categories/:id` - update a category by ID
- `DELETE /api/categories/:id` - delete a category by ID

- `GET /api/tags` - get all tags
- `GET /api/tags/:id` - get a single tag by ID
- `POST /api/tags` - create a new tag
- `PUT /api/tags/:id` - update a tag by ID
- `DELETE /api/tags/:id` - delete a tag by ID

All requests and responses are in JSON format.

## Contributing

If you would like to contribute to the project, you can fork the repository, make your changes, and submit a pull request. Please include a detailed description of your changes and the problem they solve.

## Credits

This project was created by [OpenAI](https://openai.com/) based on a starter code provided by the University of Washington Full-Stack Web Development program.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).