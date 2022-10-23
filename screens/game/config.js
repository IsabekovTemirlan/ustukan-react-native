import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window')?.width;
const screenHeight = Dimensions.get('window')?.height;

export const getw = (percent) => (screenWidth / 100) * percent;
export const geth = (percent) => (screenHeight / 100) * percent;

export const persons = [
  { id: 1, title: 'Чон Ата', x: getw(25), y: geth(18), posibleItems: [1,2] },
  { id: 2, title: 'Чоң эне', x: getw(55), y: geth(18), posibleItems: [1,2] },
  { id: 3, title: 'Ата', x: getw(80), y: geth(28), posibleItems: [3,4] },
  { id: 4, title: 'Апа', x: getw(80), y: geth(40), posibleItems: [3,4] },
  { id: 5, title: 'Куда', x: getw(80), y: geth(52), posibleItems: [1,2] },
  { id: 6, title: 'Кудача', x: getw(25), y: geth(62), posibleItems: [9] },
  { id: 7, title: 'Келин', x: getw(55), y: geth(62), posibleItems: [10] },
  { id: 8, title: 'Бала', x: getw(2), y: geth(28), posibleItems: [1] },
  { id: 9, title: 'Кыз', x: getw(2), y: geth(40), posibleItems: [6] },
  { id: 10, title: 'Жезде', x: getw(2), y: geth(52), posibleItems: [7] },
];

export const itemsObjects = [
  { id: 1, text: "Жамбаш", x: getw(26), y: geth(33) },
  { id: 2, text: "Жото жилик", x: getw(59), y: geth(32) },
  { id: 3, text: "Кашка жилик", x: getw(62), y: geth(40) },
  { id: 4, text: "Кар жилик", x: getw(61), y: geth(50) },
  { id: 5, text: "Далы", x: getw(43), y: geth(51.5) },
  { id: 6, text: "Карчыганын кабыргалары", x: getw(25), y: geth(50) },
  { id: 7, text: "Бел омурткалар", x: getw(24), y: geth(42) },
  { id: 8, text: "Баш", x: getw(48), y: geth(44.5) },
  { id: 9, text: "Куймулчак", x: getw(43), y: geth(31) },
  { id: 10, text: "Бел омуртка", x: getw(39), y: geth(38) },
];