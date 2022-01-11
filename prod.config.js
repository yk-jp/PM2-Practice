module.exports = {
  apps: [{
    name: 'app for prod',
    script: 'index.js',
    env: {
      "PORT": 5001,
      "NODE_ENV": "production"
    },
    watch: false,
  }]
};
