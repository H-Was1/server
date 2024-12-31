import { Request, Response } from "express";
import ItemModel from "../models/itemModel";

export const getItems = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    if (id) {
      const item = await ItemModel.findById(id);
      if (!item) {
        res.status(404).json({ message: "Item not found" });
        return;
      }

      res.status(200).json(item);
    } else {
      const items = await ItemModel.find();
      res.status(200).json(items);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
};

export const addItem = async (req: Request, res: Response): Promise<void> => {
  const { name, description } = req.body;
  try {
    const newItem = new ItemModel({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error });
  }
};

export const deleteItem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  try {
    await ItemModel.findByIdAndDelete(id);
    res.status(204).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
};
