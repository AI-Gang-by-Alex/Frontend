import { PredictResultItem } from '@/types';

import { preparePredictChartData } from '@/utils';

import { PredictChart, PredictTable } from '@/components';

export default function Home() {
  const testData = [
    {
      id: 1,
      text: 'test',
      topics: ['test-topic', 'test-topic-2'],
      sentiments: ['негативный', 'нейтральный'],
      date: new Date(),
    },
    {
      id: 2,
      text: 'test-1',
      topics: ['test-topic-3', 'test-topic-4'],
      sentiments: ['негативный', 'положительный'],
      date: new Date(),
    },
    {
      id: 3,
      text: 'test-2',
      topics: ['test-topic-3', 'test-topic-4'],
      sentiments: ['негативный', 'положительный'],
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      id: 4,
      text: 'test-3',
      topics: ['test-topic-3', 'test-topic-4'],
      sentiments: ['негативный', 'положительный'],
      date: new Date(),
    },
    {
      id: 5,
      text: 'test-3',
      topics: ['test-topic-3', 'test-topic-4', 'test-topic-10'],
      sentiments: ['негативный', 'положительный', 'положительный'],
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: 6,
      text: 'test-6',
      topics: ['test-topic-3', 'test-topic-4', 'test-topic-10'],
      sentiments: ['негативный', 'положительный', 'положительный'],
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
  ] as PredictResultItem[];

  return (
    <div className={'flex flex-col gap-16'}>
      <PredictTable data={testData} />
      <PredictChart data={preparePredictChartData(testData)} />
    </div>
  );
}
