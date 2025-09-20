import { PredictTable } from '@/components';

export default function Home() {
  return (
    <PredictTable
      data={[
        {
          id: 1,
          text: 'test',
          topics: ['test-topic', 'test-topic-2'],
          sentiments: ['негативный', 'нейтральный'],
        },
        {
          id: 2,
          text: 'test-1',
          topics: ['test-topic-3', 'test-topic-4'],
          sentiments: ['негативный', 'положительный'],
        },
      ]}
    />
  );
}
