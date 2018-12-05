const dotenv = require('dotenv')
dotenv.config()

module.exports = (phase, { defaultConfig }) => {
  return {
    publicRuntimeConfig: { // Will be available on both server and client
      staticFolder: '/static',
      contentful: {
        token: process.env.CONTENTFUL_ACCESSTOKEN,
        env: process.env.CONTENTFUL_ENVIRONMENT,
        space: process.env.CONTENTFUL_SPACE_ID
      }
    }
  }
};