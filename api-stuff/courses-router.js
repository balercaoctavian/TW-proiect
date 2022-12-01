const express = require('express')
const { checkIds } = require('./middleware')

const router = express.Router()

router.get('/courses', (req, res) => {
	let results = res.app.locals.courses
	if (req.query.name) {
		results = res.app.locals.name.filter(e => e.name.match(req.query.name))
	}
	if (req.query.access) {
		results = results.filter(e => e.access.match(req.query.access))
	}
	res.status(200).json(results)
})

router.post('/courses', (req, res, next) => {
	try {
		if(!(Number.isInteger(req.body.id)) || req.body.id<10000) {
			throw new Error('course id is invalid')
		}
		if (typeof req.body.name !== 'string' || req.body.name.length < 3) {
			throw new Error('name is invalid')
		}
		res.app.locals.courses.push(req.body)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		next(err)
	}
}) //adaugare

router.put('/courses/:bid', checkIds, (req, res) => {
	let id = parseInt(req.params.bid)
	const courseIndex = res.app.locals.courses.findIndex(e => e.id === id)
	if (courseIndex !== -1) {
        if (typeof req.body.name !== 'string' || req.body.name.length < 3) {
			throw new Error('name is invalid')
		}
        else
		res.app.locals.courses[courseIndex].name = req.body.name
		res.status(200).json({ message: 'accepted' })
	} else {
		res.status(404).json({ message: 'not found' })
	}
}) //editare

module.exports = router