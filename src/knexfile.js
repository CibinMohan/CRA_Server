// Update with your config settings.

module.exports = {

  development: {
      client: 'postgresql',
          connection: {
            host:'styxdb.c5ogkgmn7tee.us-east-2.rds.amazonaws.com',
            port:'5432',
            database: 'sFootball',
            user:     'cibin',
            password: 'sherlock'
          },
          pool: {
            min: 2,
            max: 10
          },
          migrations: {
            tableName: 'knex_migrations'
          }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
