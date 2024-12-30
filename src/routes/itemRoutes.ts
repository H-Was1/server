import { Router } from "express";
import { getItems, addItem, deleteItem } from "../controllers/itemController";

const router = Router();

router.get("/", getItems);
router.post("/", addItem);
router.delete("/:id", deleteItem);

export default router;
