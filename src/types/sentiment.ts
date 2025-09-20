import { SENTIMENTS } from '@/constants';

type SentimentKey = keyof typeof SENTIMENTS;
export type Sentiment = (typeof SENTIMENTS)[SentimentKey];
