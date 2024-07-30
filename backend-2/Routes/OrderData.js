const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => { 
  try {
    let data = req.body.order_data;
    if (!data || !req.body.email) {
      return res.status(400).send("Bad Request: Missing required fields");
    }

    // Add order date at the beginning of the order data array
    await data.splice(0, 0, { Order_date: req.body.order_date });

    // Find if email exists in the database
    // if email is not existing in db then create else insert
    let eId = await Order.findOne({ email: req.body.email });
    console.log(eId);

    if (eId === null) {
      try {
        // Create a new order
        await Order.create({
          email: req.body.email,
          order_data: [data],
        });
        res.json({ success: true });
      } catch (error) {
        console.error("Error creating order:", error.message);
        res.status(500).send("Server Error: Unable to create order");
      }
    } else {
      try {
        // Update existing order with new data
        await Order.findOneAndUpdate(
          { email: req.body.email },
          {
            //here if user have any previous order then append/push the new order into
            $push: { order_data: data },
          }
        );
        res.json({ success: true });
      } catch (error) {
        console.error("Error updating order:", error.message);
        res.status(500).send("Server Error: Unable to update order");
      }
    }
  } catch (error) {
    console.error("Server Error:", error.message);
    res.status(500).send("Server Error");
  }
});

//here now to see the data in the my history send the request to the backend mongodb by using email
router.post("/myOrderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    res.send("Server Error", error.message);
  }
});

module.exports = router;
