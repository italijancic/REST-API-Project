const express = require('express')
const router = express.Router()


router.use('/api/v1/articles', require('./articles.routes'))


module.exports = router