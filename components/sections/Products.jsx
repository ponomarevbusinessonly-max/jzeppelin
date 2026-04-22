'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDict, useLocale } from '@/lib/i18n/LocaleProvider';

export default function Products() {
  const dict = useDict();
  const locale = useLocale();
  const prefix = locale === 'uk' ? '/uk' : '';
  const products = [
    {
      name: dict.products.items.drink.name,
      description: dict.products.items.drink.description,
      image: "/products/DrinkCheck.jpg",
      floatImage: "/visualelements/Martini.png",
      floatClass: "sketch-float",
      href: `${prefix}/products/drink-check-test`,
      invertImage: true,
    },
    {
      name: dict.products.items.multi.name,
      description: dict.products.items.multi.description,
      image: "/products/MultiTest.jpg",
      floatImage: "/visualelements/capsule.png",
      floatClass: "sketch-float-alt",
      href: `${prefix}/products/multi-drug-test`,
      invertImage: false,
    },
    {
      name: dict.products.items.thc.name,
      description: dict.products.items.thc.description,
      image: "/products/THCParent.jpg",
      floatImage: "/visualelements/weed.png",
      floatClass: "sketch-float-slow",
      href: `${prefix}/products/thc-parent-test`,
      invertImage: false,
    },
  ];
  return (
    <section id="products" className="relative py-[90px] md:py-[115px] overflow-hidden">

      {/* Декоративные фоновые элементы секции */}
      <div className="absolute left-[1%] top-[10%] opacity-[0.80] sketch-float pointer-events-none hidden lg:block" style={{ transform: 'rotate(-20deg)' }}>
        <Image src="/visualelements/starpill.png" alt="" width={128} height={128}
          className="w-[115px] h-[115px] object-contain" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="absolute right-[2%] top-[20%] opacity-[0.80] sketch-float-alt pointer-events-none hidden lg:block" style={{ transform: 'rotate(10deg)' }}>
        <Image src="/visualelements/smilepill.png" alt="" width={112} height={112}
          className="w-[102px] h-[102px] object-contain" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="absolute right-[5%] bottom-[8%] opacity-[0.80] sketch-float-slow pointer-events-none hidden xl:block" style={{ transform: 'rotate(30deg)' }}>
        <Image src="/visualelements/alienpill.png" alt="" width={104} height={104}
          className="w-[90px] h-[90px] object-contain" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.h2
          className="font-heading text-4xl md:text-[3.5rem] tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {dict.products.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="relative border border-border p-6 md:p-8 group hover:border-foreground/40 transition-colors overflow-hidden cursor-default flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              {/* Плавающий фоновый элемент за карточкой */}
              <div className={`absolute -top-5 -right-5 opacity-[0.80] pointer-events-none ${product.floatClass}`}>
                <Image
                  src={product.floatImage}
                  alt=""
                  width={128}
                  height={128}
                  className="w-[115px] h-[115px] object-contain"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: product.invertImage ? 'invert(1)' : 'none',
                  }}
                />
              </div>

              {/* Фото продукта */}
              <div className="relative z-10 w-full aspect-square bg-muted border border-border mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl tracking-tight mb-3 relative z-10">
                {product.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6 relative z-10 flex-1">
                {product.description}
              </p>
              <div className="flex gap-2 relative z-10 mt-auto">
                <Link href={product.href} className="px-4 py-2 bg-foreground text-background font-body text-xs font-medium hover:bg-foreground/85 transition-colors">
                  {dict.products.details}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
