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

router.post('/admins', (req, res, next) => {
	try {
		if(!(Number.isInteger(req.query.id)) || req.query.id<100) {
			throw new Error('id is invalid')
		}
		if (typeof req.body.name !== 'string' || req.body.name.length < 3) {
			throw new Error('name is invalid')
		}
		if (!(Number.isInteger(req.query.access)) || req.body.access !== 1) {
			throw new Error('teachers must have access value 1')
		}
		res.app.locals.books.push(req.body)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		next(err)
	}
}) //adaugare

router.put('/admins/:bid', checkIds, (req, res) => {
	let id = parseInt(req.params.bid)
	const adminIndex = res.app.locals.admins.findIndex(e => e.id === id)
	if (adminIndex !== -1) {
		res.app.locals.admins[adminIndex].name = req.body.name
		if (!(Number.isInteger(req.body.access)) || req.body.access !== 1) {
			throw new Error('teachers must have access value 1')
		}
		res.app.locals.admins[adminIndex].access = req.body.access
		res.status(200).json({ message: 'accepted' })
	} else {
		res.status(404).json({ message: 'not found' })
	}
}) //editare

module.exports = router