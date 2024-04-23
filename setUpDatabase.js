//imports
const mongoose = require('mongoose');



//define schema
const productSchema = new mongoose.Schema({
	name: String,
    price: Number,
    description: String,
    category: String,
});



// create model

const Product = mongoose.model('Product', productSchema);

// sample data

const sampleData = [
  {
    name: 'Laptop',
    price: 999,
    description: 'Powerful laptop for all your needs',
    category: 'Electronics',
  },
  {
    name: 'Running Shoes',
    price: 79,
    description: 'Comfortable shoes for running',
    category: 'Fashion',
  },
  {
    name: 'Coffee Maker',
    price: 49,
    description: 'Brew your favorite coffee at home',
    category: 'Kitchen',
  },
];


// define function to populate the database

const populateDatabase = async () => {
try {
	await Product.deleteMany(); // to make sure its empty
	await Product.insertMany(sampleData);
	console.log("Database is populated successfully..")
} catch (error){
	console.error("Error in populating database", error)
}
};


//export

module.exports = {
	populateDatabase,
	Product,
};

