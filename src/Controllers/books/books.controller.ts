import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
} from '@nestjs/common';
import { BooksDto } from 'src/DTO/books.dto';
import { BooksService } from '../../Services/books/books.service';
import { Book } from '../../Mongo/Interfaces/book.interface';
import { DeleteResult } from 'mongoose';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.findAllBooks();
  }

  @Get(':bookID')
  async getBookId(@Param('bookID') bookID: string): Promise<Book | null> {
    return await this.bookService.getBookById(bookID);
  }

  @Post()
  async saveBook(@Body() newBook: BooksDto): Promise<Book> {
    return await this.bookService.saveBook(newBook);
  }

  @Patch()
  updateBook(): string {
    return 'Este livro foi atualizado';
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID: string): Promise<DeleteResult> {
    return await this.bookService.deleteBook(bookID);
  }
}
