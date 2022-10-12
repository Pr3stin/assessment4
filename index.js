const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getFood } = require('./controller')

app.get("/api/foods", getFood);

const { getFact } = require('./controller')

app.get("/api/fact", getFact);

app.post("/api/name", (req, res) => {
    console.log(req.body);
    let name = req.body.name

    res.status(200).send('So nice to meet you ' + name);
});


app.listen(4000, () => console.log("Server running on 4000"));
