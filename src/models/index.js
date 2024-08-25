const sequelize = require('../database');

const Product = require('./models/Product');
const Category = require('./models/Category');
const ProductCategory = require('../models/ProductCategory');

// Definindo associações
Product.belongsToMany(Category, { through: ProductCategory, as: 'Categories', foreignKey: 'product_id' });
Category.belongsToMany(Product, { through: ProductCategory, as: 'Products', foreignKey: 'category_id' });

module.exports = { Product, Category, ProductCategory };
