export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  rating: number,
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple AirTag 4 Packs',
    img: 'https://m.media-amazon.com/images/I/71gY9E+cTaS._AC_SL1500_.jpg',
    price: 99.99,
    description: 'Keep track of and find your items alongside friends and devices in the Find My app',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MX542AM-A-AirTag-Pack/dp/B0932QJ2JZ/ref=sr_1_2?crid=3MCT256MBV8DF&keywords=apple&qid=1647119055&sprefix=a%2Caps%2C362&sr=8-2'
  },
  {
    id: 2,
    name: '2021 Apple MacBook Pro - Space Gray',
    img: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg',
    price: 2539.00,
    description: '16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQK9DK5/ref=sr_1_4?crid=3MCT256MBV8DF&keywords=apple&qid=1647119416&sprefix=a%2Caps%2C362&sr=8-4'
  },
  {
    id: 3,
    name: 'Apple AirPods Max - Space Gray',
    img: 'https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg',
    price: 469.00,
    description: 'Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences﻿',
    rating: 4.6,
    url: 'https://www.amazon.com/New-Apple-AirPods-Max-Green/dp/B08PZHYWJS/ref=sr_1_11?crid=3MCT256MBV8DF&keywords=apple&qid=1647119416&sprefix=a%2Caps%2C362&sr=8-11&th=1'
  },
  {
    id: 4,
    name: 'Apple USB-C to Lightning Cable (2 m)',
    img: 'https://m.media-amazon.com/images/I/61QvSXD+InL._AC_SL1500_.jpg',
    price: 20.18,
    description: 'Connect your iPhone, iPad, or iPod with Lightning connector to your USB-C or Thunderbolt 3 (USB-C) enabled Mac for syncing and charging, or to your USB-C enabled iPad for charging.',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-USB-C-Lightning-Cable-2-m/dp/B09BRGK8HX/ref=sr_1_35?crid=3MCT256MBV8DF&keywords=apple&qid=1647120234&sprefix=a%2Caps%2C362&sr=8-35&th=1'
  },
  {
    id: 5,
    name: 'Apple Watch Series 6 (40mm) - Space Gray',
    img: 'https://m.media-amazon.com/images/I/71uN94CB+jL._AC_SL1500_.jpg',
    price: 264.99,
    description: 'LEAVE YOUR PHONE IN YOUR POCKET: Apple Watch Series 6 GPS Model lets you call, text, and get directions from your wrist, while leaving your phone in your pocket. It offers multiple connectivity options, including: Bluetooth, Wi-Fi, and NFC to suit all of your possible needs.',
    rating: 4.5,
    url: 'https://www.amazon.com/New-Apple-Watch-GPS-40mm/dp/B08KHR6B3W/ref=sr_1_51?crid=3MCT256MBV8DF&keywords=apple&qid=1647120405&sprefix=a%2Caps%2C362&sr=8-51'
  },
  {
    id: 6,
    name: 'Apple TV 4K (32GB)',
    img: 'https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SL1024_.jpg',
    price: 169.99,
    description: 'Watch original stories from the most creative minds in TV and film on Apple TV+; included for one year when you buy an Apple TV 4K',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-TV-32GB-Latest-Model/dp/B075NCMLYL/ref=sr_1_83?crid=3MCT256MBV8DF&keywords=apple&qid=1647120717&sprefix=a%2Caps%2C362&sr=8-83'
  },
  {
    id: 7,
    name: 'Apple Magic Trackpad (Wireless, Rechargable) - Silver',
    img: 'https://m.media-amazon.com/images/I/41KZtzhlK+L._AC_SL1500_.jpg',
    price: 129.00,
    description: 'Magic Trackpad pairs automatically with your Mac, so you can get to work right away. The incredibly long-lasting internal battery will power it for about a month or more between charges, and it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-Magic-Trackpad-Wireless-Rechargable/dp/B09BRG3MZ2/ref=sr_1_44?crid=2OXNO3PUZQB6&keywords=apple&qid=1647121149&sprefix=app%2Caps%2C282&sr=8-44'
  },
  {
    id: 8,
    name: 'Apple Magic Mouse (Wireless, Rechargable) - Silver',
    img: 'https://m.media-amazon.com/images/I/61BZ5N9n4IL._AC_SL1500_.jpg',
    price: 52.64,
    description: 'It is ready to go right out of the box and pairs automatically with your Mac, and it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.',
    rating: 4.7,
    url: 'https://www.amazon.com/dp/B09BRD98T4?ref=ods_ucc_kindle_B09BRD98T4_nrc_ucc&th=1'
  },
  {
    id: 9,
    name: 'Apple 5W USB Power Adapter',
    img: 'https://m.media-amazon.com/images/I/41Hi4DAXmgL._AC_SL1076_.jpg',
    price: 13.99,
    description: 'Featuring an ultracompact design, this power adapter offers fast, efficient charging at home, in the office, or on the go',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-USB-Power-Adapter-iPhone/dp/B0097BEFWC/ref=sr_1_92?crid=2OXNO3PUZQB6&keywords=apple&qid=1647121413&sprefix=app%2Caps%2C282&sr=8-92'
  },
  {
    id: 10,
    name: 'Apple MacBook Pro 13.3"',
    img: 'https://m.media-amazon.com/images/I/51pWDiO9CrL._AC_SL1200_.jpg',
    price: 1639.99,
    description: 'Retina Display, M1 Chip with 8-Core CPU and 8-Core GPU, 16GB Memory, 512GB SSD, Silver, Late 2020',
    rating: 4.9,
    url: 'https://www.amazon.com/Apple-MacBook-Pro-8-core-Silver/dp/B091V55WNY/ref=sr_1_99?crid=2OXNO3PUZQB6&keywords=apple&qid=1647121532&sprefix=app%2Caps%2C282&sr=8-99'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/