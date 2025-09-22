import { SentimentsCount } from './sentiments-count';

export interface PredictChartDataItem extends SentimentsCount {
  date: string;
}
