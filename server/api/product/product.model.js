'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  name: String,
  picture: String,
  price: {type: Number, min: [5, 'Thats too low'], max: [500, 'Way too much'], required: [true, 'Price is a must']}
});

export default mongoose.model('Product', ProductSchema);
