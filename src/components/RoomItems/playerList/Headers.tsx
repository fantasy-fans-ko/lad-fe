import React from 'react';

const headerItems = [
  {
    id: 1,
    name: 'Players',
  },
  {
    id: 2,
    name: 'Teams',
  },
];

const Headers = () => {
  return (
    <div className='flex flex-row bg-gray-700 text-white items-stretch relative '>
      {
        headerItems.length > 0 && headerItems.map(item => (
          <HeaderItem key={item.id} name={item.name} />
        ))
      }
    </div>
  );
};

interface propParam {
  name: string;
}

const HeaderItem = ({ name }: propParam) => {

  return (
    <button
      className='flex justify-center flex-1 relative py-1 border-r-4 last:border-none border-gray-700 hover:after:border-blue-500
      after:m-auto after:-bottom-1 after:w-full after:absolute after:inset-x-0 after:border-gray-400 after:border-b-4 after:box-border'
      type='button'>
      {name}
    </button>
  );
};

export default Headers;
