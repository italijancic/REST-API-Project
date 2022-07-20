const Article = require('../models/Article')


exports.getArticles = async(req, res) => {

	// Get all articles
	try {

		const foundArticles = await Article.find({})

		if (foundArticles.lenght != 0) {
			res.status(200).json({
				success: true,
				foundArticles
			})
		} else {
			res.status(404).json({
				success: false,
				message: 'Articles not found'
			})
		}

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}

}

exports.postArticle = async(req, res) => {

	const newArticle = new Article({
		title: req.body.title,
		content: req.body.content
	})

	// Create a new article
	try {

		const article = await newArticle.save()

		// Check operation on DB
		if (article === newArticle) {
			res.status(201).json({
				success: true,
				article
			})
		} else {
			res.status(400).json({
				success: false
			})
		}

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}

}

exports.deleteArticles = async(req, res) => {

	// Delete all articles
	try {

		await Article.deleteMany({})

		res.status(200).json({
			success: true
		})

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}
}

// Targeting one article
// ---------------------
exports.getArticleByTitle = async(req, res) => {

	const articleTitle = req.params.title

	try {
		const foundArticle = await Article.findOne({title: articleTitle})

		if (foundArticle) {
			res.status(200).json({
				success: true,
				foundArticle
			})
		} else {
			res.status(404).json({
				success: false,
				message: `Article Title: ${articleTitle} not found`
			})
		}

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}

}

exports.putArticleByTitle = async(req, res) => {

	const articleTitle = req.params.title

	// console.log(req.body)

	try {

		// First chet if the article exist
		const foundArticle = await Article.findOne({title: articleTitle})

		// If exis an article with this title, go to delete it
		if (foundArticle) {
			await Article.findByIdAndUpdate(foundArticle._id, req.body)
			res.status(200).json({
				success: true,
				message: `Article Title: ${articleTitle} was updated`
			})
		} else {
			res.status(404).json({
				success: false,
				message: `Article Title: ${articleTitle} not found`
			})
		}


	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}
}

exports.patchArticleByTitle = async(req, res) => {

	const articleTitle = req.params.title
	// console.log(req.body)

	try {

		// First chet if the article exist
		const foundArticle = await Article.findOne({title: articleTitle})

		// If exis an article with this title, go to delete it
		if (foundArticle) {
			await Article.findByIdAndUpdate(foundArticle._id, {$set: req.body})
			res.status(200).json({
				success: true,
				message: `Article Title: ${articleTitle} was updated`
			})
		} else {
			res.status(404).json({
				success: false,
				message: `Article Title: ${articleTitle} not found`
			})
		}

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}
}

exports.deleteArticleByTitle = async(req, res) => {

	const articleTitle = req.params.title

	// Delete one
	try {
		// Check if the article exist
		const foundArticle = await Article.findOne({title: articleTitle})

		// If exis an article with this title, go to delete it
		if (foundArticle) {
			await Article.findByIdAndDelete(foundArticle._id)
			res.status(200).json({
				success: true,
				message: `Article Title: ${articleTitle} was deleted`
			})
		} else {
			res.status(404).json({
				success: false,
				message: `Article Title: ${articleTitle} not found`
			})
		}

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false
		})
	}
}