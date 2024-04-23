//imports
const mongoose = require('mongoose');
const { populateDatabase, Product } = require('./setUpDatabase');
const { ApolloServer, gql } = require('apollo-server');

//connect to database and  populate the DB
mongoose.connect('mongodb://192.168.20.7:27017/product-db')
.then ( () => {
console.log("DB connection successfull.")
//populateDatabase();
})

//Design schema
const typeDefs = gql`
type Query {
	products: [Product],
	product(id: ID!): Product,
}

type Product {
	id: ID!
	name: String!
    price: Float!
    description: String!
    category: String!

}

type Mutation {
addProduct(name: String!, price: Float!, description: String!, category: String!): Product,
updateProduct(id: ID!, name: String, price: Float, description: String, category: String): Product,
deleteProduct(id: ID!): Product,
}
`;

// resolvers
const resolvers = {
	Query: {
		products: async () => {
    		try {
        		const products = await Product.find();
        		return products;
    		} catch(error) { 
        		console.error("Error fetching list of products", error);
        		//throw new Error("Error fetching list of products");
    		}
		},

		product: async(_,{ id }) => {
			try {
				const product = await Product.findById(id);
				return product;
			} catch(error){
				console.error("Error fetching specific product");
				throw new Error("Error fetching specific product");
			}
		},

	},
	Mutation: {
	addProduct: async (_, args) => {
		try{
			const newProduct = await Product.create(args);
			return newProduct;
		} catch(error){
			console.error('Error adding product', error);
		}
	},
	updateProduct: async (_, { id, ...args }) => {
		try {
			const updatedProduct = await Product.findByIdAndUpdate(id, args, { new: true});
			return updatedProduct;
		} catch(error) {
			console.error("Error updating product", error);
		}
	},
	deleteProduct: async (_, { id }) => {
		try {
			const deletedProduct = await Product.findByIdAndDelete(id);
			return deletedProduct;
		} catch(error) {
			console.error("Error deleting product", error);
			throw new Error("Error deleting product");

		}
	},
	},
};

//create apollo server

const server = new  ApolloServer({typeDefs, resolvers});

// run apollo server

server.listen().then( ({ url }) => {
	console.log(`Server ready at ${url}`)
});



//query
