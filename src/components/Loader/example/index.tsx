import React from 'react'
import Heading from '../../Heading'
import Loader from '../index'

const LoaderExample = () => {
  return (
    <>
      <Heading variation="h4">Loader</Heading>
      <div className="flex flex-col gap-10">
        <Loader progress={25} size={30} />
        <Loader progress={50} size={30} />
        <Loader progress={75} size={30} />
        <Loader progress={100} size={30} />
      </div>
    </>
  )
}

export default LoaderExample
