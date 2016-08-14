import mongoose from 'mongoose';
import uuid from 'node-uuid';

const BookingSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: String,
    unique: true,
    default: () => uuid.v4()
  },
  randomThing: {
    type: String,
  }
});

export default mongoose.model('Booking', BookingSchema);