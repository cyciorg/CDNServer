module.exports = {
  apps : [{
    script: 'src/index.js',
    watch: '.',
    env: {
      "NODE_ENV": "development",
      "SERVER_PORT": 8884,
      "SERVER"
    }, 
    env_production: {
      "NODE_ENV": "production"
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
