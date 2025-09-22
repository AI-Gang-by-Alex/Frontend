import { SentimentsCount } from '@/types';

export const mergeSentimentsCount = (
  ...sentimentsCountItems: SentimentsCount[]
) => {
  return sentimentsCountItems.reduce(
    (acc, currentValue) => {
      return {
        positive: acc['positive'] + currentValue['positive'],
        negative: acc['negative'] + currentValue['negative'],
        neutral: acc['neutral'] + currentValue['neutral'],
      };
    },
    { positive: 0, negative: 0, neutral: 0 },
  );
};
