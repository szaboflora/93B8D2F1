const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.json({ message: "API működik" });
});

app.listen(3000, () => {
    console.log("Server fut: http://localhost:3000");
});