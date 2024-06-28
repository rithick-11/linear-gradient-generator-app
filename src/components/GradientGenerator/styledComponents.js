import styled from 'styled-components'

export const GradientContainer = styled.div`
    background-image: linear-gradient(to ${prop => prop.direction}, ${prop =>
      prop.color1}, ${prop => prop.color2});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 100vh;
`
