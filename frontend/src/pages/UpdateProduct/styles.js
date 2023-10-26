import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Wrapper = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
