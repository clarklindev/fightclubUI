// import React, { forwardRef } from 'react'
// import styled from 'styled-components'

// const WrapperContainer = styled.div`
//   type: ${({ type }) => type};
//   overflow: hidden;
//   box-sizing: border-box;
//   height: auto;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-grow: 1;
//   outline: none;
//   padding: 10px;
//   border: ${({ theme }) => theme?.Input?.border || 'var()'};
//   border-radius: ${({ theme }) => theme?.Input?.borderRadius || 'var()'};
//   max-height: ${({ theme }) => theme?.Input?.inputHeight || 'var()'};
// `

// const InputElement = styled.input`
//   box-sizing: border-box;
//   cursor: text;
//   outline: none;
//   width: 100%;

//   padding: 10px;
//   border-radius: ${({ theme }) => theme?.Input?.borderRadius || 'var()'};
//   height: ${({ theme }) => theme?.Input?.inputHeight || 'var()'};
//   border: ${({ theme }) => theme?.Input?.border || 'var()'};
// `

// export const InputWrapper = ({ children }) => {
//   return <WrapperContainer>{children}</WrapperContainer>
// }

// const Input = forwardRef(function Input(
//   {
//     type = 'text',
//     onChange,
//     placeholder,
//     className,
//     savedData,
//     readonly,
//     ...rest
//   },
//   ref,
// ) {
//   return (
//     <InputElement
//       onChange={onChange}
//       value={savedData}
//       placeholder={placeholder}
//       type={type}
//       className={className}
//       readOnly={readonly}
//       ref={ref}
//       {...rest}
//     />
//   )
// })

// export default Input

const Input = () => {}

export default Input
