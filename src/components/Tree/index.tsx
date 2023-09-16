import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, LabelSomething } from '../';
import { ChevronRightIcon, ChevronDownIcon } from '../../icons/';

// recursive function - destruct off props

type TreeProps = {
  data: object;
  depth: number;
};

export const Tree: React.FC<TreeProps> = ({ data, depth = 0 }) => {
  const [childrenVisible, setChildrenVisible] = useState([]);

  const openChildrenHandler = (depth: number, index: number) => {
    console.log(`depth: ${depth}, index:${index}`);
    const found = childrenVisible.includes(`${depth}-${index}`);
    if (found) {
      // filter-out
      //if index is in the activeIndexes array... remove it
      setChildrenVisible(childrenVisible.filter(path => path !== `${depth}-${index}`));
    } else {
      //or add
      //add to activeIndexes = Set is unique values
      setChildrenVisible([...new Set([...childrenVisible, `${depth}-${index}`])]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map(({ label = undefined, path, children = undefined }, index) => {
        const childRef = useRef();
        return (
          <TreeContainer
            key={`depth_${depth}_index_${index}`}
            style={{ display: 'inline-flex', flexDirection: 'column' }}
            data-depth={[`${depth}`]}
            data-node={[`${path}`]}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              {children ? (
                <button onClick={() => openChildrenHandler(depth, index)}>
                  <LabelSomething
                    label={label}
                    something={
                      <Icon size="15px">
                        {childrenVisible.includes(`${depth}-${index}`) ? <ChevronDownIcon /> : <ChevronRightIcon />}
                      </Icon>
                    }
                  />
                </button>
              ) : (
                <NavLink to={path}>{label}</NavLink>
              )}

              {children && (
                <Node
                  ref={childRef}
                  scrollHeight={String(childRef?.current?.scrollHeight)}
                  style={{ display: 'flex', flexDirection: 'column' }}
                  data-parent={[`${path}`]}
                  data-expanded={childrenVisible.includes(`${depth}-${index}`) ? 'true' : 'false'}>
                  <Tree data={children} depth={parseInt(depth) + 1} parent={path} />
                </Node>
              )}
            </div>
          </TreeContainer>
        );
      })}
    </div>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------

const TreeContainer = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`;

const Node = styled.div`
  box-sizing: border-box;
  margin-left: 6px;
  padding-left: 15px;
  border-left: 1px solid currentColor;
  display: block;

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-out;
    max-height: auto;
  }
`;
