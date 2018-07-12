const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));

app.use(cors());
app.use(bodyParser.json());

app.use("/chat", require("./chat"));
