const express = require("express");
const cors = require("cors");
const { mock } = require("node:test");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let mock_data = []

app.get("/ping",(req,res) => {
    // res.send("HELLO");
    res.json({
    "text": "IT68070039 NiHao"
    });
})

app.post("/form",(req,res) => {
    const owner = req.body.owner;
    const color = req.body.color;
    const type = req.body.type;
    const wheel = req.body.wheel;
    const weight = req.body.weight;

    mock_data.push({
        "owner": owner,
        "color" : color,
        "type" : type,
        "wheel" : wheel,
        "weight" : weight,
        "id" : mock_data.length
    })

    console.log(mock_data)
    res.json(mock_data[mock_data.length - 1])
})

app.listen(3000, () => {
    console.log("Listening Port 3000")
})