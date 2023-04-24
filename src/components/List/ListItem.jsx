import React from 'react';

const ListItem = ({ data: { firstname, lastname, email, index } }) => {
  return (
    <li className='flex flex-col mb-5 last:mb-0'>
      <div className='flex justify-between'>
        {firstname} {lastname}
      </div>
      <div>{email}</div>
    </li>
  );
};

export default ListItem;
