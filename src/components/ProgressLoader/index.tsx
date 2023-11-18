import React from 'react';
import styled from 'styled-components';

type ProgressLoaderProps = {
  progress: number; // Progress as a percentage
  size?: number; // Circle size in pixels
  strokeWidth?: number; // Stroke width in pixels
  color?: string;
};

export const ProgressLoader = ({
  progress,
  size = 15,
  strokeWidth = 1,
  color = 'currentColor',
}: ProgressLoaderProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (progress / 100) * circumference;
  const viewBoxSize = size; // Adjust viewBox size to accommodate strokeWidth

  return (
    <ProgressLoaderWrapper width={size} height={size} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      <circle
        className="circle"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        r={radius}
        cx={viewBoxSize / 2}
        cy={viewBoxSize / 2}
        transform={`rotate(-90 ${viewBoxSize / 2} ${viewBoxSize / 2})`}
      />
    </ProgressLoaderWrapper>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------

const ProgressLoaderWrapper = styled.svg``;
