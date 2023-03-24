const Product = require('../models/productModel');


exports.createProduct = async (req, res) => {
    try {
      console.log("😎😎😎😎",req.body);
      const newProduct = await Product.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          Product: newProduct,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };


  exports.getAllProducts = async (req, res) => {
    try {
      
      const Products = await Product.find();
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: Products.length, 
        data: {
          Products, 
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: 'Could no able to fetch',
      });
    }
  };

  exports.getProduct = async (req, res) => {
    try {
      
      const product = await Product.findById(req.params.id);
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: product.length, 
        data: {
          product, 
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: 'Could no able to fetch',
      });
    }
  };
  