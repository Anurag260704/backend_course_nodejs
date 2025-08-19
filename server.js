const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Hello from Express + Mongoose (MVC)!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
