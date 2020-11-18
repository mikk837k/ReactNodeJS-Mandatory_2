const router = require("express").Router();

router.post("/setsession", (req, res) => {
    req.session.userName = req.body.userName;
    req.session.password = req.body.password;
    return res.send({ data: "you have hit the auth route" });
});

router.get("/getsession", (req, res) => {

    return res.send({ data: req.session.secretMessage });
});

module.exports = router;

