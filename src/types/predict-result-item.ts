import { PredictItem } from './predict-item';
import { Sentiment } from './sentiment';

export interface PredictResultItem extends PredictItem {
  topics: string[];
  sentiments: Sentiment[];
  date: Date;
}
