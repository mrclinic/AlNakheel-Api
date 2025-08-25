import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateCategoryDto) {
    return this.prisma.category.create({ data });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  async findById(id: number) {
    const c = await this.prisma.category.findUnique({ where: { id }, include: { products: true } });
    if (!c) throw new NotFoundException('Category not found');
    return c;
  }

  update(id: number, data: UpdateCategoryDto) {
    return this.prisma.category.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }

  async addImage(id: number, url: string) {
    await this.findById(id);
    return this.prisma.category.update({ where: { id }, data: { imageUrl: url } });
  }
}
