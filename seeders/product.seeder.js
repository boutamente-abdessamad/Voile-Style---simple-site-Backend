// seeders/product.seeder.js
// const db = require('../config/database');
const Product = require('../models/product.model');

const hijabProducts = [
  {
    title: "Elegant Chiffon Hijab in Soft Beige",
    price: 24.99,
    rating: 5,
    description: "Lightweight and breathable chiffon hijab, perfect for everyday wear. Soft texture and elegant drape.",
    images: [
      "img/products/img-1.jpg",
      "img/products/img-1.jpg"
    ]
  },
  {
    title: "Premium Silk Blend Hijab - Royal Blue",
    price: 34.50,
    rating: 4,
    description: "Luxurious silk blend hijab with a smooth finish. Ideal for formal and special occasions.",
    images: [
      "img/products/img-2.jpg",
      "img/products/img-2.jpg"
    ]
  },
  {
    title: "Printed Jersey Hijab - Floral Patterns",
    price: 19.99,
    rating: 3,
    description: "Comfortable jersey hijab with beautiful floral prints. Stretchy and easy to style.",
    images: [
      "img/products/img-3.jpg",
      "img/products/img-3.jpg"
    ]
  },
  {
    title: "Instant Hijab with Matching Undercap - Emerald Green",
    price: 29.99,
    rating: 4,
    description: "Convenient instant hijab with built-in undercap. No pins required, perfect for busy mornings.",
    images: [
      "img/products/img-4.jpg",
      "img/products/img-4.jpg"
    ]
  },
  {
    title: "Shimmer Chiffon Hijab - Metallic Silver",
    price: 27.50,
    rating: 5,
    description: "Elegant chiffon hijab with a subtle shimmer. Adds a touch of glamour to any outfit.",
    images: [
      "img/products/img-5.jpg",
      "img/products/img-5.jpg"
    ]
  },
  {
    title: "Lightweight Cotton Hijab - Pastel Pink",
    price: 18.99,
    rating: 4,
    description: "Soft cotton hijab perfect for everyday wear. Breathable and comfortable.",
    images: [
      "img/products/img-6.jpg",
      "img/products/img-6.jpg"
    ]
  },
  {
    title: "Premium Crepe Hijab - Classic Black",
    price: 32.99,
    rating: 3,
    description: "Versatile black crepe hijab. A wardrobe essential that matches everything.",
    images: [
      "img/products/img-7.jpg",
      "img/products/img-7.jpg"
    ]
  },
  {
    title: "Winter Wool Blend Hijab - Burgundy",
    price: 39.99,
    rating: 4,
    description: "Warm and cozy wool blend hijab. Perfect for cold weather and winter outings.",
    images: [
      "img/products/img-8.jpg",
      "img/products/img-8.jpg"
    ]
  },
  {
    title: "Printed Viscose Hijab - Geometric Patterns",
    price: 22.50,
    rating: 4,
    description: "Modern viscose hijab with trendy geometric prints. Soft and versatile.",
    images: [
      "img/products/img-9.jpg",
      "img/products/img-9.jpg"
    ]
  },
  {
    title: "Lightweight Chiffon Hijab - Coral",
    price: 25.99,
    rating: 4,
    description: "Delicate chiffon hijab in a beautiful coral shade. Lightweight and airy.",
    images: [
      "img/products/img-10.jpg",
      "img/products/img-10.jpg"
    ]
  },
  {
    title: "Maxi Jersey Hijab - Olive Green",
    price: 21.99,
    rating: 5,
    description: "Extra-long jersey hijab for versatile styling. Soft and stretchy material.",
    images: [
      "img/products/img-11.jpg",
      "img/products/img-11.jpg"
    ]
  },
  {
    title: "Satin Finish Hijab - Lavender",
    price: 28.99,
    rating: 4,
    description: "Elegant satin-finish hijab with a luxurious sheen. Perfect for special occasions.",
    images: [
      "img/products/img-12.jpg",
      "img/products/img-12.jpg"
    ]
  },
  {
    title: "Lightweight Bamboo Hijab - Natural White",
    price: 26.50,
    rating: 4,
    description: "Eco-friendly bamboo hijab. Soft, breathable, and naturally antibacterial.",
    images: [
      "img/products/img-13.jpg",
      "img/products/img-13.jpg"
    ]
  },
  {
    title: "Printed Silk Hijab - Paisley Design",
    price: 36.99,
    rating: 5,
    description: "Luxurious silk hijab with intricate paisley print. A statement piece for elegant outfits.",
    images: [
      "img/products/img-14.jpg",
      "img/products/img-14.jpg"
    ]
  },
  {
    title: "Textured Crinkle Hijab - Mustard Yellow",
    price: 23.50,
    rating: 4,
    description: "Stylish crinkle hijab with a unique texture. Adds depth and interest to your look.",
    images: [
      "img/products/img-15.jpg",
      "img/products/img-15.jpg"
    ]
  },
  {
    title: "Premium Merino Wool Hijab - Deep Teal",
    price: 42.99,
    rating: 4,
    description: "High-quality merino wool hijab. Warm, soft, and perfect for colder seasons.",
    images: [
      "img/products/img-16.jpg",
      "img/products/img-16.jpg"
    ]
  },
  {
    title: "Lightweight Linen Hijab - Natural Beige",
    price: 27.99,
    rating: 3,
    description: "Breathable linen hijab. Perfect for summer and warm weather.",
    images: [
      "img/products/img-17.jpg",
      "img/products/img-17.jpg"
    ]
  },
  {
    title: "Shimmer Chiffon Square Hijab - Gold Trim",
    price: 33.50,
    rating: 4,
    description: "Elegant square hijab with subtle shimmer and gold trimming. Versatile and stylish.",
    images: [
      "img/products/img-18.jpg",
      "img/products/img-18.jpg"
    ]
  },
  {
    title: "Premium Modal Hijab - Deep Maroon",
    price: 29.50,
    rating: 5,
    description: "Soft and smooth modal hijab. Drapes beautifully and maintains its shape.",
    images: [
      "img/products/img-19.jpg",
      "img/products/img-19.jpg"
    ]
  },
  {
    title: "Printed Viscose Maxi Hijab - Nature Inspired",
    price: 26.99,
    rating: 4,
    description: "Long viscose hijab with nature-inspired print. Extra length for versatile styling.",
    images: [
      "img/products/img-20.jpg",
      "img/products/img-20.jpg"
    ]
  },
  {
    title: "Soft Cashmere Blend Hijab - Dusty Rose",
    price: 44.99,
    rating: 5,
    description: "Luxurious cashmere blend hijab. Incredibly soft and warm for cooler days.",
    images: [
      "img/products/img-21.jpg",
      "img/products/img-21.jpg"
    ]
  },
  {
    title: "Lightweight Chiffon Ombré Hijab",
    price: 30.99,
    rating: 4,
    description: "Elegant ombré chiffon hijab with gradient color effect. Adds sophistication to any outfit.",
    images: [
      "img/products/img-22.jpg",
      "img/products/img-22.jpg"
    ]
  },
  {
    title: "Jersey Instant Hijab - Navy Blue",
    price: 24.50,
    rating: 4,
    description: "Comfortable jersey instant hijab. No pins required, easy to wear and style.",
    images: [
      "img/products/img-23.jpg",
      "img/products/img-23.jpg"
    ]
  },
  {
    title: "Premium Silk Hijab - Deep Purple",
    price: 37.99,
    rating: 5,
    description: "Pure silk hijab with rich, deep purple color. Luxurious and elegant.",
    images: [
      "img/products/img-24.jpg",
      "img/products/img-24.jpg"
    ]
  },
  {
    title: "Lightweight Bamboo Blend Square Hijab - Mint Green",
    price: 28.50,
    rating: 4,
    description: "Square hijab made from bamboo blend. Soft, breathable, and in a refreshing mint green shade.",
    images: [
      "img/products/img-25.jpg",
      "img/products/img-25.jpg"
    ]
  }
];

async function seedProducts() {
  try {
    // Ensure the products table exists
    await Product.createTable();

    // Insert products
    for (const product of hijabProducts) {
      await Product.create(product);
    }

    console.log('Successfully seeded 25 hijab products');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

module.exports = seedProducts;