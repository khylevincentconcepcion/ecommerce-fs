import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class ProductReviews {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  comments: string;
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  stocks: number;

  @Prop({ default: '' })
  description: string;

  @Prop({ default: 0 })
  currentSold: number;

  @Prop({ default: 0 })
  totalSold: number;

  @Prop({ default: 0 })
  ratings: number;

  @Prop({ default: 0 })
  totalReviews: number;

  @Prop([
    {
      type: ProductReviews,
    },
  ])
  reviews: ProductReviews[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
