import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/color'
import { LocationIco } from '../../assets/icon'

const LocationBtn = () => {
  return (
    <BackGround>
        <LocationIco/>
    </BackGround>
  )
}

const BackGround = styled.button`
width: 48px;
height: 48px;
border-radius: 48px;
border: none;
box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.10);
background-color: ${colors.white};

display: flex;
align-items: center;
justify-content: center;
`
export default LocationBtn