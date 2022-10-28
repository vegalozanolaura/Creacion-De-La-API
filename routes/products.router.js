const express = require('express');

const router = express.Router()

router.get("/", (req, res)=> {
  res.json([
  {
    name:"sportswear",
    cost:50000
  },
  {
  name:"Camisas",
  cost:40000
  },
{
  name:"Pantalonetas",
  cost:65000
},
{
  name:"Buzos",
  cost:35000
},
{
  name:"sudaderas",
  cost:80000
},
{
  name:"medias",
  cost:25000
},

  ])

})

module.exports = router
