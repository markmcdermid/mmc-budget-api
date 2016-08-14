import mongoose from 'mongoose';
import uuid from 'node-uuid';

const IncomeSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  name: {
    required: true,
    type: String
  },
  preTax: {
    required: true,
    type: Number
  },
  postTax: {
    required: true,
    type: Number
  },
  repeats: {
    required: true,
    type: String,
    enum: ['weekly', 'monthly', 'yearly']
  }
});

export default mongoose.model('Income', IncomeSchema);