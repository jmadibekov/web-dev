import { Category } from './categories';

export interface Product {
  id: number;
  category: Category;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  amazonLinkUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    category: Category.Electronics,
    name: 'iPhone 13 Pro Max',
    price: 1199,
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel',
    imageUrl: 'https://m.media-amazon.com/images/I/611ovP2GkrL._FMwebp__.jpg',
    rating: 4.7,
    amazonLinkUrl: 'https://www.amazon.com/dp/B09V3KDW63/ref=fs_a_iwp2_0',
  },
  {
    id: 2,
    category: Category.Books,
    name: 'A Gentleman in Moscow: A Novel',
    price: 9.34,
    description:
      'The mega-bestseller with more than 2 million readers, soon to be a major television series',
    imageUrl:
      'https://m.media-amazon.com/images/P/0143110438.01._SCLZZZZZZZ_SX500_.jpg',
    rating: 4.9,
    amazonLinkUrl:
      'https://www.amazon.com/A-Gentleman-in-Moscow/dp/0143110438/ref=sr_1_1?keywords=a+gentleman+in+moscow&qid=1647496023&sr=8-1',
  },
  {
    id: 3,
    category: Category.Electronics,
    name: 'Apple AirPods Pro',
    price: 189.99,
    description: '',
    imageUrl: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
    amazonLinkUrl:
      'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_3?keywords=airpods+pro&qid=1647496197&sr=8-3',
    rating: 5.0,
  },
  {
    id: 4,
    category: Category.Clothes,
    name: "Dockers Men's Weston Wool Blend Scarf Coat",
    price: 200,
    description: '',
    imageUrl: 'https://m.media-amazon.com/images/I/81d7rlhyH3S._AC_UY879_.jpg',
    amazonLinkUrl:
      'https://www.amazon.com/Dockers-Washable-Blend-Walking-Scarf/dp/B01K7E0IDM/ref=sr_1_8?keywords=coat&qid=1647496474&sr=8-8',
    rating: 4,
  },
];
