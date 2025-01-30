import { Injectable } from '@nestjs/common';
import { BooksDto } from '../../DTO/books.dto';

@Injectable()
export class BooksService {
  saveBook(newBook: BooksDto): BooksDto {
    console.log('chegou no serviço');
    return newBook;
  }
}
