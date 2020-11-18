
const express = require("express");
const app = express();

const session = require('express-session');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

const rateLimiter = require('express-rate-limit');
app.use("/auth", rateLimiter({
    windowMs: 10 * 60 * 1000, //10 minutes reset time
    max: 10 //10 reqests witihin the 10 minute time limit
}));

const routerSession = require('./routes/session.js');
app.use(routerSession);
const routerAuth = require('./routes/auth.js');
app.use(routerAuth);


app.get("/", (req, res) => {

    res.status(200).send({ data: "Welcome to the front page" });

})

app.get("/*", (req, res) => {

    res.status(200).send({ data: "Welcome to the any page" });

})

// Status codes:
// 200 - OK / succes
// 401 - unauthorized
// 403 - forbidden
// 500 - Internal server error like database errors

app.listen(8080);