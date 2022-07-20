const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')

const routes = require('./routes/index.routes')
const { dbConnect } = require('./configs/db.configs')


// Declare and configure express instance
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.json())
app.use(routes)

// Data Base init
dbConnect()

// Start server
app.listen(process.env.PORT, () => {
	console.log(`Server started at localhost:${process.env.PORT}`)
})