import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Icon, Label } from '@/components';
import { ChevronRightIcon, ChevronDownIcon } from '@/icons';

import styles from './styles.module.css';

interface TreeNodeCommonProps {
  label: string;
}

interface TreeNodeProps extends TreeNodeCommonProps {
  children: Array<TreeNodeProps | TreeEndNodeProps>;
}

interface TreeEndNodeProps extends TreeNodeCommonProps {
  path: string;
}

type TreeProps = {
  data: Array<TreeNodeProps | TreeEndNodeProps>;
  depth?: number;
};

const Tree = ({ data, depth = 0 }: TreeProps) => {
  const [childrenVisible, setNodeVisible] = useState<string[]>([]);

  const openNodeHandler = (depth: number, index: number) => {
    console.log(`depth: ${depth}, index:${index}`);
    const found = childrenVisible.includes(`${depth}-${index}`);
    if (found) {
      // filter-out
      //if index is in the activeIndexes array... remove it
      setNodeVisible(childrenVisible.filter(path => path !== `${depth}-${index}`));
    } else {
      //or add
      //add to activeIndexes = Set is unique values
      setNodeVisible([...new Set([...childrenVisible, `${depth}-${index}`])]);
    }
  };

  return data.map((item, index: number = 0) => {
    if (item.hasOwnProperty('children')) {
      //TreeNode
      const { label, children } = item as TreeNodeProps;
      const childRef = useRef<HTMLDivElement | null>(null);
      const depthAndIndexStr = `${depth}-${index}` as string;

      return (
        <div
          className="flex flex-col justify-start items-start"
          data-component={Tree.displayName}
          key={`depth_${depth}_index_${index}`}>
          <button onClick={() => openNodeHandler(depth, index)}>
            <Label label={label}>
              <Icon size="M">
                {childrenVisible.includes(depthAndIndexStr) ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </Icon>
            </Label>
          </button>
          <div
            className={styles.Node}
            ref={childRef}
            // scrollHeight={String(childRef?.current?.scrollHeight)}
            style={{ display: 'flex', flexDirection: 'column' }}
            data-expanded={childrenVisible.includes(`${depth}-${index}`) ? 'true' : 'false'}>
            <Tree data={children} depth={depth + 1} />
          </div>
        </div>
      );
    }

    if (item.hasOwnProperty('path')) {
      //TreeEndNode
      const { label, path } = item as TreeEndNodeProps;
      return (
        <NavLink to={path} key={`depth_${depth}_index_${index}`}>
          {label}
        </NavLink>
      );
    }
  });
};

Tree.displayName = 'Tree';
export { Tree };
// ------------------------------------------------------------------------------------------------------------------------------------------------
