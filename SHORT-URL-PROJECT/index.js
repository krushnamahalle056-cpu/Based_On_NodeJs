const express = require("express");
const { connnectToMongoDB } = require("./connect");
const URLRoutes = require("./routes/url");


const app = express();
const PORT = 8001;

connnectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
    console.log("MongoDB connected");
});

app.use(express.json());

app.use("/url", URLRoutes);

app.get("/:shortId", (req, res) =>{
    const shortId = req.params.shortId;
})

app.listen(PORT, () => console.log(`Server Started at PORT =${PORT}`))

