import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {
    constructor(private prisma: PrismaService) { }

    async create(dto: any): Promise<any> {
        return this.prisma.brand.create({ data: dto });
    }

    async findAll(): Promise<any[]> {
        return this.prisma.brand.findMany();
    }

    async findOne(id: number): Promise<any> {
        const brand = await this.prisma.brand.findUnique({ where: { id } });
        if (!brand) throw new NotFoundException(`Brand #${id} not found`);
        return brand;
    }

    async update(id: number, dto: UpdateBrandDto): Promise<any> {
        await this.findOne(id);
        return this.prisma.brand.update({ where: { id }, data: dto });
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.prisma.brand.delete({ where: { id } });
    }
}
