// controllers/order.controller.js
const Order = require('../models/order.model');
const Joi = require('joi');

exports.createOrder = async (req, res) => {
  try {
    // Validation schema
    const schema = Joi.object({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      phone: Joi.string().required(),
      city: Joi.string().required(),
      address: Joi.string().required(),
      country: Joi.string().required(),
      zipcode: Joi.string().required(),
      total: Joi.number().positive().required()
    });
    // Validate request body
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const orderId = await Order.create(req.body);
    res.status(201).json({ id: orderId, message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
