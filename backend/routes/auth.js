const MongoClient = require('mongodb').MongoClient;
const router = require("express").Router();
const bcrypt = require("bcrypt");

const connectionUrl = "mongodb://localhost:27017";
const saltRounds = 10;

router.post("/auth/login", (req, res) => {

    console.log(req.body);
    // const email = req.body.email;
    // let password = req.body.password;

    // MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    //     if (error) {
    //         console.log(error);
    //         return res.status(501).send({ error });
    //     }
    //     const m2Db = client.db('m2Db');
    //     const users = m2Db.collection('users');

    //     users.findOne({ "email": email }, (error, result) => {
    //         if (error) {
    //             console.log(error);
    //             return res.status(501).send({ error });
    //         }
    //         else if (result == null) {

    //             return res.status(501).send({ errorMessage: "User email not found" });
    //         }
    //         else {
    //             hashedPassword = result.password;
    //             bcrypt.compare(password, hashedPassword, (error, result) => {
    //                 if (error) {
    //                     console.log(error);
    //                     return res.status(501).send({ error });
    //                 }
    //                 else if (result) {
    //                     req.session.email = email;
    //                     req.session.password = hashedPassword;
    //                     return res.status(200).send({ Succes: "User logged in" });
    //                 }
    //                 else {
    //                     return res.status(501).send({ Succes: "Incorrect password" });
    //                 }
    //             })
    //         }
    //     });
    // });
});

router.post("/auth/signup", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    let password = req.body.password;

    bcrypt.hash(password, saltRounds, (error, hash) => {
        if (error) {
            console.log(error);
            return res.status(501).send({ error });
        }
        console.log(hash);
        password = hash;

        MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
            if (error) {
                console.log(error);
                return res.status(501).send({ error });
            }
            const m2Db = client.db('m2Db');
            const users = m2Db.collection('users');

            users.findOne({ "email": email }, (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(501).send({ error });
                }
                else if (result != null) {

                    return res.status(501).send({ errorMessage: "User email already exists" });
                }
                else {

                    users.insertOne({ firstName: firstName, lastName: lastName, email: email, password: password }, (error, result) => {
                        if (error) {
                            console.log(error);
                            return res.status(501).send({ error });
                        }
                        if (result.insertedCount === 1) {
                            console.log(result.ops[0]);
                            return res.status(200).send({ Succes: "User has been created" });
                        }
                    });
                }
            });
        });

        req.session.email = email;
        req.session.password = password;
    })
})

router.get("/auth/logout", (req, res) => {
    console.log(req.session);
    req.session.destroy((error) => {
        if (error) {
            console.log(error);
            return res.status(501).send({ error });
        }
    })
    console.log(req.session);
    return res.status(200).send({ Succes: "Session has been destroyed, logout complete" });
});

// Status codes:
// 200 - OK / succes
// 401 - unauthorized
// 403 - forbidden
// 500 - Internal server error like database errors

module.exports = router;

