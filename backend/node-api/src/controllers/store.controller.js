import Store from "../models/Store.model.js";

export const createStore = async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
