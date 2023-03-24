const express = require('express');

const morgan = require('morgan');

const productRouter = require('./routes/productRoutes');

const app = express();
const cors = require('cors')

// SERVING STATIC FILES-------------------------------------
app.use(express.static(`${__dirname}/public`));

// 1.Middlewares -------------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/products',productRouter);

module.exports = app;
