import mongoose, { Document, Schema } from "mongoose";

export interface Item extends Document {
  name: string;
  description: string;
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const ItemModel = mongoose.model<Item>("Item", ItemSchema);
export default ItemModel;
