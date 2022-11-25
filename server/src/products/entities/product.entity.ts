import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';

class ProductReviews {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  comment?: string;

  @IsString()
  rating?: string;
}

export class IProduct {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stocks: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  currentSold?: number;

  @IsNumber()
  totalSold?: number;

  @IsNumber()
  @IsNotEmpty()
  ratings?: number;

  @IsNumber()
  totalReviews?: number;

  @IsArray()
  reviews?: ProductReviews[];
}
