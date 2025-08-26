import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../../common/roles.decorator';
import { RolesGuard } from '../../common/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
}
