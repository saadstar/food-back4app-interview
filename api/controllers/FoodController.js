const Parse = require("parse/node");

const foodClassName = Parse.Object.extend("Food");
// create a new food item @POST
const createFood = async (req, res) => {
  try {
    const newFood = new foodClassName();
    newFood.set("name", req.body.name);
    newFood.set("image", req.body.image);
    newFood.set("description", req.body.description);
    newFood.set("category", req.body.category);
    newFood.set("price", req.body.price);
    const savedFood = await newFood.save();
    res.status(200).json(savedFood);
  } catch (err) {
    console.log(err);
  }
};

module.exports = createFood;
