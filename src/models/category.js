import mongoose from 'mongoose';
import uuid from 'node-uuid';

const Category = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Category', Category);