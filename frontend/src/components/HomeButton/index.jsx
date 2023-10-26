import { Container } from "./styles";

export function HomeButton({ icon: Icon, ...rest }) {

    return (
        <Container
            type="button"
            {...rest}
        >
            {Icon && <Icon size={50} />}
        </Container>
    )
}