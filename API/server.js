const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())

app.post('/contactform', async (req, res) => {
    try {
        const { first_name, last_name, title, email, message} = req.body
        const newUser = await pool.query("INSERT INTO users ( first_name, last_name, title, email, message) VALUES($1, $2, $3, $4, $5) RETURNING *", [ first_name, last_name, title, email, message])
        res.json(newUser.rows[0])
    }
    catch (err) {
        console.error(err.message)
    }
})

app.post('/data', async (req, res) => {
    try {
        const { header1, header2, header3, para1, para2, para3} = req.body
        const newData = await pool.query("INSERT INTO data ( header1, header2, header3, para1, para2, para3) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [ header1, header2, header3, para1, para2, para3])
        res.json(newData.rows[0])
    }
    catch (err) {
        console.error(err.message)
    }
})

app.get('/contactform', async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows)
    }
    catch (err) {
        console.error(err.message)
    }
})

app.get('/data', async (req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM data");
        res.json(allData.rows)
    }
    catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log('Server is up on 5000')
})