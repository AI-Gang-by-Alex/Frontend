import { Sentiment, SentimentKey, SentimentsCount } from '@/types';

import { SENTIMENTS } from '@/constants';

export const countSentiments = (sentiments: Sentiment[]): SentimentsCount => {
  const findAllBySentimentKey = (sentimentKey: SentimentKey) =>
    sentiments.filter(
      otherSentiment => otherSentiment === SENTIMENTS[sentimentKey],
    );

  return {
    positive: findAllBySentimentKey('POSITIVE').length,
    negative: findAllBySentimentKey('NEGATIVE').length,
    neutral: findAllBySentimentKey('NEUTRAL').length,
  };
};
