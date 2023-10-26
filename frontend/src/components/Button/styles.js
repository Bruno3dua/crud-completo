import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 1rem;
    height: 5rem;
    border: none;
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.WHITE};
`