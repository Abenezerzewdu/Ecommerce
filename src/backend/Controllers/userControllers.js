import User from "../models/Users";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

//create a new user

const createUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await User.create({ name, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
};
