const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const cors = require("cors");


app.use(express.json());

const allowedOrigins = [
  'https://klickks-client.onrender.com', // Replace with your frontend URL
  'http://localhost:3000', // For local development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
