import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(
    @Res() response: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      const newProduct = await this.productsService.create(createProductDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Product has been created successfully',
        newProduct,
      });
    } catch (err) {
      throw new BadRequestException();
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const products = await this.productsService.findAll();
      return response.status(HttpStatus.OK).json(products);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Get(':slug')
  async findOneBySlug(@Res() response: Response, @Param('slug') slug: string) {
    try {
      const product = await this.productsService.findOneBySlug(slug);
      return response.status(HttpStatus.OK).json(product);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      const product = await this.productsService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Product found successfully',
        product,
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Patch(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const updatedProduct = await this.productsService.update(
        id,
        updateProductDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Product has been successfully updated',
        updatedProduct,
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const deletedProduct = await this.productsService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: 'Product has been successfully deleted',
        deletedProduct,
      });
    } catch (err) {
      throw new NotFoundException();
    }
  }
}
