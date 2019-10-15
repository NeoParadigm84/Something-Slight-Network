const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require("pusher-chatkit-server")
const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:0d38edaa-5315-45d3-8669-b365c73a92f4",
  key: "99acce74-6884-4120-9142-9e9312a59b66:Gs7asrTlhyyffCC4D8BmP11kJ2flEzb5oRF+jLoDoaI=",
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post("/users", (req, res) => {
  const {username} = req.body

  chatkit.createUser({
    name: username,
    id: username
  }).then(()=> res.sendStatus(201)) 
  .catch(error =>{
    if(error.error_type === "services/chatkit/user_already_exists"){
    res.sendStatus(200)
    } else{
      res.status(error.statusCode).json(error)
    }

  })
})

app.post("/authenticate", (req, res) => {
  const {grant_type} = req.body
  res.json(chatkit.authenticate({grant_type, userId: req.query.user_id}))
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
