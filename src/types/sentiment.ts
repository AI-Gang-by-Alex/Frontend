import { SENTIMENTS } from '@/constants';

export type SentimentKey = keyof typeof SENTIMENTS;
export type Sentiment = (typeof SENTIMENTS)[SentimentKey];
