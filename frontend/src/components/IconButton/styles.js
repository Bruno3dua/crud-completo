import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 4rem;
    height: 4rem;
    
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    color: black;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`