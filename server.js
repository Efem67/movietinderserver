
var express = require("express")
var app = express()
var data = require("./moviesData.json")
const cors = require('cors');

app.use(cors());
const PORT = 5000;

app.get("/getdata", function (req, res) {
    res.json(data)
})

app.put('/recommendations/:id/:option', (req, res) => {
    const id = req.params.id;
    const option = req.params.option;

    console.log(id,option)
    
    res.status(200).send('Żądanie PUT zostało przetworzone');
  });

app.listen(PORT, function () {
    console.log("Server just started on port: " + PORT)
})