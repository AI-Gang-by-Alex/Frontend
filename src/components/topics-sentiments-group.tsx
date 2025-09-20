import { Sentiment } from '@/types';

import { FC } from 'react';
import { Text } from '@mantine/core';

import { SentimentRound } from './sentiment-round';

interface TopicsSentimentsGroupProps {
  topics: string[];
  sentiments: Sentiment[];
}

export const TopicsSentimentsGroup: FC<TopicsSentimentsGroupProps> = props => {
  const pairs = (
    <>
      {props.topics.map((topic, idx) => (
        <div className={'flex justify-between'}>
          <Text>{topic}</Text>
          <SentimentRound sentiment={props.sentiments[idx]} />
        </div>
      ))}
    </>
  );

  return <div className={'flex flex-col gap-2'}>{pairs}</div>;
};
