import resource from 'resource-router-middleware';
import Booking from '../models/booking';
import mongoose from 'mongoose';
import _ from 'lodash';
import uuid from 'node-uuid';
export default ({ config, db }) => resource({

  /** Property name to store preloaded entity on `request`. */
  id : 'booking',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request with a 404, success sets `req[id] = data`.
   */
  async load(req, id, callback) {
    let booking = await Booking.findByIdAsync(id),
      err = booking ? null : 'Not Found';
    callback(err, booking);
  },

  /** POST / - Create a new entity */
  async create({ body }, res, next) {
    const booking = new Booking(body);
    let saved = await booking.saveAsync();
    res.json(saved);
  },

  /** GET /:id - Return a given entity */
  read({ booking }, res) {
    res.json(booking);
  },

  /** PUT /:id - Update a given entity */
  async update({ booking, body }, res) {
    if (body._id) delete body._id;
    let updated = _.merge(booking, body);
    let saved = await updated.saveAsync();
    res.status(204).json(saved);
  },

  /** DELETE /:id - Delete a given entity */
  async delete({ booking }, res) {
    let deleted = await booking.removeAsync();
    res.json(deleted);
  }
});
