import { version } from '../../package.json';
import { Router } from 'express';
import bookings from './bookings';

export default ({ config, db }) => {
	let api = Router();

	// mount the bookings resource
	api.use('/bookings', bookings({ config, db }));

	// expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
