import { PredictResultItem } from '@/types';

import { FC } from 'react';
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';

import { TopicsSentimentsGroup } from './topics-sentiments-group';

interface PredictTableProps {
  data: PredictResultItem[];
}

export const PredictTable: FC<PredictTableProps> = props => {
  const rows = props.data.map(item => (
    <TableTr key={item.id}>
      <TableTd>{item.id}</TableTd>
      <TableTd>{item.text}</TableTd>
      <TableTd>
        <TopicsSentimentsGroup
          topics={item.topics}
          sentiments={item.sentiments}
        />
      </TableTd>
    </TableTr>
  ));

  return (
    <Table withTableBorder withColumnBorders withRowBorders striped>
      <TableThead>
        <TableTr>
          <TableTh>id</TableTh>
          <TableTh>Комментарий</TableTh>
          <TableTh>Темы и тональность</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>{rows}</TableTbody>
    </Table>
  );
};
