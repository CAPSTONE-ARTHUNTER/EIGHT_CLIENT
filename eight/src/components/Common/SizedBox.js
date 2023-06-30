import React from 'react'
import styled from 'styled-components'

const SizedBox = ({width, height}) => {
  return (
    <Container width={width} height={height}/>
  )
}
const Container = styled.div`
width: ${(props)=> props.width? props.width+'px': '0px'};
height: ${(props)=> props.height? props.height+'px': '0px'};
`
export default SizedBox