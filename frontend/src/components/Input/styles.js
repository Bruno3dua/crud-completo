import styled from "styled-components";

export const Container = styled.input`  
    width: 100%;
    height: 5rem;
    padding-left: 1.5rem;
    
    border-radius: 1rem;

    border: none;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`