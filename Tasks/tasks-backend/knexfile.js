// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'tasks',
    user:     'postgres',
    password: 'b053e843da0e466dabee70d7d218ccee'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
