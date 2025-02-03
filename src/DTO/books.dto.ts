import {
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AuthorDto } from './author.dto';
import { Type } from 'class-transformer';

export class BooksDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @ApiProperty({ type: [AuthorDto] })
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => AuthorDto)
  @ValidateNested({ each: true })
  readonly author: AuthorDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly language: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly releaseYear: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly publisher: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly pages: number;
}
