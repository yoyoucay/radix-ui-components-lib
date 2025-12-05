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
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
        BASE_PATH: process.env.BASE_PATH || '/'
      }
    }
  ],
  deploy: {
    production: {
      'pre-deploy-local': 'echo "Starting deployment"',
      'post-deploy': 'bun install && bun run deploy && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'echo "Setting up deployment"'
    }
  }
};