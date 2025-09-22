export const dateToChartFormat = (date: Date) => {
  return `${date.getDate()} ${date.toLocaleString('ru-RU', { month: 'short' })}`;
};
