import foodModal from "../models/foodModal.js";
import orderModel from "../models/orderModel.js";

export const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    } = req.body;

    if (!title || !description || !price || !resturnat) {
      return res.status(500).send({ success: false, message: "Please Provide all fields" });
    }

    const newFood = new foodModal({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    });

    await newFood.save();
    res.status(201).send({ success: true, message: "New Food Item Created", newFood });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error in create food api", error });
  }
};

export const getAllFoodsController = async (req, res) => {
  try {
    const foods = await foodModal.find({});
    if (!foods) {
      return res.status(404).send({ success: false, message: "no food items was found" });
    }
    res.status(200).send({ success: true, totalFoods: foods.length, foods });
  } catch (error) {
    res.status(500).send({ success: false, message: "Erro In Get ALL Foods API", error });
  }
};

export const getSingleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({ success: false, message: "please provide id" });
    }
    const food = await foodModal.findById(foodId);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with htis id" });
    }
    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error In get SIngle Food API", error });
  }
};

export const getFoodByResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({ success: false, message: "please provide id" });
    }
    const food = await foodModal.find({ resturnat: resturantId });
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with htis id" });
    }
    res.status(200).send({ success: true, message: "food base on restuatrn", food });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error In get SIngle Food API", error });
  }
};

export const updateFoodController = async (req, res) => {
  try {
    const foodID = req.params.id;
    if (!foodID) {
      return res.status(404).send({ success: false, message: "no food id was found" });
    }
    const food = await foodModal.findById(foodID);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found" });
    }
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    } = req.body;
    await foodModal.findByIdAndUpdate(
      foodID,
      { title, description, price, imageUrl, foodTags, catgeory, code, isAvailabe, resturnat, rating },
      { new: true }
    );
    res.status(200).send({ success: true, message: "Food Item Was Updated" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Erorr In Update Food API", error });
  }
};

export const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({ success: false, message: "provide food id" });
    }
    const food = await foodModal.findById(foodId);
    if (!food) {
      return res.status(404).send({ success: false, message: "No Food Found with id" });
    }
    await foodModal.findByIdAndDelete(foodId);
    res.status(200).send({ success: true, message: "Food Item Dleeted " });
  } catch (error) {
    res.status(500).send({ success: false, message: "Eror In Delete Food APi", error });
  }
};

export const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) {
      return res.status(500).send({ success: false, message: "please food cart or payemnt method" });
    }
    let total = 0;
    cart.map(i => total += i.price);
    const newOrder = new orderModel({ foods: cart, payment: total, buyer: req.body.id });
    await newOrder.save();
    res.status(201).send({ success: true, message: "Order Placed successfully", newOrder });
  } catch (error) {
    res.status(500).send({ success: false, message: "Erorr In Place Order API", error });
  }
};

export const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res.status(404).send({ success: false, message: "Please Provide valid order id" });
    }
    const { status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.status(200).send({ success: true, message: "Order Status Updated" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error In Order Status API", error });
  }
};
