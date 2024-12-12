// models/order.model.js
const db = require('../config/database');

class Order {
  // Create Order Table
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        city VARCHAR(100),
        address VARCHAR(255),
        country VARCHAR(100),
        zipcode VARCHAR(20),
        total DECIMAL(10,2) NOT NULL
      )
    `;
    await db.query(query);
  }

  // Create a new order
  static async create(order) {
    const { 
      firstname, 
      lastname, 
      phone, 
      city, 
      address, 
      country, 
      zipcode, 
      total 
    } = order;

    const query = `
      INSERT INTO orders 
      (firstname, lastname, phone, city, address, country, zipcode, total) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [
      firstname, 
      lastname, 
      phone, 
      city, 
      address, 
      country, 
      zipcode, 
      total
    ]);
    return result.insertId;
  }

  // Get all orders
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM orders');
    return rows;
  }

  // Get order by ID
  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  }
}

module.exports = Order;