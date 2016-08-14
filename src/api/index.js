import { version } from '../../package.json';
import { Router } from 'express';
import users from './users';

export default ({ config, db }) => {
	let api = Router();

	// mount the users resource
	api.use('/users', users({ config, db }));

	// expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
