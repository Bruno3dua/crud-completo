import { Container, Wrapper } from "./styles";

export function Input({ onChange: OnChange, type: Type = 'text', value: Value, label: Label, ...rest }) {

    return (
        <>
            <Wrapper>
                <label >{Label}</label>
                <Container type={Type} onChange={OnChange} value={Value} />
            </Wrapper>
        </>
    )
}