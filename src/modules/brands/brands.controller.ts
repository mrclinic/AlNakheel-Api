import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Roles } from '../../common/roles.decorator';
import { RolesGuard } from '../../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
const uploadDir = process.env.UPLOAD_DIR || './uploads';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
    constructor(private readonly service: BrandsService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a brand' })
    create(@Body() dto: CreateBrandDto) {
        return this.service.create(dto);
    }

    @Get()
    @ApiOperation({ summary: 'List all brands' })
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get brand by ID' })
    @ApiParam({ name: 'id', type: Number })
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Patch(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Update a brand' })
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBrandDto) {
        return this.service.update(id, dto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Delete(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Delete a brand' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post(':id/image')
    @ApiBearerAuth()
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: 'Upload brand image (Admin)' })
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
                cb(null, `brand-${uniqueSuffix}${ext}`);
            },
        }),
        limits: { fileSize: 5 * 1024 * 1024 },
    }))
    async uploadImage(@Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File) {
        if (!file) throw new Error('No file uploaded');
        const url = file.path.replace(/\\/g, '/');
        return this.service.addImage(id, url);
    }
}
