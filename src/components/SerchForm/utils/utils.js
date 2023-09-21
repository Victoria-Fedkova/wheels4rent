export const priceOptions = cars => {
  let options = [];
  const prices = [...new Set(cars.map(item => item.rentalPrice.slice(1)))];
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const start = Math.round(min / 10) * 10;
  const end = Math.round(max / 10) * 10;

  for (let i = start; i <= end; i += 10) {
    options.push({ value: i, label: `${i}` });
  }
  return options;
};

export const modelOptions = cars => {
  const models = [...new Set(cars.map(item => item.make))];
  return models.map(item => ({
    value: item,
    label: `${item}`,
  }));
};
