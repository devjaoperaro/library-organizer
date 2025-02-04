import { BadRequestException, Injectable } from '@nestjs/common';
import { BooksDto } from '../../DTO/books.dto';
import { BookRepository } from '../../Mongo/Repository/book.repository';
import { Book } from '../../Mongo/Interfaces/book.interface';
import { DeleteResult } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async saveBook(newBook: BooksDto): Promise<Book> {
    return await this.bookRepository.saveBook(newBook);
  }

  async findAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookRepository.getAllBooks();

    if (allBooks.length === 0) {
      throw new BadRequestException('No books found');
    }
    return allBooks;
  }

  async getBookById(bookID: string): Promise<Book | null> {
    try {
      return await this.bookRepository.getBookById(bookID);
    } catch (e) {
      throw new BadRequestException('No books found');
    }
  }

  async deleteBook(bookID: string): Promise<DeleteResult> {
    try {
      return await this.bookRepository.deleteBook(bookID);
    } catch (e) {
      throw new BadRequestException('This book does not exist');
    }
  }
}
