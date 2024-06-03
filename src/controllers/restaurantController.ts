import mongoose from "mongoose";
import { Request, Response } from "express";
import Restaurant from "../models/Resrestaurant";

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No restaurant with that id");
    const restaurant = await Restaurant.findById(req.params.id);
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const addRestaurant = async (req: Request, res: Response) => {
  const { name, address, phone } = req.body;

  try {
    const newRestaurant = await Restaurant.create({ name, address, phone });
    res.status(201).json(newRestaurant);
  } catch (err: any) {
    if (err.code == 11000) {
      res.status(409).json({ message: "Restaurant already exists" });
    } else {
      res.status(400).json({ message: err.message });
    }
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No restaurant with that id");

    const restaurant = await Restaurant.findById(req.params.id);
    if (restaurant) {
      restaurant.name = req.body.name || restaurant.name;
      restaurant.address = req.body.address || restaurant.address;
      restaurant.phone = req.body.phone || restaurant.phone;

      const updatedRestaurant = await restaurant.save();
      res.json(updatedRestaurant);
    }
  } catch (error: any) {
    if (error.code == 11000) {
      res.status(409).json({ message: "Restaurant already exists" });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};
