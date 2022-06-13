const router = require("express").Router()

router.post("/", (req, res)=>{
console.log("data from frontend", req.body)

    // in here handle your data to push to your Team table in DB
})


module.exports = router;