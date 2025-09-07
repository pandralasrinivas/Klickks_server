const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const cors = require("cors");


app.use(express.json());
app.use(cors());

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
