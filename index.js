"use strict"

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const util = require('./utils')

app.listen(7777)
console.log('RESTful API server started on: 7777')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', function(req, res) {
    res.status(200).send('Api cek nikmu tugas mobile programming')
})
app.get('/generate-nik/:nik', function(req, res) {
    const result = util(req.params.nik)
    if(result.status == "error") res.status(400).send(result.pesan)
    else res.status(200).send(result)
})