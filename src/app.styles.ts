import styled from 'styled-components';

export const Nav = styled.nav` 
    font-size: 18px;
    position: sticky;
    top: 0;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`

export const Li = styled.li`
    font-size: 24px;
    margin: 0 1.5rem;
`

export const StyledError = styled.p`
    font-size: 20px;
`
