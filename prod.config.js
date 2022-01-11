module.exports = {
  apps: [{
    name: 'app for prod',
    script: 'index.js',
    env: {
      "PORT": 5001,
      "NODE_ENV": "production"
    },
    watch: false,
  }],
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload prod.config.js --env production',
      'pre-setup': ''
    }
  }
};
