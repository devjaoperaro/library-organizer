import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const AuthorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  surname: String,
});
