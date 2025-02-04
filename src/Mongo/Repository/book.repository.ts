import { Injectable } from '@nestjs/common';
import { BooksDto } from '../../DTO/books.dto';
import { Book } from '../Interfaces/book.interface';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResult, Model } from 'mongoose';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BooksDto): Promise<Book> {
    const saveBook = new this.bookModel(newBook);
    const savedBook = await saveBook.save();
    return savedBook.toObject(); // 🔥 Remove os metadados extras
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async getBookById(bookID: string): Promise<Book | null> {
    return await this.bookModel.findById(bookID).exec();
  }

  async deleteBook(bookID: string): Promise<DeleteResult> {
    return await this.bookModel.deleteOne({ _id: bookID }).exec();
  }
}
