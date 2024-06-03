import express from "express";
import { getRestaurants, addRestaurant, updateRestaurant } from "../controllers/restaurantController";

const router = express.Router();

router.get("/all", getRestaurants);
router.post("/add", addRestaurant);
router.put("/update/:id", updateRestaurant);

export default router;