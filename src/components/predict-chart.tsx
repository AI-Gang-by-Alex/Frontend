import { PredictChartDataItem } from '@/types';

import { FC } from 'react';
import { LineChart } from '@mantine/charts';

import { SENTIMENTS } from '@/constants';

interface PredictChartProps {
  data: PredictChartDataItem[];
}

export const PredictChart: FC<PredictChartProps> = props => {
  return (
    <LineChart
      h={300}
      data={props.data}
      dataKey="date"
      tooltipAnimationDuration={200}
      series={[
        { name: 'positive', color: 'green.6', label: SENTIMENTS.POSITIVE },
        { name: 'neutral', color: 'yellow.6', label: SENTIMENTS.NEUTRAL },
        { name: 'negative', color: 'red.6', label: SENTIMENTS.NEGATIVE },
      ]}
      curveType="linear"
    />
  );
};
