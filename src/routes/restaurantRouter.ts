import express from "express";
import { getRestaurants, addRestaurant, updateRestaurant, getRestaurantById } from "../controllers/restaurantController";

const router = express.Router();

router.get("/all", getRestaurants);
router.post("/add", addRestaurant);
router.put("/update/:id", updateRestaurant);
router.get("/:id",getRestaurantById);

export default router;