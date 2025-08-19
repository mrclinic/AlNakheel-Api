import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../common/roles.decorator';
import { RolesGuard } from '../../common/roles.guard';

import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { ProductFilterQueryDto, ProductWithRelatedDto, RemoveRelatedProductsBulkDto } from './dto/product.with.related.dto';
import { AddRelatedProductsBulkDto } from './dto/related-product.dto';

const uploadDir = process.env.UPLOAD_DIR || './uploads';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private svc: ProductsService) { }
  @Get('filter')
  @ApiOperation({ summary: 'Advanced product filtering with pagination and sorting' })
  @ApiResponse({ status: 200, type: [ProductWithRelatedDto] })

  filter(@Query() query: ProductFilterQueryDto) {
    const { skip = 0, take = 10, sortOrder = 'asc', ...filters } = query;
    return this.svc.filterProducts({
      ...filters,
      skip,
      take,
      sortOrder
    });
  }

  /* @Get()
  @ApiOperation({ summary: 'List products with search & pagination' })
  getAll(
    @Query('categoryId') categoryId?: string,
    @Query('search') search?: string,
    @Query('skip') skip: string = '0',
    @Query('take') take: string = '10',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',) {
    return this.svc.findAll({
      categoryId: categoryId ? Number(categoryId) : undefined, search,
      skip: Number(skip),
      take: Number(take),
      sortOrder
    });
  } */

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create product (Admin)' })
  create(@Body() dto: CreateProductDto) {
    return this.svc.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update product (Admin)' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
    return this.svc.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete product (Admin)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.delete(id);
  }

  /*@UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post(':id/image')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload product image (Admin)' })
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: uploadDir,
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        cb(null, `product-${uniqueSuffix}${ext}`);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  }))
   async uploadImage(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new Error('No file uploaded');
    const url = file.path.replace(/\\/g, '/');
    return this.svc.addImage(id, url);
  } */

  @Get(':id/related')
  @ApiOperation({ summary: 'Get all related products of a product' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiOkResponse({ type: ProductWithRelatedDto, description: 'Product with its related products' })
  getRelated(@Param('id', ParseIntPipe) id: number) {
    return this.svc.getRelatedProducts(id);
  }

  @Post('related/bulk')
  @ApiOperation({ summary: 'Add multiple related products at once' })
  @ApiResponse({ status: 201, description: 'Related products added successfully.' })
  @ApiResponse({ status: 400, description: 'Validation failed or product not found.' })
  addRelatedBulk(@Body() dto: AddRelatedProductsBulkDto) {
    return this.svc.addRelatedProductsBulk(dto);
  }

  @Delete('related/bulk')
  @ApiOperation({ summary: 'Remove multiple related products at once' })
  @ApiResponse({ status: 200, description: 'Related products removed successfully.' })
  @ApiResponse({ status: 400, description: 'Validation failed or product not found.' })
  removeRelatedBulk(@Body() dto: RemoveRelatedProductsBulkDto) {
    return this.svc.removeRelatedProductsBulk(dto);
  }
}
