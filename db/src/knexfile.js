require('dotenv').config({path: '../../.env'});

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const config = {
	client: 'postgres',
	connection: {
		database: DB_NAME,
		user: DB_USERNAME,
		password: DB_PASSWORD,
		host: DB_HOST,
		port: DB_PORT
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './knex/migrations',
		stub: './knex/migration.stub',
		tableName: 'migrations_history',
	},
};
const db = require('knex')(config);

module.exports = db;
