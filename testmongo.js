require("dotenv").config({ path: ".env.local" });

console.log("MONGO_URI =", process.env.MONGO_URI);

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("CONNECTED"))
.catch(err => console.error(err));