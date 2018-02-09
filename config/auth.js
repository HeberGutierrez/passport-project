// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth': {
    'clientID': '154081068585463',
    'clientSecret': 'bba2e9f6859d19ef6bee3d44b0bc5477',
    'callbackURL': 'http://localhost:8080/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
  },

  'twitterAuth': {
    'consumerKey': '',
    'consumerSecret': '',
    'callbackURL': 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth': {
    'clientID': '',
    'clientSecret': '',
    'callbackURL': 'http://localhost:8080/auth/google/callback'
  }
};