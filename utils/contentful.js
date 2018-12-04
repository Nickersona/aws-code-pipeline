const contentful = require('contentful')
import config from 'next/config'

const { publicRuntimeConfig } = config()
const client = contentful.createClient({
  space: publicRuntimeConfig.contentful.space,
  environment: publicRuntimeConfig.contentful.env,
  accessToken: publicRuntimeConfig.contentful.token
})

export default client