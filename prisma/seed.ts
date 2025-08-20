import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminPass = await bcrypt.hash('admin123', 10);
  const userPass = await bcrypt.hash('customer123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@local.com' },
    update: {
      email: 'admin@local.com',
    },
    create: {
      email: 'admin@local.com',
      passwordHash: adminPass,
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  const customer = await prisma.user.upsert({
    where: { email: 'user@local.com' },
    update: {
      email: 'user@local.com',
    },
    create: {
      email: 'user@local.com',
      passwordHash: userPass,
      name: 'Customer',
      role: 'CUSTOMER',
    },
  });



  await prisma.brand.upsert({
    where: { name_en: 'UNOX' },
    update: {},
    create: {
      name_en: 'UNOX',
      name_ar: 'يونُكس'
    },
  });
  await prisma.brand.upsert({
    where: { name_en: 'TECNODOM' },
    update: {},
    create: {
      name_en: 'TECNODOM',
      name_ar: 'تكنودوم'
    },
  });
  await prisma.brand.upsert({
    where: { name_en: 'FABBRINI' },
    update: {},
    create: {
      name_en: 'FABBRINI',
      name_ar: 'فابريني'
    },
  });

  await prisma.brand.upsert({
    where: { name_en: 'CUNILL' },
    update: {},
    create: {
      name_en: 'CUNILL',
      name_ar: 'كونيل'
    },
  });
  await prisma.brand.upsert({
    where: { name_en: 'COMENDA' },
    update: {},
    create: {
      name_en: 'COMENDA',
      name_ar: 'كوميندا'
    },
  });
  await prisma.brand.upsert({
    where: { name_en: 'ROBOT COUPE' },
    update: {},
    create: {
      name_en: 'ROBOT COUPE',
      name_ar: 'روبوت كوبيه'
    },
  });


  const cat = await prisma.category.upsert({
    where: { name_en: 'kitchen' },
    update: {},
    create: {
      name_en: 'Kitchen',
      name_ar: 'المطبخ'
    },
  });

  const p1 = await prisma.product.upsert({
    where: { name_en: 'olive-oil-1l' },
    update: {},
    create: {
      name_en: 'Olive Oil 1L',
      name_ar: 'زيت زيتون 1 لتر',
      description_en: 'Extra virgin olive oil 100%',
      price: 1299,
      categoryId: cat.id,
    },
  });

  /* await prisma.image.createMany({
    data: [
      { url: '/uploads/placeholder-olive.jpg', productId: p1.id },
    ],
  }); */

  //console.log({ admin: admin.email, customer: customer.email, product: p1.name_en });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
