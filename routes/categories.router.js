const express = require('express');

const router = express.Router()

router.get("/",(req, res) => {
  res.json([
    {
      name:"tennis"
    },
    {
     name:"Boleybol"
    },
    {
      name:"futbol"
    },
    {
      name:"Natacion"
    },
    {
      name:"Boxeo "
    },
  ]
  )
})

module.exports = router
