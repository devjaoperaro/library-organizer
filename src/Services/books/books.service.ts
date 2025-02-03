import { Injectable } from '@nestjs/common';
import { BooksDto } from '../../DTO/books.dto';
import { BookRepository } from '../../Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async saveBook(newBook: BooksDto): Promise<BooksDto> {
    return await this.bookRepository.saveBook(newBook);
  }
}
