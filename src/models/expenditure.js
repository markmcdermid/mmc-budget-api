import mongoose, { Schema } from 'mongoose';
import uuid from 'node-uuid';

const Expenditure = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  title: {
    type: String,
    required: true
  },
  amount: {
    required: true,
    type: Number
  },
  isMondo: {
    type: Boolean,
    default: false
  },
  category: [{ type: Schema.Types.ObjectId, ref: 'spendType' }]
});

export default mongoose.model('Expenditure', Expenditure);