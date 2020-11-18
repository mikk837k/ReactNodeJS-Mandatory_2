const router = require("express").Router();
const uuidv4 = require("uuid/v4")
const bcrypt = require("bcrypt");

const saltRounds = 10;

bcrypt.compare(password, hashedPassword, (error, result) => {

    console.log(result);
})


    (async () => {
        const hash = await bcrypt.hash(password, saltRounds);
        // console.log(hash);
    })

router.post("/auth/login", (req, res) => {

    return res.status(501).send({});
});

router.post("/auth/signup", (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let id = uuidv4();

    bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
        if (error) {
            console.log(error);
            return res.status(501).send({error});
        }
        console.log(hash);
        let password = hash;
    })

    return res.status(501).send({});
})

router.get("/auth/logout", (req, res) => {



    return res.status(501).send({});
});

module.exports = router;

