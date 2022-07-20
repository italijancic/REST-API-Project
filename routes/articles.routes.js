const express = require('express')
const router = express.Router()

const articles = require('../controllers/articles.controller')

// Endpoint to targeting all articles
router.get('/', articles.getArticles)
router.post('/', articles.postArticle)
router.delete('/', articles.deleteArticles)
// Endpoint to targeting to one article
router.get('/:title', articles.getArticleByTitle)
router.put('/:title', articles.putArticleByTitle)
router.patch('/:title', articles.patchArticleByTitle)
router.delete('/:title', articles.deleteArticleByTitle)

module.exports = router