const express = require("express");
const Car = require("../models/Car");
const { createCar } = require("../controller/car.controller");

const router = express.Router();

// Create a new car
router.post("/", createCar);

// Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single car by ID
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a car by ID
router.put("/:id", async (req, res) => {
  try {
    const car = Car.findOne(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "can not found with this id" });
    }
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a car by ID
router.delete("/:id", async (req, res) => {
  try {
    const car = Car.findOne(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "can not found with this id" });
    }
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
