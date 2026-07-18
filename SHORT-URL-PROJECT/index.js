const express = require("express");
const { connnectToMongoDB } = require("./connect");
const URLRoutes = require("./routes/url");
const URL = require("./models/url");

const app = express();
const PORT = 8001;

connnectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

app.use(express.json());

app.get("/test", (req, res)=>{
  return res.end("<h1>Hey for server testing</h1>");
});

app.use("/url", URLRoutes);

app.get("/:shortId", async(req, res) =>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {shortId},
    {$push: {visitHistory: {timestamp: Date.now()}}}
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT =${PORT}`))

 