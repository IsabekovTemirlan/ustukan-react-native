import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window')?.width;
const screenHeight = Dimensions.get('window')?.height;

export const getw = (percent) => (screenWidth / 100) * percent;
export const geth = (percent) => (screenHeight / 100) * percent;

export const persons = [
  { id: 1, title: 'Ата', x: getw(25), y: geth(18), posibleItems: [1, 2, 3, 4] },
  { id: 2, title: 'Эне', x: getw(55), y: geth(18), posibleItems: [1, 2, 3, 4, 10] },
  { id: 3, title: 'Байке', x: getw(80), y: geth(28), posibleItems: [1, 2, 3, 4, 5] },
  { id: 4, title: 'Жеңэ', x: getw(80), y: geth(40), posibleItems: [1, 2, 3, 5, 6, 7, 8, 9, 10] },
  { id: 5, title: 'Ини', x: getw(80), y: geth(52), posibleItems: [1, 2, 3, 4, 5, 6, 7, 8,] },
  { id: 6, title: 'Кудагый', x: getw(25), y: geth(62), posibleItems: [1, 2, 3, 4, 10] },
  { id: 7, title: 'Келин', x: getw(55), y: geth(62), posibleItems: [5, 6, 7, 9] },
  { id: 8, title: 'Куда', x: getw(2), y: geth(28), posibleItems: [1, 2, 3, 4] },
  { id: 9, title: 'Тайке', x: getw(2), y: geth(40), posibleItems: [1, 2, 3, 4] },
  { id: 10, title: 'Жезде', x: getw(2), y: geth(52), posibleItems: [2, 3, 4, 5, 6, 7] },
];

export const itemsObjects = [
  { id: 1, text: "Жамбаш", x: getw(26), y: geth(33), img: require(`../../assets/images/jambash.png`) },
  { id: 2, text: "Жото жилик", x: getw(59), y: geth(32), img: require(`../../assets/images/joto-jilik.png`) },
  { id: 3, text: "Кашка жилик", x: getw(62), y: geth(40), img: require(`../../assets/images/kashka-jilik.png`) },
  { id: 4, text: "Кар жилик", x: getw(61), y: geth(50), img: require(`../../assets/images/kar-jilik.png`) },
  { id: 5, text: "Далы", x: getw(43), y: geth(51.5), img: require(`../../assets/images/dal.png`) },
  { id: 6, text: "Кабыргалар", x: getw(25), y: geth(50), img: require(`../../assets/images/kab.png`) },
  { id: 7, text: "Бел арка", x: getw(24), y: geth(42), img: require(`../../assets/images/bel-arka.png`) },
  { id: 8, text: "Баш", x: getw(48), y: geth(44.5), img: require(`../../assets/images/bash.png`) },
  { id: 9, text: "Күн жилик", x: getw(43), y: geth(31), img: require(`../../assets/images/kun-jilik.png`) },
  { id: 10, text: "Куймулчак", x: getw(39), y: geth(38), img: require(`../../assets/images/kuimul.png`) },
];