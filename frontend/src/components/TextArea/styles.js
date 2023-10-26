import styled from "styled-components";

export const Container = styled.textarea`  
    width: 100%;
    height: 15rem;
    padding: 1.5rem;
    
    border-radius: 1rem;

    border: none;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`