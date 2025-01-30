import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BooksDto } from 'src/DTO/books.dto';
import { BooksService } from '../../Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): string {
    return 'Todos os livros aqui';
  }

  @Post()
  saveBook(@Body() newBook: BooksDto): BooksDto {
    return this.bookService.saveBook(newBook);
  }

  @Patch()
  updateBook(): string {
    return 'Este livro foi atualizado';
  }

  @Delete()
  deleteBook(): string {
    return 'Este livro foi apagado';
  }
}
