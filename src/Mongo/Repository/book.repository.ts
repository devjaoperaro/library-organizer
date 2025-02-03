import { Injectable } from '@nestjs/common';
import { BooksDto } from '../../DTO/books.dto';
import { Book } from '../Interfaces/book.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BooksDto): Promise<BooksDto> {
    const saveBook = new this.bookModel(newBook);
    const savedBook = await saveBook.save();
    return savedBook.toObject(); // 🔥 Remove os metadados extras
  }
}
