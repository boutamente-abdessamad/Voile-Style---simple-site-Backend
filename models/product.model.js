// models/product.model.js
const db = require('../config/database');

class Product {
  // Create Product Table
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        rating FLOAT,
        description TEXT,
        images JSON
      )
    `;
    await db.query(query);
  }

  // Create a new product
  static async create(product) {
    const { title, price, rating, description, images } = product;
    const query = `
      INSERT INTO products 
      (title, price, rating, description, images) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [
      title, 
      price, 
      rating, 
      description, 
      JSON.stringify(images)
    ]);
    return result.insertId;
  }

  // Get all products
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows
  }

  // Get product by ID
  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length) {
      const product = rows[0];
      return product;
    }
    return null;
  }
}

module.exports = Product;