import { SentimentKey } from './sentiment';

export type SentimentsCount = {
  [K in SentimentKey as Lowercase<K>]: number;
};
