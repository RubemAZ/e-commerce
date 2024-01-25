const port = 4000;
const app = express()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const express = require("express")

app.use(express.json())
app.use(cors())

