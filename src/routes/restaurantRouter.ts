import express from "express";
import { getRestaurants, addRestaurant, updateRestaurant, getRestaurantById, deleteRestaurant } from "../controllers/restaurantController";

const router = express.Router();

router.get("/all", getRestaurants);
router.post("/add", addRestaurant);
router.put("/update/:id", updateRestaurant);
router.get("/:id",getRestaurantById);
router.delete("/delete/:id", deleteRestaurant);

export default router;