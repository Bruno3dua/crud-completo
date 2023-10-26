import { Container } from "./styles";

export function Button({ title, ...rest }) {
    return (
        <Container
            type="submit"
            {...rest}
        >
            {title}
        </Container>
    )
}