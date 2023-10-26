import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    div {
        /* border: 1px solid red; */
    }

    :root {
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    } 

    body, input, button, textarea {
        font-family: 'inter', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
        border-radius: 1rem;
        margin: 5px;
    }
    ::-webkit-scrollbar {
        width: 1rem;

    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        border-radius: 1rem;

    }
    
    svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
    } 
`