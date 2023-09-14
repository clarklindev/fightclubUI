import React from 'react';

export const ListItem: React.FC<{
  firstname: string;
  lastname: string;
  email: string;
}> = ({ firstname, lastname, email }) => {
  return (
    <li className="flex flex-col mb-5 last:mb-0">
      <div className="flex justify-between">
        {firstname} {lastname}
      </div>
      <div>{email}</div>
    </li>
  );
};
