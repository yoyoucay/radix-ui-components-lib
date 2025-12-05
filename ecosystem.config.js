require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'ui-kit',
      script: 'bun',
      args: 'run start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: process.env.NODE_ENV || 'DEV',
        PORT: process.env.PORT || 3000,
        BASE_PATH: process.env.BASE_PATH || '/'
      },
      env_production: {
        NODE_ENV: process.env.NODE_ENV ||  'PRD' ,
        PORT: process.env.PORT || 3000,
        BASE_PATH: process.env.BASE_PATH || '/'
      }
    },
    {
      name: 'ui-kit',
      script: 'bun',
      args: 'run start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PREVIEW_PORT || 4173,
        BASE_PATH: process.env.BASE_PATH || '/'
      }
    }
  ]
};