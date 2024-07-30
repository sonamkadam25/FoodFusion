const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://FoodFusion:FoodFusion123@cluster0.n8qwawf.mongodb.net/FoodFusion?retryWrites=true&w=majority&appName=Cluster0";
 
const mongoDB = async () => {
  try {  
    await mongoose.connect(mongoURL);
    console.log("Connected Successfully!!!");

    const fetched_data = await mongoose.connection.db
      .collection("food_Items")
      .find({})
      .toArray();
    global.FoodItems = fetched_data;

    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({}) 
      .toArray();
    global.FoodCategory = foodCategory;

    //console.log(foodCategory);
    // Assign fetched data to global variable
    //console.log(global.FoodItems);
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
  }
};

module.exports = mongoDB;
