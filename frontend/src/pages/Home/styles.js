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
    gap: 2rem;
`

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    padding: .5rem;
    flex-direction: column;
    height: 60rem;
    border-radius: 1rem;
    overflow-y: scroll;
`