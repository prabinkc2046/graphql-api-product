# GraphQL Product API

This project implements a GraphQL API for managing products, including CRUD operations (Create, Read, Update, Delete).

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/prabinkc2046/graphql-api-product.git

2. Install dependencies

npm install

3. Start the server:

npm start

4. Access the GraphQL playground:

Visit http://localhost:4000/ in your browser

## Features

- Query for all products
- Query for a specific product by ID
- Add a new product
- Update an existing product
- Delete a product

## Directory Structure

- `setUpDatabase.js`: Defines the database schema, creates the `Product` model, and populates the database with sample data.
- `server.js`: Implements the GraphQL server with Apollo Server. Defines the GraphQL schema and resolvers.

## Dependencies

- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `apollo-server`: Implementation of the GraphQL server based on the Apollo platform.
- `


