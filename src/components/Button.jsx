import React from 'react'
import styled from "styled-components";


const Button = () => {
    return (
        <>
            <StyledButton variant='primary'>Primary Button</StyledButton>
            <br />
            <br />
            <StyledButton>Secondary Button</StyledButton>
            <br />
            <br />
            <FancyButton>Fancy Button</FancyButton>
        </>
    )
}

export default Button

const StyledButton = styled.button`
  background: ${props => props.variant === 'primary' ? '#29d153' : '#fff'};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem;
  padding: 10px;
  cursor: pointer;
`

const FancyButton = styled(StyledButton)`
    background: linear-gradient(to right, #10c6ea, #b71ada);
`