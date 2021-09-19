require('dotenv').config()
const trackAll721s = require('./services/erc721tracker')
const healthcheck = require('./healthcheck')

trackAll721s(healthcheck)
