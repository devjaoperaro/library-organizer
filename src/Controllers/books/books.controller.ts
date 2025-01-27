import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros aqui';
  }

  @Post()
  saveBook(@Body() newBook: string): string {
    return newBook;
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
