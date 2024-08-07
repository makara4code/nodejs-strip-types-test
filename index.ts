import express from "express";

const app = express();

const port: number = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});