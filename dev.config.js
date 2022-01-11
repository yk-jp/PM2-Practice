module.exports = {
  apps: [{
    name: 'app for dev',
    script: 'index.js',
    env: {
      "PORT": 5000,
      'NODE_ENV': 'development'
    },
    watch: true
  }],
};
