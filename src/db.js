import Promise from 'bluebird';
import mongoose from 'mongoose';

Promise.promisifyAll(mongoose);

export default (config, cb) => {
	var mong = mongoose.connect(config.db);
	cb(mong);
}
