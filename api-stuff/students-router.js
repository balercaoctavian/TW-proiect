const express = require('express')
const { checkIds } = require('./middleware')

const router = express.Router()

router.get('/students', (req, res) => {
	let results = res.app.locals.students
	if (req.query.name) {
		results = res.app.locals.name.filter(e => e.name.match(req.query.name))
	}
	if (req.query.access) {
		results = results.filter(e => e.access.match(req.query.access))
	}
	res.status(200).json(results)
})

router.post('/students', (req, res, next) => {
	try {
		if(!(Number.isInteger(req.body.id)) || req.body.id<100 || req.body.id>10000) {
			throw new Error('id is invalid')
		}
		if (typeof req.body.name !== 'string' || req.body.name.length < 3) {
			throw new Error('name is invalid')
		}
		if (!(Number.isInteger(req.body.access)) || req.body.access !== 0) {
			throw new Error('students must have access value 0')
		}
		res.app.locals.students.push(req.body)
		res.status(201).json({ message: 'created' })
	} catch (err) {
		next(err)
	}
}) //adaugare

router.put('/students/:bid', checkIds, (req, res) => {
	let id = parseInt(req.params.bid)
	const studentIndex = res.app.locals.students.findIndex(e => e.id === id)
	if (studentIndex !== -1) {
		if (typeof req.body.name !== 'string' || req.body.name.length < 3) {
			throw new Error('name is invalid')
		}
		else
		res.app.locals.students[studentIndex].name = req.body.name
		res.app.locals.students[studentIndex].access = 0
		res.status(200).json({ message: 'accepted' })
	} else {
		res.status(404).json({ message: 'not found' })
	}
}) //editare

module.exports = router