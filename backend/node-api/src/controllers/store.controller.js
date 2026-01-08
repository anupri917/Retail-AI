import Store from "../models/Store.model.js";

// Create store
export const createStore = async (req, res) => {
  try {
    const { name, address, phone } = req.body;

    const store = await Store.create({
      name,
      address,
      phone,
      owner: req.user.id
    });

    res.status(201).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all stores
export const getStores = async (req, res) => {
  try {
    const stores = await Store.find().populate("owner", "name email");
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get store by ID
export const getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id).populate("owner", "name email");
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update store
export const updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete store
export const deleteStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndDelete(req.params.id);
    if (!store) return res.status(404).json({ message: "Store not found" });
    res.status(200).json({ message: "Store deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
