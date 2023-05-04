import React from 'react'
import styled from 'styled-components'

const LoaderCircle = styled.circle`
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
`
interface LoaderProps {
  progress: number // Progress as a percentage
  size: number // Circle size in pixels
}

const Loader: React.FC<LoaderProps> = ({ progress, size }) => {
  const radius = size / 2 - size / 10
  const circumference = 2 * Math.PI * radius
  const dashoffset = circumference - (progress / 100) * circumference
  const transform = `rotate(-90 ${size / 2} ${size / 2})`

  return (
    <svg width={size} height={size}>
      <LoaderCircle
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

export default Loader
