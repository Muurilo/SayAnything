// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'mssql',
    connection: {
      server : process.env.MSSQL_SERVER,
      user : process.env.MSSQL_USER,
      password : process.env.MSSQL_PASS,
      options: {
        port: process.env.MSSQL_PORT,
        database : process.env.MSSQL_DATABASE,
        encrypt: true
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
