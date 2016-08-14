import mongoose from 'mongoose';
import uuid from 'node-uuid';

const RecurringSpend = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    required: true,
    type: Number
  },
  repeats: {
    required: true,
    type: String,
    enum: ['weekly', 'monthly', 'yearly']
  }
});

export default mongoose.model('RecurringSpend', RecurringSpend);