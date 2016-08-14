import resource from 'resource-router-middleware';
import User from '../models/user';
import _ from 'lodash';
export default ({ config, db }) => resource({

  id : 'user',
  /** For requests with an `id`, you can auto-load the entity.
    *  Errors terminate the request with a 404, success sets `req[id] = data`.
  */
  async load(req, id, callback) {
    let user = await User.findByIdAsync(id),
      err = user ? null : 'Not Found';
    callback(err, user);
  },

  /** POST / - Create a new entity */
  async create({ body }, res, next) {
    const user = new User(body);
    let saved = await user.saveAsync();
    res.json(saved);
  },

  /** GET /:id - Return a given entity */
  read({ user }, res) {
    res.json(user);
  },

  /** PUT /:id - Update a given entity */
  async update({ user, body }, res) {
    if (body._id) delete body._id;
    let updated = _.merge(user, body);
    let saved = await updated.saveAsync();
    res.status(204).json(saved);
  },

  /** DELETE /:id - Delete a given entity */
  async delete({ user }, res) {
    let deleted = await user.removeAsync();
    res.json(deleted);
  }
});
