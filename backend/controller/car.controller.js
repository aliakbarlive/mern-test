
const createCar = async (req, res) => {
try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports={
    createCar
}