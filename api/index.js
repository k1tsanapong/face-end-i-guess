const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

const patient_router = require('./routers/patient.router');

app.use('/patient', patient_router);

// const homePage = require("./routers/homePage");
// const productsRouter = require("./routers/products.router");
// const warehousesRouter = require("./routers/warehouses.router");
// const itemsRouter = require('./routers/items.router');
// const ordersRouter = require('./routers/orders.router');


// app.use("/", homePage);
// app.use("/items", itemsRouter);
// app.use("/products", productsRouter);
// app.use("/warehouses", warehousesRouter);
// app.use("/orders", ordersRouter);

module.exports = app;