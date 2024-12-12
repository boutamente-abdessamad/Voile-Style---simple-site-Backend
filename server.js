// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();
const PORT = process.env.PORT || 3000;
// CORS Configuration
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));
// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start Server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});