import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    position: absolute;
    left: 5rem;
    top: 5rem;
    width: 4rem;
    height: 4rem;
    
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
`