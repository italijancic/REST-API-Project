const mongoose = require('mongoose')

exports.dbConnect = async() => {

	try {

		await mongoose.connect( process.env.DB_URL )
		console.log('[configuration/db.js]: DB succesfully connected')

	} catch (error) {
		console.log(error)
	}

}
