import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { AuthorDto } from '../../DTO/author.dto';

export interface Book extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly author: AuthorDto[];
  readonly language: string;
  readonly releaseYear: number;
  readonly publisher: string;
  readonly pages: number;
}
