import mongoose, { Schema } from 'mongoose';
import { AuthorSchema } from './author.schema';

export const BookSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: String,
  author: [AuthorSchema],
  language: String,
  releaseYear: Number,
  publisher: String,
  pages: Number,
});
