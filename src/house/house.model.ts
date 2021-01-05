import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface House extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  price: number;
}
