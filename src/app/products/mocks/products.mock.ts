import { Genre, IProductModel } from '../models';

export const products: IProductModel[] = [{
  name: 'It',
  price: 7.5,
  sale: 5,
  image: 'https://i.pinimg.com/originals/95/73/1e/95731e0e0f922bdbb5e720d54' +
    '56037aa.jpg',
  authors: ['Stephen King'],
  description: 'The story follows the experiences of seven children as they ' +
    'are terrorized by an evil entity that exploits the fears of its victims' +
    ' to disguise itself while hunting its prey. "It" primarily appears in the' +
    ' form of Pennywise the Dancing Clown to attract its preferred prey of ' +
    'young children.',
  isAvailable: true,
  genres: [Genre.Horror, Genre.DarkFantasy, Genre.Thriller],
  lastUpdate: 'Mon Oct 07 2019 16:00:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'Into Thin Air',
  price: 8,
  authors: ['Jon Krakauer'],
  description: 'A Personal Account of the Mt. Everest Disaster is a ' +
    '1997 bestselling non-fiction book written by Jon Krakauer.',
  isAvailable: true,
  image: 'https://images-na.ssl-images-amazon.com/images/I/613xliMRGmL.jpg',
  genres: [Genre.NonFiction],
  lastUpdate: 'Tuesday Oct 08 2019 17:00:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'Fire & Blood',
  price: 9.2,
  sale: 1.24,
  image: 'https://www.janisroze.lv/media/catalog/product/cache/5/image/' +
    '9df78eab33525d08d6e5fb8d27136e95/9/7/9780008307738_28.jpg',
  authors: ['George R. R. Martin'],
  description: 'Fire and Blood begins their tale with the legendary Aegon ' +
    'the Conqueror, creator of the Iron Throne, and goes on to recount the ' +
    'generations of Targaryens who fought to hold that iconic seat, all the' +
    ' way up to the civil war that nearly tore their dynasty apart.' +
    ' What really happened during the Dance of the Dragons?',
  isAvailable: true,
  genres: [Genre.Fantasy],
  lastUpdate: 'Wed Oct 09 2018 00:01:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'The Great Gatsby',
  price: 10,
  image: 'https://d3u67r7pp2lrq5.cloudfront.net/product_photos/17103633/' +
    'il_fullxfull.464268672_vh8p_original.jpg',
  authors: ['F. Scott Fitzgerald'],
  description: 'The story of the mysteriously wealthy Jay Gatsby ' +
    'and his love for the beautiful Daisy Buchanan, of lavish parties ' +
    'on Long Island at a time when The New York Times noted “gin was ' +
    'the national drink and sex the national obsession,” it is an ' +
    'exquisitely crafted tale of America in the 1920s.',
  isAvailable: false,
  genres: [Genre.Tragedy],
  lastUpdate: 'Wed Oct 09 2018 16:09:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'To Kill a Mockingbird',
  price: 6,
  image: 'https://cdn11.bigcommerce.com/s-x3k2fq1/images/stencil/2048x2048/' +
    'products/2220/9187/01-P83-05_TO_KILL_A_MOCKINGBIRD__70127.1531080675' +
    '.jpg?c=2',
  authors: ['Harper Lee'],
  description: 'The novel is renowned for its warmth and humor, ' +
    'despite dealing with the serious issues of rape and racial inequality.',
  isAvailable: true,
  genres: [Genre.Bildungsroman],
  lastUpdate: 'Wed Oct 09 2018 16:40:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'Harry Potter and the Sorcerer\'s Stone',
  price: 11.1,
  authors: ['J.K. Rowling'],
  image: 'https://i.pinimg.com/originals/f5/5c/b9/f55cb92f0b7de99a9bad66d427e' +
    '121fc.jpg',
  description: 'The first novel in the Harry Potter series and Rowling\'s' +
  + 'debut novel, it follows Harry Potter, a young wizard who discovers ' +
    'his magical heritage on his eleventh birthday, when he receives a letter ' +
    'of acceptance to Hogwarts School of Witchcraft and Wizardry. ',
  isAvailable: true,
  genres: [Genre.Fantasy],
  lastUpdate: 'Wed Oct 09 2018 12:00:58 GMT+0300 (Eastern European Summer Time)'
}, {
  name: 'The Talisman',
  price: 5.7,
  image: 'https://images-na.ssl-images-amazon.com/images/I/81zxmzi%2BrbL.jpg',
  authors: ['Stephen King', 'Peter Straub'],
  description: 'Jack Sawyer, twelve years old, sets out from Arcadia Beach, ' +
    'New Hampshire in a bid to save his mother, who is dying from cancer,' +
    ' by finding a crystal called "the Talisman." Jack\'s journey takes ' +
    'him simultaneously through the American heartland and ' +
    '"the Territories," a strange fantasy land which is set in a universe ' +
    'parallel to that of Jack\'s United States. ',
  isAvailable: true,
  genres: [Genre.DarkFantasy],
  lastUpdate: 'Thu Oct 11 2019 11:00:58 GMT+0300 (Eastern European Summer Time)'
}];
