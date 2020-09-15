const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

const AllProductRoutes = require("./server/routes/product.routes");
AllProductRoutes(app);

app.listen(8000, () => {
    console.log("Product Manager on port 8000");
})