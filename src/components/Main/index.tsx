import { EnvironmentOutlined } from "@ant-design/icons"
import { AboutMe } from "../AboutMe"
import { Languages } from "../Languages"
import { Projects } from "../Projects"
import { Container, Name, NameContainer, Position,Location, MainContainer, Header, ItemContainer, } from "./styles"

export const Main = () => {
    return <Container>
        <NameContainer>
            <Name>Denis Stuenko <Location><EnvironmentOutlined /> Odessa, Ukraine</Location></Name>
            <Position>React Frontend-Developer</Position>
        </NameContainer>
        <MainContainer>
            <ItemContainer>
                <Header>About me</Header>
                <AboutMe/>
            </ItemContainer>
            <ItemContainer>
                <Header>Languages</Header>
                <Languages/>
            </ItemContainer>
            <ItemContainer>
                <Header>Projects</Header>
                <Projects/>
            </ItemContainer>
        </MainContainer>
    </Container>
}
