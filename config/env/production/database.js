module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('PRODUCTION_DATABASE_URL'),
      host: env('PRODUCTION_DATABASE_HOST', '127.0.0.1'),
      port: env.int('PRODUCTION_DATABASE_PORT', 5432),
      database: env('PRODUCTION_DATABASE_NAME', 'strapi'),
      user: env('PRODUCTION_DATABASE_USERNAME', 'strapi'),
      password: env('PRODUCTION_DATABASE_PASSWORD', 'strapi'),
    },
    debug: false,
  },
});
