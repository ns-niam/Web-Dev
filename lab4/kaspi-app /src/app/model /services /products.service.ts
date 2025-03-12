import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      title: 'Versace Eros Eau de Toilette EDT 100 ml, for men',
      description:
        'The perfection of the male body embodies the ideals of Greek mythology and classical sculpture, whose atmosphere has accompanied the style of the House of Versace since its founding. He is Eros, the god of love, armed with a bow and arrows, capable of making a person fall in love. Versace Eros is a fragrance for a strong, passionate, and confident man.',
      rating: 5,
      price: '39,990',
      link: 'https://kaspi.kz/shop/p/versace-eros-tualetnaja-voda-edt-100-ml-dlja-muzhchin-17301879/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/heb/h0e/63817908092958.jpg?format=gallery-medium',
    },
    {
      title: 'Apple iPhone 16 Pro Max 256GB Black',
      description:
        'The flagship iPhone 16 Pro Max incorporates the best features of a modern gadget. It is the most powerful device in the Apple iPhone lineup, featuring a large display, stunning performance, and incredible external ergonomics. The iPhone 16 Pro Max is a true titan in its family. The flagship model with ultra-thin bezels has an ergonomic design, high impact, and water resistance. It is complemented by a next-generation Ceramic Shield front panel and a specially textured glass back panel with a matte finish. The series includes several smartphone options: 1TB, 256GB, and iPhone 16 Pro Max 512GB in black, titanium, white, and the new Desert Titanium shade.',
      rating: 5,
      price: '651,837',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
    },
    {
      title: 'Apple AirPods 3 with Lightning Charging Case White',
      description:
        'A dynamic driver developed by Apple uses a special amplifier, delivering incredible sound detail. You will hear the entire range clearly—from deep, rich bass to crystal-clear high notes.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      price: '67,800',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large',
    },
    {
      title: 'Bonduelle Sweet Corn 170g',
      description:
        'That wonderful taste that many remember from childhood! The sweet corn is carefully selected before being canned, with the process from harvest to packaging taking only 4 hours. That’s why your table always has the finest, juiciest, and golden grains. Create classic, traditional dishes with Bonduelle’s juicy and versatile corn.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/bonduelle-kukuruza-sladkaja-170-g-100213747/?c=750000000',
      price: '610',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pd0/23679124.jpeg?format=gallery-medium',
    },
    {
      title: 'White Boxers',
      description:
        'We present to you cotton summer boys’ boxers from Buyeasy — the perfect underwear for boys. These thin boxers are made of high-quality cotton, making them pleasant to the touch and allowing the skin to breathe.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/boksery-147234-belyi-98-104-121129825/?c=750000000',
      price: '2,499',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h75/86732733087774.jpg?format=gallery-medium',
    },
    {
      title: 'Yashkino Chocolate Gingerbread 350g',
      description:
        'Classic gingerbread made from scalded dough with cocoa, covered with sugar glaze and a chocolate-glazed bottom.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/trapeza-prjaniki-russkie-vanil-nye-350-g-102903335/?c=750000000',
      price: '699',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h97/hd9/68721829249054.jpg?format=gallery-medium',
    },
    {
      title: 'Derwent 32891 Hexagonal Colored Pencils, 72 pcs',
      description:
        'The DERWENT WATERCOLOUR gift set includes 72 high-quality watercolor pencils. The pencils come in a beautiful wooden box with the company’s logo and two small locks. The core is made of high-quality colored pigments and white clay, known for its special softness and purity. The core does not smear or crumble, and the tones blend easily. Strikingly bright colors and smooth, beautiful strokes add maximum realism to the drawing. They can be used dry, like regular pencils. To achieve the stunning effects expected from watercolor pencils, simply add a little water.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/derwent-32891-forma-shestigrannaja-72-sht-120836981/?c=750000000',
      price: '168,500',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h7c/86390559932446.jpg?format=gallery-medium',
    },
    {
      title:
        'Apple MacBook Pro 16 2023 16.2" / 48GB / SSD 1024GB / macOS / MUW63',
      description:
        'The Apple MacBook Pro 16 M3 Max 2023 is perfect for professionals in any field. It enhances productivity with increased performance, battery life, and connectivity options.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-48-gb-ssd-1024-gb-macos-muw63-114863237/?c=750000000',
      price: '1,971,998',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2e/84577772339230.jpg?format=gallery-medium',
    },
    {
      title: 'Jansaya Melon',
      description:
        'The DERWENT WATERCOLOUR gift set includes 72 high-quality watercolor pencils. The pencils come in a beautiful wooden box with the company’s logo and two small locks. The core is made of high-quality colored pigments and white clay, known for its special softness and purity. The core does not smear or crumble, and the tones blend easily. Strikingly bright colors and smooth, beautiful strokes add maximum realism to the drawing. They can be used dry, like regular pencils. To achieve the stunning effects expected from watercolor pencils, simply add a little water.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dynja-zhansaja-116786805/?c=750000000',
      price: '500',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he4/hb5/85224578023454.jpg?format=gallery-medium',
    },
    {
      title: 'Rahat Kazakhstan Dark Chocolate Bar 100g',
      description:
        'Especially delicious Kazakh milk chocolate with a vanilla aroma, made from selected cocoa beans using a classic technology at the Rahat chocolate factory. Natural chocolate will energize you and bring joy all day long.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/rahat-kazakhstan-shokoladnaja-plitka-temnyi-100-g-100221859/?c=750000000',
      price: '735',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-medium',
    },
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
