const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/users");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/", userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});