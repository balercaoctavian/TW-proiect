const express = require('express')
const adminRouter = require('./admin-router')
const studentRouter=require('./students-router')
const courseRouter=require('./courses-router')

const app = express()

app.use(express.json())

app.locals.admins = [{
	id: 1,
	name: 'Hypothetical Andrei',
	access: 1
}, {
	id: 2,
	name: 'Balerca Octavian-Mihail',
	access: 1
}, {
	id: 3,
	name: 'Dinu Alexandru-Cristian',
	access: 1
}]

app.locals.students=[]

app.locals.courses=[]

app.use('/admin-api', adminRouter)

app.use('/students-api',studentRouter)

app.use('/courses-api',courseRouter)

app.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({ message: 'some error' })
})

app.listen(8080)