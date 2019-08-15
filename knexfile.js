// Update with your config settings.
module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/cook-book.db3",
		},
		useNullAsDefault: true,
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA forein_keys = ON", done); //Turn on FK enforcment
		},
	},

	migrations: {
		directory: "./data/migrations",
	},

	seeds: {
		directory: "./data/seeds",
	},
};
