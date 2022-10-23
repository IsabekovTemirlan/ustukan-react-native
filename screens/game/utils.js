export const isNear = (target, item) => {
  const dx = Math.abs((target.x + 30) - item.x);
  const dy = Math.abs((target.y - 10) - item.y);
  return ((dx + dy) < 60);
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getUniqueRandomNumbers = (quantity, max) => {
  const set = new Set()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
  }
  return [...set];
}

export const getRundomItemsFromArray = (arr, limit) => {
  let itemsRundomNumber = getRandomInt(3, arr.length - 1);
  if (limit && limit >= itemsRundomNumber) itemsRundomNumber = limit;
  const uniqIndexs = getUniqueRandomNumbers(itemsRundomNumber, arr.length - 1);
  return arr.filter((_, idx) => uniqIndexs.includes(idx));
}