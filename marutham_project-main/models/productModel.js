const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product should have a name'],
        trim: true,
      },
      cost: {
        type: Number,
        required: [true, 'A product must have a location'],
      },
      quantityType: {
        type: String,
        default: "Litre"
      },
      shortDescription: {
        type: String
      },
      description: {
        type: String
      },
      packSize: {
        type: String
      },
      packType: {
        type: String
      },
      usage: {
        type: String
      },
      dose: {
        type: String
      },
      solubility: {
        type: String
      },
      features: {
        type: String
      },
      application: {
        type: String
      },
      image: {
        type: String,
        // required: [true, 'A product must have a image'],
      }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true, //it will create updated at and created at field automatically
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;