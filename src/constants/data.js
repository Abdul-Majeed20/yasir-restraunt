import images from './images';

// Traditional Pakistani Dishes
const traditionalDishes = [
  {
    title: 'Sindhi Biryani',
    price: '₨450',
    tags: 'Basmati Rice | Spiced Chicken | Potatoes | Yogurt',
  },
  {
    title: 'Chicken Karahi',
    price: '₨1200',
    tags: 'Full | Fresh Chicken | Tomatoes | Ginger | Green Chilies',
  },
  {
    title: 'Mutton Nihari',
    price: '₨1500',
    tags: 'Slow Cooked | Bone Marrow | Spices | Ginger',
  },
  {
    title: 'Seekh Kebabs',
    price: '₨400',
    tags: 'Half Dozen | Minced Meat | Herbs | Charcoal Grilled',
  },
  {
    title: 'Daal Chawal',
    price: '₨350',
    tags: 'Yellow Lentils | Basmati Rice | Fried Onions',
  },
];

// Pakistani Beverages
const beverages = [
  {
    title: 'Mango Lassi',
    price: '₨250',
    tags: 'Sweet Yogurt | Alphonso Mango | Cardamom',
  },
  {
    title: 'Kashmiri Chai',
    price: '₨180',
    tags: 'Pink Tea | Almonds | Pistachio | Salt',
  },
  {
    title: 'Fresh Sugarcane Juice',
    price: '₨150',
    tags: 'Ganna | Lemon | Ginger | Mint',
  },
  {
    title: 'Rooh Afza Milkshake',
    price: '₨220',
    tags: 'Rose Syrup | Cold Milk | Basil Seeds',
  },
  {
    title: 'Pakola Float',
    price: '₨280',
    tags: 'Green Cream Soda | Vanilla Ice Cream',
  },
];

// Restaurant Awards & Recognition
const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Highway Restaurant 2022',
    subtitle: 'Excellence in service & authentic Pakistani cuisine',
  },
  {
    imgUrl: images.award01,
    title: 'Sindh Food Festival Winner',
    subtitle: 'Best Traditional Biryani & Karahi',
  },
  {
    imgUrl: images.award05,
    title: 'Travelers Choice Award',
    subtitle: 'Top rated restaurant on NH-22 Indus Highway',
  },
  {
    imgUrl: images.award03,
    title: 'Culinary Heritage Award',
    subtitle: 'Preserving authentic Sindhi culinary traditions',
  },
];

export default { traditionalDishes, beverages, awards };