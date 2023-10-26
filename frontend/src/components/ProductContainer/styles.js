import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 13rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    
    display: flex;
    align-items: center;

    border-radius: 1rem;

    margin-bottom: .5rem;

    position: relative;
`

export const ButtonWrapper = styled.div`
    position: absolute;
    top: .5rem;
    right: .5rem;
    display: flex;
    gap: .5rem;

    >:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.RED};
    }
`

export const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;
    gap: .5rem;

    >p {
        color: lightgray;
    }

    >h4>span {
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`

