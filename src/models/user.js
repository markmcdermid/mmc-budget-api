import mongoose, { Schema } from 'mongoose';
import uuid from 'node-uuid';

const UserSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  fullName: {
    required: true,
    type: String
  },
  password: {
    // todo: bcrypt or something.
    type: String,
    required: true
  },
  income: [{ type: Schema.Types.ObjectId, ref: 'income' }],
  recurringSpends: [{ type: Schema.Types.ObjectId, ref: 'recurringSpends' }],
  expenditures: [{ type: Schema.Types.ObjectId, ref: 'expenditures' }]
});

export default mongoose.model('User', UserSchema);