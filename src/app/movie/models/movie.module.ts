export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;

}

export const movies: Movie[] = [
  {
    id: 1,
    name: 'Horse Yoga',
    genre: 'yes',
    image:
      'https://pictures.abebooks.com/isbn/9781841614014-us.jpg',
    releaseYear: '1984',
  },
  {
    id: 2,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41FSMUfjPYL._SX279_BO1,204,203,200_.jpg',
    name: 'Terminator 2: Judgement Day',
    genre: 'Sci-fi',
    releaseYear: '1991',
  },
  {
    id: 3,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/21vWUE2t23L._SX320_BO1,204,203,200_.jpg',
    name: `Pirates of the Caribbean: Dead Man's Chest`,
    genre: 'Action/Adventure',
    releaseYear: '2006',
  },
  {
    id: 4,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41f9nQqYDNS._SX452_BO1,204,203,200_.jpg',
    name: `The Mullet: Hairstyle of the Gods Hardcover`,
    genre: 'Animation',
    releaseYear: '2000',
  },
  {
    id: 5,
    image:
      'https://m.media-amazon.com/images/P/159240409X.01._SCLZZZZZZZ_SX500_.jpg',
    name: `A Million Ways to Die in the West`,
    genre: 'Comedy/Western',
    releaseYear: '2014',
  },
  {
    id: 6,
    image:
      'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    name: `Pokémon Detective Pikachu`,
    genre: 'Action/Comedy',
    releaseYear: '2019',
  },
  {
    id: 7,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    name: 'Toy Story 4',
    genre: 'Animation/Comedy',
    releaseYear: '2019',
  },
];























