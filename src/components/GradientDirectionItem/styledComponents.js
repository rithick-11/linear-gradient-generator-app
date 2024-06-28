import styled from 'styled-components'

export const DirectonBtn = styled.button`
    color: #014f7b;
    opacity: ${prop => (prop.active ? '1' : '0.5')};
    padding: 6px 12px;
    border-radius: .5rem;
    background-color: #fff;
`
