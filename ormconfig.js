const defaultConnectionOptions = {
  'type': process.env.DB_TYPE,
  'host': process.env.DB_HOST,
  'port': +process.env.DB_PORT,
  'username': process.env.DB_USERNAME,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_DEFAULT_DATABASE,
};

const useConfigBase = (name) => ({
  'name': name,
  ...defaultConnectionOptions,
  'database': name,
  'entities': [
    'dist/' + name + '/src/modules/*/entity/*.js',
  ],
  'migrations': [
    'dist/shared/database/migrations/' + name + '/*.js',
  ],
  'cli': {
    'migrationsDir': 'apps/shared/database/migrations/' + name,
    'entitiesDir': 'apps/' + name + '/src/modules/*/entity',
  },
});

module.exports = [
  {
    'name': 'default',
    ...defaultConnectionOptions,
    'migrations': ['dist/shared/database/migrations/default/*.js'],
    'cli': { 'migrationsDir': 'apps/shared/database/migrations/default' },
  },
  useConfigBase('dwellings'),
];
