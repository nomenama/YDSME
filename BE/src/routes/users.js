const {Router} = require("express");
const db = require("../../src/database");

const router = Router();

router.post("/create-user", async (req, res) => {
    const {name, username, password, role} = req.body;

    if (name && username && password && role) {
        try {
            const response = await db.promise().query(`INSERT INTO users VALUES('${name}', '${username}', '${password}', '${role}')`)
            console.log(response);
            return res.status(200).json({msg: "user created"});
        } catch (e) {
            return res.send(e);
        }
    }

    return res.sendStatus(400);
});

module.exports = router;