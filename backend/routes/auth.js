const MongoClient = require('mongodb').MongoClient;
const router = require("express").Router();
const uuidv4 = require("uuid/v4")
const bcrypt = require("bcrypt");

const connectionUrl = "mongodb://localhost:27017";
const saltRounds = 10;

router.post("/auth/login", (req, res) => {

    bcrypt.compare(password, hashedPassword, (error, result) => {

        console.log(result);
    })

    return res.status(501).send({});

});

router.post("/auth/signup", (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let id = uuidv4();
    let password;

    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        if (error) {
            console.log(error);
            return res.status(501).send({ error });
        }
        console.log(hash);
        password = hash;
    })

    MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log(error);
            return res.status(501).send({ error });
        }
        const m2Db = client.db('m2Db');
        const users = m2Db.collection('users');
        users.insertOne({ firstName: firstName, lastName: lastName, email: email, id: id, password: password }, (error, result) => {
            if (result.insertedCount === 1) {
                console.log(result.ops[0]);
            }
            else {
                console.log(error);
                return res.status(501).send({ error });
            }
        });
    });

    req.session.email = email;
    req.session.password = password;

    return res.status(200).send({ Succes: "User has been created" });
})

router.get("/auth/logout", (req, res) => {

    req.session.destroy((error) => {
        if (error) {
            console.log(error);
            return res.status(501).send({ error });
        }
    })
    return res.status(200).send({ Succes: "Session has been destroyed, logout complete" });
});

// Status codes:
// 200 - OK / succes
// 401 - unauthorized
// 403 - forbidden
// 500 - Internal server error like database errors

module.exports = router;
