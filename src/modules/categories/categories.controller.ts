import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Patch, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/roles.guard';
import { Roles } from '../../common/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
const uploadDir = process.env.UPLOAD_DIR || './uploads';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private svc: CategoriesService) { }

  @Get()
  @ApiOperation({ summary: 'List categories' })
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create category (Admin)' })
  create(@Body() body: CreateCategoryDto) {
    return this.svc.create(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update category (Admin)' })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCategoryDto) {
    return this.svc.update(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete category (Admin)' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.delete(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post(':id/image')
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload category image (Admin)' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        }
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: uploadDir,
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        cb(null, `category-${uniqueSuffix}${ext}`);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  }))
  async uploadImage(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File) {
    if (!file) throw new Error('No file uploaded');
    const url = file.path.replace(/\\/g, '/');
    return this.svc.addImage(id, url);
  }
}
