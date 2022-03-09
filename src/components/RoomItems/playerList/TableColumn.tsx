import React from 'react';

type columnType = {
  key: number,
  name: string,
  sort?: 'ASC' | 'DESC'
}

const columnItems: columnType[] = [
  { key: 1, name: 'Rank' },
  { key: 2, name: 'Pre Rank' },
  { key: 3, name: 'Player' },
  { key: 4, name: 'FG%' },
  { key: 5, name: 'FT%' },
  { key: 6, name: '3PT%' },
  { key: 7, name: 'PTS' },
  { key: 8, name: 'REB' },
  { key: 9, name: 'AST' },
  { key: 10, name: 'ST' },
  { key: 11, name: 'BLK' },
  { key: 12, name: 'TO' },
  { key: 13, name: 'TD' },
];

const TableColumn = () => {
  return (
    <tr>
      {
        columnItems.length > 0 && columnItems.map(item => (
          <TableColumnItem key={item.key} name={item.name} />
        ))
      }
    </tr>
  );
};

interface propParam {
  name: string;
}

const TableColumnItem = ({ name }: propParam) => {

  return (
    <th scope='col'>
      <button type='button' className='text-xs font-bold text-black px-6 py-1 whitespace-nowrap'>
        {name}
      </button>
    </th>
  );
};

export default TableColumn;
