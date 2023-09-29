import React from 'react';

type ListDataProp = {
  data: {
    firstname: string;
    lastname: string;
    email: string;
    index: number;
  };
};

export const ListItem: React.FC<ListDataProp> = props => {
  const { data } = props;
  console.log(data);
  const { firstname, lastname, email, index } = data;
  return (
    <li className="flex flex-col mb-5 last:mb-0">
      <div className="flex justify-between">
        {firstname} {lastname}
      </div>
      <div>{email}</div>
    </li>
  );
};
