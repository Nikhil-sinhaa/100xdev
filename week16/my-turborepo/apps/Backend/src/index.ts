import express from "express";
import { BACKEND_URL } from "@repo/common";

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.json({
        msg: "hello"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});