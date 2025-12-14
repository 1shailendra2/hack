const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authroutes");

dotenv.config();

const app = express();

// Simpler CORS - allow all origins for now
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});