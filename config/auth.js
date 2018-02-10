// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth': {
    'clientID': '154081068585463',
    'clientSecret': 'bba2e9f6859d19ef6bee3d44b0bc5477',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
  },

  'twitterAuth': {
    'consumerKey': 'your-consumer-key-here',
    'consumerSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth': {
    'clientID': 'your-secret-clientID-here',
    'clientSecret': 'your-client-secret-here',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  }

};