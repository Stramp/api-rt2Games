module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'rt2games'),
        username: env('DATABASE_USERNAME', 'rt2games'),
        password: env('DATABASE_PASSWORD', 'rt2games123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
