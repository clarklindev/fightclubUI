import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { Icon, Separator } from '../';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from '../../icons';

// ------------------------------------------------------------------------------------------------------------------------------------------------

export type AccordionDataType = {
  title: string;
  body: React.ReactElement | string;
};

type AccordionIconType = 'plusminus' | 'hidden' | 'chevron';

type AccordionProps = {
  data: Array<AccordionDataType>;
  multiOpen?: boolean;
  iconType?: AccordionIconType;
  showSeparator?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  data,
  multiOpen = true,
  iconType = 'plusminus',
  showSeparator = true,
}) => {
  const [indexes, setIndexes] = useState<number[]>([]);

  //@index - filter-out/add or toggle
  const activeIndexesCheck = (index: number) => {
    const found = indexes.includes(index);
    if (multiOpen) {
      if (found) {
        // filter-out
        //if index is in the activeIndexes array... remove it
        setIndexes(indexes.filter(item => item !== index));
      } else {
        //or add
        //add to activeIndexes = Set is unique values
        setIndexes([...new Set([...indexes, index])]);
      }
    } else {
      //toggle
      //only allowed one open at a time
      if (found) {
        //remove it
        setIndexes([]);
      } else {
        //add it
        setIndexes([index]);
      }
    }
  };

  const handleClick = (index: number) => {
    activeIndexesCheck(index);
  };

  const iconMap = {
    chevron: { open: <ChevronUpIcon />, closed: <ChevronDownIcon /> },
    plusminus: { open: <MinusSmallIcon />, closed: <PlusSmallIcon /> },
    hidden: {},
  };

  return (
    <div className="Accordion" role="tablist">
      {data.map((each: AccordionDataType, index: number) => {
        const panelRef = useRef<HTMLDivElement>(null);

        return (
          <React.Fragment key={index}>
            <div className="AccordionSection">
              <AccordionSectionHeader
                className="AccordionSectionHeader"
                role="heading"
                aria-level={3}
                data-separator={showSeparator ? 'true' : 'false'}>
                <AccordionSectionTitle
                  role="button"
                  aria-expanded={indexes.includes(index) ? true : false}
                  aria-controls={`AccordionSectionPanel_${index}`}
                  aria-disabled={false}
                  id={`AccordionSectionTitle_${index}`}
                  tabIndex={0}
                  onClick={() => handleClick(index)}
                  onKeyDown={e => {
                    console.log(e.key);
                    switch (e.key) {
                      case 'Enter':
                      case ' ':
                        handleClick(index);
                        break;
                    }
                  }}>
                  {each.title}
                  {iconType !== 'hidden' && (
                    <Icon size="30px">
                      {indexes.includes(index)
                        ? iconMap[iconType].open
                        : iconMap[iconType].closed}
                    </Icon>
                  )}
                </AccordionSectionTitle>
              </AccordionSectionHeader>

              <AccordionSectionPanel
                className="AccordionSectionPanel"
                role="region"
                aria-labelledby={`AccordionSectionTitle_${index}`}
                id={`AccordionSectionPanel_${index}`}
                ref={panelRef}
                data-expanded={indexes.includes(index) ? 'true' : 'false'}
                scrollHeight={String(panelRef?.current?.scrollHeight)}>
                <AccordionSectionPanelContent
                  data-separator={showSeparator ? 'true' : 'false'}>
                  {each.body}
                </AccordionSectionPanelContent>
              </AccordionSectionPanel>
            </div>
            {showSeparator && <Separator />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// AccordionSection
const AccordionSectionHeader = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--clr-foreground);

  margin-bottom: 0px;
  margin-top: 0px;

  &[data-separator='true'] {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

const AccordionSectionTitle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const AccordionSectionPanel = styled.div<{
  scrollHeight: string;
}>`
  overflow: hidden;
  color: ${({ theme }) =>
    (theme && theme?.Accordion?.content?.color) || 'var()'};

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-in-out;
    max-height: ${({ scrollHeight }) => scrollHeight + 'px'};
  }
`;

const AccordionSectionPanelContent = styled.div`
  padding: 20px 0;

  &[data-separator='true'] {
    padding: 0 0 20px 0;
  }
`;
