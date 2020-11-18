const router = require("express").Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const password = "secretpassword"
const hashedPassword = "$2b$10$DlkamGZeoK.AW0lVH2LQX.MB1aPZ/cESfaxncx41NxKjQlsBkXfme"

// bcrypt.hash(password, saltRounds, (error, hash) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(hash);
// })

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
    return res.status(501).send({});
})

router.get("/auth/logout", (req, res) => {

    return res.status(501).send({});
});

module.exports = router;

