import React from 'react'
import styled from 'styled-components'

const ProgressLoaderCircle = styled.circle`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
`
interface ProgressLoaderProps {
  progress: number // Progress as a percentage
  size: number // Circle size in pixels
}

const ProgressLoader: React.FC<ProgressLoaderProps> = ({ progress, size }) => {
  const radius = size / 2 - size / 10
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (progress / 100) * circumference
  const transform = `rotate(-90 ${size / 2} ${size / 2})`

  return (
    <svg width={size} height={size}>
      <ProgressLoaderCircle
        className="circle"
        strokeWidth={size / 10}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashoffset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={transform}
      />
    </svg>
  )
}

export default ProgressLoader
