import { Sentiment } from '@/types';

import { FC } from 'react';
import clsx from 'clsx';

import { SENTIMENTS } from '@/constants';

interface SentimentRoundProps {
  sentiment: Sentiment;
}

export const SentimentRound: FC<SentimentRoundProps> = props => {
  return (
    <div
      className={clsx('size-4 rounded-full', {
        'bg-red-400': props.sentiment === SENTIMENTS.NEGATIVE,
        'bg-yellow-400': props.sentiment === SENTIMENTS.NEUTRAL,
        'bg-green-400': props.sentiment === SENTIMENTS.POSITIVE,
      })}
    />
  );
};
