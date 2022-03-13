export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  category: string;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple AirTag 4 Packs',
    img: 'https://m.media-amazon.com/images/I/71gY9E+cTaS._AC_SL1500_.jpg',
    price: 99.99,
    description: 'Keep track of and find your items alongside friends and devices in the Find My app',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MX542AM-A-AirTag-Pack/dp/B0932QJ2JZ/ref=sr_1_2?crid=3MCT256MBV8DF&keywords=apple&qid=1647119055&sprefix=a%2Caps%2C362&sr=8-2',
    category: "accessories",
    like: 23
  },
  {
    id: 2,
    name: '2021 Apple MacBook Pro - Space Gray',
    img: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg',
    price: 2539.00,
    description: '16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-16-inch-10%E2%80%91core-16%E2%80%91core/dp/B09JQK9DK5/ref=sr_1_4?crid=3MCT256MBV8DF&keywords=apple&qid=1647119416&sprefix=a%2Caps%2C362&sr=8-4',
    category: 'laptop',
    like: 20
  },
  {
    id: 3,
    name: 'Apple AirPods Max - Space Gray',
    img: 'https://m.media-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg',
    price: 469.00,
    description: 'Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences﻿',
    rating: 4.6,
    url: 'https://www.amazon.com/New-Apple-AirPods-Max-Green/dp/B08PZHYWJS/ref=sr_1_11?crid=3MCT256MBV8DF&keywords=apple&qid=1647119416&sprefix=a%2Caps%2C362&sr=8-11&th=1',
    category: 'headphones',
    like: 55
  },
  {
    id: 4,
    name: 'Apple USB-C to Lightning Cable (2 m)',
    img: 'https://m.media-amazon.com/images/I/61QvSXD+InL._AC_SL1500_.jpg',
    price: 20.18,
    description: 'Connect your iPhone, iPad, or iPod with Lightning connector to your USB-C or Thunderbolt 3 (USB-C) enabled Mac for syncing and charging, or to your USB-C enabled iPad for charging.',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-USB-C-Lightning-Cable-2-m/dp/B09BRGK8HX/ref=sr_1_35?crid=3MCT256MBV8DF&keywords=apple&qid=1647120234&sprefix=a%2Caps%2C362&sr=8-35&th=1',
    category: 'charger',
    like: 43
  },
  {
    id: 5,
    name: 'Apple Watch Series 6 (40mm) - Space Gray',
    img: 'https://m.media-amazon.com/images/I/71uN94CB+jL._AC_SL1500_.jpg',
    price: 264.99,
    description: 'LEAVE YOUR PHONE IN YOUR POCKET: Apple Watch Series 6 GPS Model lets you call, text, and get directions from your wrist, while leaving your phone in your pocket. It offers multiple connectivity options, including: Bluetooth, Wi-Fi, and NFC to suit all of your possible needs.',
    rating: 4.5,
    url: 'https://www.amazon.com/New-Apple-Watch-GPS-40mm/dp/B08KHR6B3W/ref=sr_1_51?crid=3MCT256MBV8DF&keywords=apple&qid=1647120405&sprefix=a%2Caps%2C362&sr=8-51',
    category: 'accessories',
    like: 37
  },
  {
    id: 6,
    name: 'Spigen Ultra Hybrid Mag [Anti-Yellowing Technology] Compatible with MagSafe Designed for iPhone 13 Pro Case (2021) - White',
    img: 'https://m.media-amazon.com/images/I/61XDcix-0kL._AC_SL1000_.jpg',
    price: 19.99,
    description: 'Magnet integrated shock absorption clear PC back case',
    rating: 4.6,
    url: 'https://www.amazon.com/Spigen-Anti-Yellowing-Technology-Compatible-Designed/dp/B096HHWGW9/ref=sr_1_2?crid=1S0CPS3GOZ38N&keywords=Case+with+MagSafe+for+iPhone+13+Pro&qid=1647167343&sprefix=otterbox+ancase+with+magsafe+for+iphone+13+pro%2Caps%2C281&sr=8-2',
    category: 'accessories',
    like: 25
  },
  {
    id: 7,
    name: 'OtterBox Symmetry Series+ Antimicrobial Case with MagSafe for iPhone 13 Pro - Black',
    img: 'https://m.media-amazon.com/images/I/61LAfTnXDaL._AC_SL1500_.jpg',
    price: 39.95,
    description: 'Tested to survive 3X as many drops as military standard (MIL-STD-810G 516.6) with lasting antimicrobial technology *Helps protect the case exterior against many common bacteria. It does not protect you or the screen',
    rating: 4.5,
    url: 'https://www.amazon.com/OtterBox-Symmetry-Antimicrobial-MagSafe-iPhone/dp/B09LPQY7H5/ref=sr_1_3?crid=1S0CPS3GOZ38N&keywords=Case%2Bwith%2BMagSafe%2Bfor%2BiPhone%2B13%2BPro&qid=1647167438&sprefix=otterbox%2Bancase%2Bwith%2Bmagsafe%2Bfor%2Biphone%2B13%2Bpro%2Caps%2C281&sr=8-3&th=1',
    category: 'accessories',
    like: 19
  },
  {
    id: 8,
    name: 'LONLI Classic - Italian Nappa Leather Case (for Apple iPhone 13 Pro) - Compatible with MagSafe | Raised Edges for Full Body Protection | Brandless and Classic - Caramel',
    img: 'https://m.media-amazon.com/images/I/71SXQMXE0LL._AC_SL1500_.jpg',
    price: 25.91,
    description: 'Made of Italian Nappa leather sourced from Gruppo Mastrotto tannery. With an extra layer of nano coating on the leather surface, the case’s color stays sharp through wear and tear.',
    rating: 4.3,
    url: 'https://www.amazon.com/dp/B09BRD98T4?ref=ods_ucc_kindle_B09BRD98T4_nrc_ucc&th=1',
    category: 'accessories',
    like: 50
  },
  {
    id: 9,
    name: 'Apple 5W USB Power Adapter',
    img: 'https://m.media-amazon.com/images/I/41Hi4DAXmgL._AC_SL1076_.jpg',
    price: 13.99,
    description: 'Featuring an ultracompact design, this power adapter offers fast, efficient charging at home, in the office, or on the go',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-USB-Power-Adapter-iPhone/dp/B0097BEFWC/ref=sr_1_92?crid=2OXNO3PUZQB6&keywords=apple&qid=1647121413&sprefix=app%2Caps%2C282&sr=8-92',
    category: 'charger',
    like: 45
  },
  {
    id: 10,
    name: 'Apple MacBook Pro 13.3"',
    img: 'https://m.media-amazon.com/images/I/51pWDiO9CrL._AC_SL1200_.jpg',
    price: 1639.99,
    description: 'Retina Display, M1 Chip with 8-Core CPU and 8-Core GPU, 16GB Memory, 512GB SSD, Silver, Late 2020',
    rating: 4.9,
    url: 'https://www.amazon.com/Apple-MacBook-Pro-8-core-Silver/dp/B091V55WNY/ref=sr_1_99?crid=2OXNO3PUZQB6&keywords=apple&qid=1647121532&sprefix=app%2Caps%2C282&sr=8-99',
    category: 'laptop',
    like: 80
  },
  {
    id: 11,
    name: '(Renewed) 2017 Apple MacBook Air with 1.8GHz Intel Core i5 (13-inch, 8GB RAM, 128GB SSD Storage)',
    img: 'https://m.media-amazon.com/images/I/91wYB53Y4aL._AC_SL1500_.jpg',
    price: 358.00,
    description: 'Renewed products look and work like new. These pre-owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test, replacement of any defective parts, and a thorough cleaning process. Packaging and accessories may be generic. All products on Amazon Renewed come with a minimum 90-day supplier-backed warranty.',
    rating: 4.3,
    url: 'https://www.amazon.com/Apple-MacBook-Processor-MQD32LL-Version/dp/B078H42W49/ref=sr_1_8?crid=3OKPA3NOY1EKS&keywords=apple+laptop&qid=1647167788&sprefix=apple+lapto%2Caps%2C309&sr=8-8',
    category: 'laptop',
    like: 34
  },
  {
    id: 12,
    name: '2019 Apple MacBook Pro - Space Gray',
    img: 'https://m.media-amazon.com/images/I/51pWDiO9CrL._AC_SL1200_.jpg',
    price: 2899.00,
    description: '16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-16-Inch-Storage-2-3GHz/dp/B081FV1Y57/ref=sr_1_7?crid=3OKPA3NOY1EKS&keywords=apple+laptop&qid=1647167893&sprefix=apple+lapto%2Caps%2C309&sr=8-7',
    category: 'laptop',
    like: 56
  },
  {
    id: 13,
    name: 'Apple MacBook Pro with Apple M1 Chip - Space Gray',
    img: 'https://m.media-amazon.com/images/I/31Xjk0pBGUL._AC_.jpg',
    price: 1639.99,
    description: '13-inch, 16GB RAM, 256GB SSD Storage',
    rating: 4.7,
    url: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08T4R9D7M/ref=sr_1_4?crid=3OKPA3NOY1EKS&keywords=apple+laptop&qid=1647167893&sprefix=apple+lapto%2Caps%2C309&sr=8-4',
    category: 'laptop',
    like: 46
  },
  {
    id: 14,
    name: 'Apple EarPods with Lightning Connector - White',
    img: 'https://m.media-amazon.com/images/I/51+UEOS6bML._AC_SL1500_.jpg',
    price: 23.67,
    description: 'Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear which makes them more comfortable for more people than any other earbud-style headphones',
    rating: 4.6,
    url: 'https://www.amazon.com/Apple-EarPods-Lightning-Connector-White/dp/B01M0GB8CC/ref=sr_1_1?keywords=apple%2Bheadphones&qid=1647168485&sprefix=apple%2Bheadp%2Caps%2C518&sr=8-1&th=1',
    category: 'headphones',
    like: 39
  },
  {
    id: 15,
    name: 'Apple AirPods Pro',
    img: 'https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg',
    price: 249.00,
    description: 'Active Noise Cancellation blocks outside noise, so you can immerse yourself in music Transparency mode for hearing and interacting with the world around you Spatial audio with dynamic head tracking places sound all around you',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-MLWK3AM-A-AirPods-Pro/dp/B09JQMJHXY/ref=sr_1_2?keywords=apple+headphones&qid=1647168626&sprefix=apple+headp%2Caps%2C518&sr=8-2',
    category: 'headphones',
    like: 65
  },
  {
    id: 16,
    name: 'Apple AirPods (2nd Generation)',
    img: 'https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg',
    price: 129.99,
    description: 'Quick access to Siri by saying “ Hey Siri ” More than 24 hours total listening time with the Charging Case Effortless setup, in-ear detection, and automatic switching for a magical experience Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV',
    rating: 4.8,
    url: 'https://www.amazon.com/Apple-AirPods-Charging-Latest-Model/dp/B07PXGQC1Q/ref=sr_1_4?keywords=apple+headphones&qid=1647168626&sprefix=apple+headp%2Caps%2C518&sr=8-4',
    category: 'headphones',
    like: 72
  },
  {
    id: 17,
    name: 'Apple AirPods (3rd Generation)',
    img: 'https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SL1500_.jpg',
    price: 179.99,
    description: 'Spatial audio with dynamic head tracking places sound all around you Adaptive EQ automatically tunes music to your ears All-new contoured design Force sensor lets you easily control your entertainment, answer or end calls, and more Sweat and water resistant Up to 6 hours of listening time with one charge',
    rating: 4.6,
    url: 'https://www.amazon.com/Apple-MME73AM-A-AirPods-3rd-Generation/dp/B09JQL3NWT/ref=sr_1_5?keywords=apple+headphones&qid=1647168626&sprefix=apple+headp%2Caps%2C518&sr=8-5',
    category: 'headphones',
    like: 30
  },
  {
    id: 18,
    name: 'Apple MagSafe Duo Charger',
    img: 'https://m.media-amazon.com/images/I/61va2nt9fBL._AC_SL1500_.jpg',
    price: 129.00,
    description: 'The MagSafe Duo Charger conveniently charges your compatible iPhone, Apple Watch, Wireless Charging Case for AirPods, and other Qi-certified devices.',
    rating: 4.6,
    url: 'https://www.amazon.com/Apple-MHXF3AM-A-MagSafe-Charger/dp/B08MWR2NXZ/ref=sr_1_18?crid=PZA4HUU7MFOG&keywords=apple+charger&qid=1647169012&sprefix=apple+charger%2Caps%2C460&sr=8-18',
    category: 'charger',
    like: 23
  },
  {
    id: 19,
    name: 'iPhone Fast Charger, USB C Fast Charger 20W PD Fast Adapter Type C Power Wall Charger',
    img: 'https://m.media-amazon.com/images/I/51b6Ad3hdCL._SL1500_.jpg',
    price: 14.99,
    description: 'Broad Compatibility: This iPhone fast charger kit is perfectly compatible with iPhone 13/13 Pro/13 Pro Max/13 Mini/12/12 Mini/12 Pro/12 Pro Max/11/11Pro/XS/XS Max/XR/X, iPad Pro/iPad Mini/iPad Air, AirPods Pro and more',
    rating: 4.4,
    url: 'https://www.amazon.com/iPhone-Charger-Adapter-Power-Compatible/dp/B08YRKL1L8/ref=sr_1_21?crid=PZA4HUU7MFOG&keywords=apple+charger&qid=1647169012&sprefix=apple+charger%2Caps%2C460&sr=8-21',
    category: 'charger',
    like: 16
  },
  {
    id: 20,
    name: 'Mac Book Pro Charger - 100W USB C Charger Power Adapter Compatible with MacBook Pro 16, 15, 14, 13 Inch, MacBook Air 13 Inch, iPad Pro 2021/2020/2019/2018, Included 7.2ft USB C to C Cable',
    img: 'https://m.media-amazon.com/images/I/51nl1ANJw8L._AC_SL1500_.jpg',
    price: 35.99,
    description: 'Super Fast Charger: ixcv 100W USB C Macbook charger has a high charging efficiency of up to 96%, the charger can fully charge most laptops in about 1 hour and 25 minutes. It can charge most mobile phones from 0% to 80% in 20 minutes. Works with USB C 29W, 30W, 61W, 67W, 87W, 96W PD model.',
    rating: 4.4,
    url: 'https://www.amazon.com/Mac-Book-Pro-Charger-Compatible/dp/B097PTBB5V/ref=sr_1_13?crid=PZA4HUU7MFOG&keywords=apple+charger&qid=1647169012&sprefix=apple+charger%2Caps%2C460&sr=8-13',
    category: 'charger',
    like: 48
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/