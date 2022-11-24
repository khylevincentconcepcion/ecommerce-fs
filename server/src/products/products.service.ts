import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find().exec();

    if (!products && products.length === 0) {
      throw new NotFoundException(`Products not found`);
    }

    return products;
  }

  async findOneBySlug(productSlug: string): Promise<Product> {
    const product = await this.productModel
      .findOne({ slug: productSlug })
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${productSlug} not found`);
    }

    return product;
  }

  async findOne(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId).exec();

    if (!product) {
      throw new NotFoundException(`Product #${productId} not found`);
    }

    return product;
  }

  async update(
    productId: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDto,
      {
        new: true,
      },
    );

    if (!updatedProduct) {
      throw new NotFoundException(`Product #${productId} not found`);
    }

    return updatedProduct;
  }

  async remove(productId: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      throw new NotFoundException(`Product #${productId} not found`);
    }

    return deletedProduct;
  }
}
