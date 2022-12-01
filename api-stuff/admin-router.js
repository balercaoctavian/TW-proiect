const express = require('express')
const { checkIds } = require('./middleware')

const router = express.Router()

router.get('/admins', (req, res) => {
	let results = res.app.locals.admins
	if (req.query.name) {
		results = res.app.locals.name.filter(e => e.name.match(req.query.name))
	}
	if (req.query.access) {
		results = results.filter(e => e.access.match(req.query.access))
	}
	res.status(200).json(results)
})

module.exports = router