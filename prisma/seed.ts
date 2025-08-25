import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {


  /* 
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
  }); */

  /* await prisma.image.createMany({
    data: [
      { url: '/uploads/placeholder-olive.jpg', productId: p1.id },
    ],
  }); */

  //console.log({ admin: admin.email, customer: customer.email, product: p1.name_en });




  ///////////parent categories//////
  /* seedParentCategories() */

  /////sub categories/////////////
  /* seedSubCategories() */

  /////brands//////
  /* seedBrands(); */

  /////users//////
  /* seedUsers(); */

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });


async function seedBrands() {
  await prisma.brand.upsert({
    where: { name_en: 'BERJAYA' },
    update: {},
    create: {
      name_en: "BERJAYA",
      name_ar: "بيرجايا",
      description_en: "A Malaysian brand known for commercial kitchen and refrigeration equipment.",
      description_ar: "علامة تجارية ماليزية معروفة بمعدات المطابخ التجارية والتبريد.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'MENUMASTER' },
    update: {},
    create: {
      name_en: "MENUMASTER",
      name_ar: "مينوماستر",
      description_en: "Specializes in commercial microwave ovens and foodservice equipment.",
      description_ar: "متخصصة في أفران الميكروويف التجارية ومعدات خدمات الطعام.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'BREMA' },
    update: {},
    create: {
      name_en: "BREMA",
      name_ar: "بريما",
      description_en: "Italian manufacturer of professional ice makers.",
      description_ar: "شركة إيطالية مصنّعة لماكينات صنع الثلج الاحترافية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'TECNODOM' },
    update: {},
    create: {
      name_en: "TECNODOM",
      name_ar: "تيكنودوم",
      description_en: "Produces professional kitchen equipment including refrigeration and ovens.",
      description_ar: "تنتج معدات المطابخ الاحترافية بما في ذلك التبريد والأفران.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: "BERTO'S" },
    update: {},
    create: {
      name_en: "BERTO'S",
      name_ar: "بيرتوس",
      description_en: "Italian brand of professional cooking ranges and kitchen solutions.",
      description_ar: "علامة تجارية إيطالية لمواقد الطهي الاحترافية وحلول المطابخ.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'COMENDA' },
    update: {},
    create: {
      name_en: "COMENDA",
      name_ar: "كوميندا",
      description_en: "Specializes in dishwashing systems for commercial kitchens.",
      description_ar: "متخصصة في أنظمة غسيل الصحون للمطابخ التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'Cunill' },
    update: {},
    create: {
      name_en: "Cunill",
      name_ar: "كونيل",
      description_en: "Known for manufacturing coffee grinders and bar equipment.",
      description_ar: "معروفة بتصنيع مطاحن القهوة ومعدات المقاهي.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'DUKERS' },
    update: {},
    create: {
      name_en: "DUKERS",
      name_ar: "دوكرز",
      description_en: "Supplies commercial refrigeration and kitchen equipment.",
      description_ar: "تقدم معدات التبريد والمطابخ التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'FABRINI' },
    update: {},
    create: {
      name_en: "FABRINI",
      name_ar: "فابريني",
      description_en: "Provides professional kitchen equipment solutions.",
      description_ar: "توفر حلول معدات المطابخ الاحترافية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'LA CIMBALI' },
    update: {},
    create: {
      name_en: "LA CIMBALI",
      name_ar: "لا تشيمبالي",
      description_en: "World-renowned Italian manufacturer of espresso and cappuccino machines.",
      description_ar: "شركة إيطالية مشهورة عالميًا بصناعة ماكينات الإسبريسو والكابتشينو.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'MECNOSUD' },
    update: {},
    create: {
      name_en: "MECNOSUD",
      name_ar: "مِكنوسود",
      description_en: "Italian producer of bakery and pizza equipment.",
      description_ar: "شركة إيطالية منتجة لمعدات المخابز والبيتزا.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'prismafood' },
    update: {},
    create: {
      name_en: "prismafood",
      name_ar: "بريزمافود",
      description_en: "Offers pizza ovens and food preparation equipment.",
      description_ar: "توفر أفران البيتزا ومعدات تحضير الطعام.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'RATIONAL' },
    update: {},
    create: {
      name_en: "RATIONAL",
      name_ar: "راشونال",
      description_en: "Global leader in combi ovens and professional cooking appliances.",
      description_ar: "رائدة عالميًا في أفران الكومبي ومعدات الطهي الاحترافية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'robot coupe' },
    update: {},
    create: {
      name_en: "robot coupe",
      name_ar: "روبوكوپ",
      description_en: "French manufacturer of food processors and kitchen prep equipment.",
      description_ar: "شركة فرنسية مصنعة لمعالجات الطعام ومعدات تحضير المطابخ.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'ROLLER GRILL' },
    update: {},
    create: {
      name_en: "ROLLER GRILL",
      name_ar: "رولر جريل",
      description_en: "Specializes in professional catering and fast-food equipment.",
      description_ar: "متخصصة في معدات التموين الاحترافية والوجبات السريعة.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'S.A.P' },
    update: {},
    create: {
      name_en: "S.A.P",
      name_ar: "س.أ.ب",
      description_en: "Italian company producing pizza, bakery, and catering equipment.",
      description_ar: "شركة إيطالية تنتج معدات البيتزا والمخابز والتموين.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'SANTOS' },
    update: {},
    create: {
      name_en: "SANTOS",
      name_ar: "سانتوس",
      description_en: "French manufacturer of commercial juicers, blenders, and coffee grinders.",
      description_ar: "شركة فرنسية مصنّعة لماكينات العصير والخلاطات ومطاحن القهوة التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'Skyrainbow' },
    update: {},
    create: {
      name_en: "Skyrainbow",
      name_ar: "سكاي رينبو",
      description_en: "Commercial kitchen and catering equipment brand.",
      description_ar: "علامة تجارية لمعدات المطابخ والتموين التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'UNOX' },
    update: {},
    create: {
      name_en: "UNOX",
      name_ar: "أونوكس",
      description_en: "Italian manufacturer of professional ovens and cooking solutions.",
      description_ar: "شركة إيطالية مصنعة للأفران الاحترافية وحلول الطهي.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'Zumex' },
    update: {},
    create: {
      name_en: "Zumex",
      name_ar: "زومكس",
      description_en: "Leader in commercial juicing machines.",
      description_ar: "رائدة في ماكينات العصر التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'Beckers' },
    update: {},
    create: {
      name_en: "Beckers",
      name_ar: "بيكرز",
      description_en: "Known for professional kitchen equipment solutions.",
      description_ar: "معروفة بحلول معدات المطابخ الاحترافية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'MBM' },
    update: {},
    create: {
      name_en: "MBM",
      name_ar: "إم بي إم",
      description_en: "Italian producer of professional cooking equipment for catering.",
      description_ar: "شركة إيطالية منتجة لمعدات الطهي الاحترافية للتموين.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'SAB' },
    update: {},
    create: {
      name_en: "SAB",
      name_ar: "ساب",
      description_en: "Manufacturer of coffee machines and foodservice equipment.",
      description_ar: "مصنّع لماكينات القهوة ومعدات خدمات الطعام.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'Perfex' },
    update: {},
    create: {
      name_en: "Perfex",
      name_ar: "بيرفكس",
      description_en: "Supplies commercial kitchen solutions.",
      description_ar: "توفر حلول المطابخ التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'EMPERO' },
    update: {},
    create: {
      name_en: "EMPERO",
      name_ar: "إمبيرو",
      description_en: "Turkish brand manufacturing commercial kitchen equipment.",
      description_ar: "علامة تركية تصنّع معدات المطابخ التجارية.",
      image: ""
    }
  });

  await prisma.brand.upsert({
    where: { name_en: 'JTC OmniBlend' },
    update: {},
    create: {
      name_en: "JTC OmniBlend",
      name_ar: "جي تي سي أومني بلند",
      description_en: "Manufacturer of professional blenders for foodservice and hospitality.",
      description_ar: "مصنّع لخلاطات احترافية لخدمات الطعام والضيافة.",
      image: ""
    }
  });
}


async function seedSubCategories() {
  await prisma.category.upsert({
    where: { name_en: 'Bread Saj' },
    update: {},
    create: {
      name_en: 'Bread Saj',
      name_ar: 'خبز صاج',
      parentId: 2
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Bread Slicer' },
    update: {},
    create: {
      name_en: 'Bread Slicer',
      name_ar: 'آلة تقطيع الخبز',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Convection Oven' },
    update: {},
    create: {
      name_en: 'Convection Oven',
      name_ar: 'الفرن الحراري',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Deck Oven' },
    update: {},
    create: {
      name_en: 'Deck Oven',
      name_ar: 'فرن طبقي',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Dough Divider' },
    update: {},
    create: {
      name_en: 'Dough Divider',
      name_ar: 'مقسم العجين',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Dough Mixer' },
    update: {},
    create: {
      name_en: 'Dough Mixer',
      name_ar: 'عجانة العجين',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Dough Moulder' },
    update: {},
    create: {
      name_en: 'Dough Moulder',
      name_ar: 'مشكل العجين',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Dough Sheeter' },
    update: {},
    create: {
      name_en: 'Dough Sheeter',
      name_ar: 'مفرود العجين',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Pizza Oven' },
    update: {},
    create: {
      name_en: 'Pizza Oven',
      name_ar: 'فرن البيتزا',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Pizza Roller' },
    update: {},
    create: {
      name_en: 'Pizza Roller',
      name_ar: 'أسطوانة العجين للبيتزا',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Planetary Mixer' },
    update: {},
    create: {
      name_en: 'Planetary Mixer',
      name_ar: 'خلاط كوكبي',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Proover' },
    update: {},
    create: {
      name_en: 'Proover',
      name_ar: 'وحدة تخمير',
      parentId: 2,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Rotary Oven' },
    update: {},
    create: {
      name_en: 'Rotary Oven',
      name_ar: 'فرن دوار',
      parentId: 2,
    },
  });


  await prisma.category.upsert({
    where: { name_en: 'American Coffee Machine' },
    update: {},
    create: {
      name_en: 'American Coffee Machine',
      name_ar: 'ماكينة القهوة الأمريكية',
      parentId: 3,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Automatic Coffee Machine' },
    update: {},
    create: {
      name_en: 'Automatic Coffee Machine',
      name_ar: 'ماكينة قهوة أوتوماتيكية',
      parentId: 3,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Coffee Grinder' },
    update: {},
    create: {
      name_en: 'Coffee Grinder',
      name_ar: 'مطحنة القهوة',
      parentId: 3,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Espresso Coffee Machine' },
    update: {},
    create: {
      name_en: 'Espresso Coffee Machine',
      name_ar: 'ماكينة الإسبريسو',
      parentId: 3,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Turkish Coffee Machine' },
    update: {},
    create: {
      name_en: 'Turkish Coffee Machine',
      name_ar: 'ماكينة القهوة التركية',
      parentId: 3,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Water Boiler' },
    update: {},
    create: {
      name_en: 'Water Boiler',
      name_ar: 'غلاية ماء',
      parentId: 3,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Blast Chiller (Stainless Steel)' },
    update: {},
    create: {
      name_en: 'Blast Chiller (Stainless Steel)',
      name_ar: 'مبرد صدمات (ستانلس ستيل)',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Bottle Cooler' },
    update: {},
    create: {
      name_en: 'Bottle Cooler',
      name_ar: 'مبرد زجاجات',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cake Display Chiller' },
    update: {},
    create: {
      name_en: 'Cake Display Chiller',
      name_ar: 'ثلاجة عرض الكيك',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Chest Freezer' },
    update: {},
    create: {
      name_en: 'Chest Freezer',
      name_ar: 'فريزر أفقي',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Counter Chiller & Freezer' },
    update: {},
    create: {
      name_en: 'Counter Chiller & Freezer',
      name_ar: 'ثلاجة وفريزر طاولة عمل',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Ice Cream Display Freezer' },
    update: {},
    create: {
      name_en: 'Ice Cream Display Freezer',
      name_ar: 'فريزر عرض الآيس كريم',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Ice Cream Machine (Hard & Soft)' },
    update: {},
    create: {
      name_en: 'Ice Cream Machine (Hard & Soft)',
      name_ar: 'ماكينة آيس كريم (صلب وناعم)',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Ice Maker' },
    update: {},
    create: {
      name_en: 'Ice Maker',
      name_ar: 'صانعة الثلج',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Lowboy Chiller & Freezer' },
    update: {},
    create: {
      name_en: 'Lowboy Chiller & Freezer',
      name_ar: 'ثلاجة وفريزر منخفض',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Meat Display Chiller' },
    update: {},
    create: {
      name_en: 'Meat Display Chiller',
      name_ar: 'ثلاجة عرض اللحوم',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Open Chiller' },
    update: {},
    create: {
      name_en: 'Open Chiller',
      name_ar: 'مبرد مفتوح',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Salad Chiller' },
    update: {},
    create: {
      name_en: 'Salad Chiller',
      name_ar: 'مبرد سلطات',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sandwich & Pizza Chiller' },
    update: {},
    create: {
      name_en: 'Sandwich & Pizza Chiller',
      name_ar: 'مبرد الساندويتش والبيتزا',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Showcase Upright Chiller & Freezer' },
    update: {},
    create: {
      name_en: 'Showcase Upright Chiller & Freezer',
      name_ar: 'ثلاجة وفريزر عرض قائم',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Slush & Juice Dispenser Machine' },
    update: {},
    create: {
      name_en: 'Slush & Juice Dispenser Machine',
      name_ar: 'ماكينة توزيع السلاش والعصير',
      parentId: 4,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Upright Chiller & Freezer' },
    update: {},
    create: {
      name_en: 'Upright Chiller & Freezer',
      name_ar: 'ثلاجة وفريزر قائم',
      parentId: 4,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'BBQ' },
    update: {},
    create: {
      name_en: 'BBQ',
      name_ar: 'شواية باربكيو',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Boiling Ban' },
    update: {},
    create: {
      name_en: 'Boiling Ban',
      name_ar: 'حمام مائي للغلي',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Charboiler Grill' },
    update: {},
    create: {
      name_en: 'Charboiler Grill',
      name_ar: 'شواية فحم',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Chinese Cooker' },
    update: {},
    create: {
      name_en: 'Chinese Cooker',
      name_ar: 'موقد صيني',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Combi Oven' },
    update: {},
    create: {
      name_en: 'Combi Oven',
      name_ar: 'فرن كومبي',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cooker' },
    update: {},
    create: {
      name_en: 'Cooker',
      name_ar: 'موقد',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Fryer' },
    update: {},
    create: {
      name_en: 'Fryer',
      name_ar: 'قلاية',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Griddle' },
    update: {},
    create: {
      name_en: 'Griddle',
      name_ar: 'صاج',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Induction' },
    update: {},
    create: {
      name_en: 'Induction',
      name_ar: 'موقد تحريضي',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Lava Stone Grill' },
    update: {},
    create: {
      name_en: 'Lava Stone Grill',
      name_ar: 'شواية حجر بركاني',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Mandi Oven' },
    update: {},
    create: {
      name_en: 'Mandi Oven',
      name_ar: 'فرن مندي',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Microwave' },
    update: {},
    create: {
      name_en: 'Microwave',
      name_ar: 'ميكروويف',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Pasta Cooker' },
    update: {},
    create: {
      name_en: 'Pasta Cooker',
      name_ar: 'ماكينة طبخ المعكرونة',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Potato Oven' },
    update: {},
    create: {
      name_en: 'Potato Oven',
      name_ar: 'فرن بطاطس',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Rice Cooker' },
    update: {},
    create: {
      name_en: 'Rice Cooker',
      name_ar: 'طنجرة طبخ الأرز',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Rotisserie Chicken' },
    update: {},
    create: {
      name_en: 'Rotisserie Chicken',
      name_ar: 'شواية دجاج دوارة',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Salamander' },
    update: {},
    create: {
      name_en: 'Salamander',
      name_ar: 'شواية سلاماندر',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Shawarma Machine' },
    update: {},
    create: {
      name_en: 'Shawarma Machine',
      name_ar: 'ماكينة شاورما',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Tandoori Oven' },
    update: {},
    create: {
      name_en: 'Tandoori Oven',
      name_ar: 'فرن تندوري',
      parentId: 5,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Tilting Bain' },
    update: {},
    create: {
      name_en: 'Tilting Bain',
      name_ar: 'حمام مائي مائل',
      parentId: 5,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Conveyor Dishwasher' },
    update: {},
    create: {
      name_en: 'Conveyor Dishwasher',
      name_ar: 'غسالة أطباق سير ناقل',
      parentId: 6,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Glass Washer' },
    update: {},
    create: {
      name_en: 'Glass Washer',
      name_ar: 'غسالة كؤوس',
      parentId: 6,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hood Type Dishwasher' },
    update: {},
    create: {
      name_en: 'Hood Type Dishwasher',
      name_ar: 'غسالة أطباق بغطاء علوي',
      parentId: 6,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Under Counter Dishwasher' },
    update: {},
    create: {
      name_en: 'Under Counter Dishwasher',
      name_ar: 'غسالة أطباق تحت الطاولة',
      parentId: 6,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Cup Sealing' },
    update: {},
    create: {
      name_en: 'Cup Sealing',
      name_ar: 'ماكينة تغليف الأكواب',
      parentId: 7,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hand Wrapping' },
    update: {},
    create: {
      name_en: 'Hand Wrapping',
      name_ar: 'تغليف يدوي',
      parentId: 7,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sealing Machine' },
    update: {},
    create: {
      name_en: 'Sealing Machine',
      name_ar: 'ماكينة لحام وتغليف',
      parentId: 7,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Vacuum Packaging' },
    update: {},
    create: {
      name_en: 'Vacuum Packaging',
      name_ar: 'تعبئة وتغليف تفريغ الهواء',
      parentId: 7,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Bone Saw Machine' },
    update: {},
    create: {
      name_en: 'Bone Saw Machine',
      name_ar: 'ماكينة منشار العظام',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Burger Press' },
    update: {},
    create: {
      name_en: 'Burger Press',
      name_ar: 'مكبس البرجر',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cheese Grater' },
    update: {},
    create: {
      name_en: 'Cheese Grater',
      name_ar: 'مبشرة جبن',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cutter Mixer' },
    update: {},
    create: {
      name_en: 'Cutter Mixer',
      name_ar: 'خلاط قاطع',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hand Mixer' },
    update: {},
    create: {
      name_en: 'Hand Mixer',
      name_ar: 'خلاط يدوي',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Meat and Cheese Slicer' },
    update: {},
    create: {
      name_en: 'Meat and Cheese Slicer',
      name_ar: 'آلة تقطيع اللحوم والأجبان',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Meat Mincer' },
    update: {},
    create: {
      name_en: 'Meat Mincer',
      name_ar: 'فرامة لحم',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Potato Peeler' },
    update: {},
    create: {
      name_en: 'Potato Peeler',
      name_ar: 'مقشر البطاطس',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sausage Filler' },
    update: {},
    create: {
      name_en: 'Sausage Filler',
      name_ar: 'ماكينة حشو النقانق',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Spice Grinder' },
    update: {},
    create: {
      name_en: 'Spice Grinder',
      name_ar: 'مطحنة توابل',
      parentId: 8,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Vegetable Cutter' },
    update: {},
    create: {
      name_en: 'Vegetable Cutter',
      name_ar: 'قطاعة خضار',
      parentId: 8,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Bain Marie' },
    update: {},
    create: {
      name_en: 'Bain Marie',
      name_ar: 'حمام مائي',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Chafing Dish' },
    update: {},
    create: {
      name_en: 'Chafing Dish',
      name_ar: 'طبق تسخين',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Chips Warmer' },
    update: {},
    create: {
      name_en: 'Chips Warmer',
      name_ar: 'مسخن البطاطس',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Heat Lamp' },
    update: {},
    create: {
      name_en: 'Heat Lamp',
      name_ar: 'مصباح تسخين',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hot Cabinet' },
    update: {},
    create: {
      name_en: 'Hot Cabinet',
      name_ar: 'خزانة تسخين',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Infrared Lamps' },
    update: {},
    create: {
      name_en: 'Infrared Lamps',
      name_ar: 'مصابيح الأشعة تحت الحمراء',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Plate Warming' },
    update: {},
    create: {
      name_en: 'Plate Warming',
      name_ar: 'مسخن صحون',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Soup Kettle' },
    update: {},
    create: {
      name_en: 'Soup Kettle',
      name_ar: 'قدر شوربة',
      parentId: 9,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Warmer Display' },
    update: {},
    create: {
      name_en: 'Warmer Display',
      name_ar: 'عرض تسخين',
      parentId: 9,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Automatic Orange Juicer' },
    update: {},
    create: {
      name_en: 'Automatic Orange Juicer',
      name_ar: 'عصارة برتقال أوتوماتيكية',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Blender' },
    update: {},
    create: {
      name_en: 'Blender',
      name_ar: 'خلاط',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Citrus Juicer' },
    update: {},
    create: {
      name_en: 'Citrus Juicer',
      name_ar: 'عصارة حمضيات',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Ice Crusher' },
    update: {},
    create: {
      name_en: 'Ice Crusher',
      name_ar: 'كسارة ثلج',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Juice Extractor' },
    update: {},
    create: {
      name_en: 'Juice Extractor',
      name_ar: 'عصارة عصير',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Milkshake Machine' },
    update: {},
    create: {
      name_en: 'Milkshake Machine',
      name_ar: 'ماكينة ميلك شيك',
      parentId: 10,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sugarcane Machine' },
    update: {},
    create: {
      name_en: 'Sugarcane Machine',
      name_ar: 'ماكينة قصب السكر',
      parentId: 10,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Baffle Filter' },
    update: {},
    create: {
      name_en: 'Baffle Filter',
      name_ar: 'فلتر شحوم معدني',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Baking Tray' },
    update: {},
    create: {
      name_en: 'Baking Tray',
      name_ar: 'صينية خبز',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cutting Board' },
    update: {},
    create: {
      name_en: 'Cutting Board',
      name_ar: 'لوح تقطيع',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'GN Gastronomy' },
    update: {},
    create: {
      name_en: 'GN Gastronomy',
      name_ar: 'حاويات غاسترونورم',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Insect Killer' },
    update: {},
    create: {
      name_en: 'Insect Killer',
      name_ar: 'جهاز قتل الحشرات',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Knife' },
    update: {},
    create: {
      name_en: 'Knife',
      name_ar: 'سكين',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Pre-Rinse Shower' },
    update: {},
    create: {
      name_en: 'Pre-Rinse Shower',
      name_ar: 'دش ما قبل الغسيل',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Salvador' },
    update: {},
    create: {
      name_en: 'Salvador',
      name_ar: 'سلفادور (منخل)',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sterilization Knife' },
    update: {},
    create: {
      name_en: 'Sterilization Knife',
      name_ar: 'جهاز تعقيم السكاكين',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Trolley' },
    update: {},
    create: {
      name_en: 'Trolley',
      name_ar: 'عربة',
      parentId: 11,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Water Mixer' },
    update: {},
    create: {
      name_en: 'Water Mixer',
      name_ar: 'خلاط مياه',
      parentId: 11,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Chocolate Fountain' },
    update: {},
    create: {
      name_en: 'Chocolate Fountain',
      name_ar: 'نافورة الشوكولاتة',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Conveyor Toaster' },
    update: {},
    create: {
      name_en: 'Conveyor Toaster',
      name_ar: 'محمصة سير ناقل',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Corn Steamer' },
    update: {},
    create: {
      name_en: 'Corn Steamer',
      name_ar: 'بخار الذرة',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Cotton Candy Machine' },
    update: {},
    create: {
      name_en: 'Cotton Candy Machine',
      name_ar: 'ماكينة غزل البنات',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Crepe' },
    update: {},
    create: {
      name_en: 'Crepe',
      name_ar: 'كريب',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hot Chocolate' },
    update: {},
    create: {
      name_en: 'Hot Chocolate',
      name_ar: 'شوكولاتة ساخنة',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hot Dog' },
    update: {},
    create: {
      name_en: 'Hot Dog',
      name_ar: 'هوت دوج',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Panini Grill' },
    update: {},
    create: {
      name_en: 'Panini Grill',
      name_ar: 'شواية بانيني',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Popcorn Machine' },
    update: {},
    create: {
      name_en: 'Popcorn Machine',
      name_ar: 'ماكينة فشار',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sauce Warmer' },
    update: {},
    create: {
      name_en: 'Sauce Warmer',
      name_ar: 'مسخن الصوص',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Slice Toaster' },
    update: {},
    create: {
      name_en: 'Slice Toaster',
      name_ar: 'محمصة شرائح',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Toaster' },
    update: {},
    create: {
      name_en: 'Toaster',
      name_ar: 'محمصة خبز',
      parentId: 12,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Waffle' },
    update: {},
    create: {
      name_en: 'Waffle',
      name_ar: 'وافل',
      parentId: 12,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Cabinet' },
    update: {},
    create: {
      name_en: 'Cabinet',
      name_ar: 'خزانة',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Floor Grating' },
    update: {},
    create: {
      name_en: 'Floor Grating',
      name_ar: 'شبك أرضي',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Grease Trap' },
    update: {},
    create: {
      name_en: 'Grease Trap',
      name_ar: 'مصيدة الشحوم',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hand Wash Sink' },
    update: {},
    create: {
      name_en: 'Hand Wash Sink',
      name_ar: 'حوض غسيل اليدين',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Hood' },
    update: {},
    create: {
      name_en: 'Hood',
      name_ar: 'شفاط مطبخ',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Shelf' },
    update: {},
    create: {
      name_en: 'Shelf',
      name_ar: 'رف',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sinks (Top)' },
    update: {},
    create: {
      name_en: 'Sinks (Top)',
      name_ar: 'أحواض (علوي)',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Sinks With Stand' },
    update: {},
    create: {
      name_en: 'Sinks With Stand',
      name_ar: 'أحواض مع قاعدة',
      parentId: 13,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Table' },
    update: {},
    create: {
      name_en: 'Table',
      name_ar: 'طاولة',
      parentId: 13,
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Chrome' },
    update: {},
    create: {
      name_en: 'Chrome',
      name_ar: 'كروم',
      parentId: 14,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Green Epoxy' },
    update: {},
    create: {
      name_en: 'Green Epoxy',
      name_ar: 'ايبوكسي أخضر',
      parentId: 14,
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Stainless Steel' },
    update: {},
    create: {
      name_en: 'Stainless Steel',
      name_ar: 'ستانلس ستيل',
      parentId: 14,
    },
  });
}


async function seedParentCategories() {
  await prisma.category.upsert({
    where: { name_en: 'Bakery Equipment' },
    update: {},
    create: {
      name_en: 'Bakery Equipment',
      name_ar: 'معدات المخابز'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Coffee & Tea Machines' },
    update: {},
    create: {
      name_en: 'Coffee & Tea Machines',
      name_ar: 'آلات القهوة والشاي'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Coldline' },
    update: {},
    create: {
      name_en: 'Coldline',
      name_ar: 'كولدلاين'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Cooking Line' },
    update: {},
    create: {
      name_en: 'Cooking Line',
      name_ar: 'خط الطبخ'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Dishwasher Machine' },
    update: {},
    create: {
      name_en: 'Dishwasher Machine',
      name_ar: 'غسالة الصحون'
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Food Packing Machine' },
    update: {},
    create: {
      name_en: 'Food Packing Machine',
      name_ar: 'آلة تعبئة وتغليف المواد الغذائية'
    },
  });

  await prisma.category.upsert({
    where: { name_en: 'Food Processors' },
    update: {},
    create: {
      name_en: 'Food Processors',
      name_ar: 'معالجات الطعام'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Food Warmers' },
    update: {},
    create: {
      name_en: 'Food Warmers',
      name_ar: 'أجهزة تدفئة الطعام'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Juice Makers' },
    update: {},
    create: {
      name_en: 'Juice Makers',
      name_ar: 'صانعي العصير'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Kitchen Accessories' },
    update: {},
    create: {
      name_en: 'Kitchen Accessories',
      name_ar: 'إكسسوارات المطبخ'
    },
  });
  await prisma.category.upsert({
    where: { name_en: 'Snacks Equipment' },
    update: {},
    create: {
      name_en: 'Snacks Equipment',
      name_ar: 'معدات الوجبات الخفيفة'
    },
  });


  await prisma.category.upsert({
    where: { name_en: 'Stainless Steel Items' },
    update: {},
    create: {
      name_en: 'Stainless Steel Items',
      name_ar: 'عناصر الفولاذ المقاوم للصدأ'
    },
  });
}

async function seedUsers() {
  const adminPass = await bcrypt.hash('admin123', 10);
  const userPass = await bcrypt.hash('customer123', 10);
  await prisma.user.upsert({
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

  await prisma.user.upsert({
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
}

