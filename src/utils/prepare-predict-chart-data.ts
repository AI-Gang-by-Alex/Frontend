import {
  PredictChartDataItem,
  PredictResultItem,
  SentimentsCount,
} from '@/types';

import { countSentiments } from './count-sentiments';
import { dateToChartFormat } from './date-to-chart-format';
import { mergeSentimentsCount } from './merge-sentiments-count';

export const preparePredictChartData = (
  data: PredictResultItem[],
): PredictChartDataItem[] => {
  const preparedDataMap: Map<string, SentimentsCount> = new Map();

  for (const item of data) {
    const dateChartFormat = dateToChartFormat(item.date);
    const oldItem = preparedDataMap.get(dateChartFormat);
    const countedSentiments = countSentiments(item.sentiments);

    if (!oldItem) {
      preparedDataMap.set(dateChartFormat, countedSentiments);
    } else {
      preparedDataMap.set(
        dateChartFormat,
        mergeSentimentsCount(oldItem, countedSentiments),
      );
    }
  }

  return Array.from(preparedDataMap, ([date, obj]) => ({
    date,
    ...obj,
  }));
};
