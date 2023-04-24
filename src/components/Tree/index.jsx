import React from 'react';

// recursive function - destruct off props
const Tree = ({ data, depth = 0 }) => {
  return data.map(({ item, children }, index) => {
    return (
      <div
        key={`depth_${depth}_index_${index}`}
        style={{ display: 'inline-flex', flexDirection: 'column' }}
        data-depth={[`${depth}`]}
        data-node={[`${item}`]}
      >
        <button>node: {item}</button>

        {children && (
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            data-parent={[`${item}`]}
          >
            <Tree data={children} depth={parseInt(depth) + 1} parent={item} />
          </div>
        )}
      </div>
    );
  });
};

export default Tree;
