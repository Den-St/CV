import { Avatar, Container, Name, Position, TextContainer } from "./styles"

export const Header = () => {
    return <Container>
        <Avatar/>
        <TextContainer>
            <Name>Denis Stuenko</Name>
            <Position>React Frontend Developer</Position>
        </TextContainer>
    </Container>
}