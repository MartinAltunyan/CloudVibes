const express = require("express");
const router = express.Router();

//@route Get api/profile/test
//@desc Tests orders rout
//@access Public
router.get('/test', (req, res) => res.json({ msg: "orders Works" }));



module.exports = router;