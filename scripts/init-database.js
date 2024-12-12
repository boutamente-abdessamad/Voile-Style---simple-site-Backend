
// Initialize Database Tables
const Product = require('../models/product.model');
const Order = require('../models/order.model');

async function initializeTables() {
    try {
      await Product.createTable();
      await Order.createTable();
      console.log('Database tables created successfully');
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

initializeTables();

