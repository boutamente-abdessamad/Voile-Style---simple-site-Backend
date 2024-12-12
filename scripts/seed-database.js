// scripts/seed-database.js
const seedProducts = require('../seeders/product.seeder');

async function runSeeder() {
  try {
    await seedProducts();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

runSeeder();