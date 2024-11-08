const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoDB = require("./db");

mongoDB(); 

app.use(
  cors({
    origin: ["https://food-fusion-frontend-one.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());
mongoose.connect('mongodb+srv://FoodFusion:FoodFusion123@cluster0.n8qwawf.mongodb.net/FoodFusion?retryWrites=true&w=majority&appName=Cluster0');

app.get("/",(req,res)=>{
  res.json("Hello");
})

app.get("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api/auth", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
