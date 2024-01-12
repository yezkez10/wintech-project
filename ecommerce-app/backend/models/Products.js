import React, {Component} from 'react'
import axios from 'axios'

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id : ObjectId,
    couponUsed : Boolean,
    customer : Document,
    items : Array,
    purchaseMethod : String,
    saleDate : Date,
    storeLocation : String
})

const ProductsModel = mongoose.model("sales", productSchema)
module.exports = ProductsModel