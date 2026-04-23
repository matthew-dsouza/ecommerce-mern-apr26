import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    console.log("Old products removed");

    await Product.insertMany(products);
    console.log("Sample products inserted");

    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedProducts();