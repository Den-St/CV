import { EnvironmentOutlined,GithubOutlined } from "@ant-design/icons"
import { Container, Name, NameContainer, Position,Location, MainContainer, Header, ItemContainer, AboutMe, Projects, ProjectContainer, ProjectName, ProjectDescription, TechnologyHeader, Tecnologies, Technology, LanguageContainer, Language, LanguageRating, Links, Link} from "./styles"

export const Main = () => {
    return <Container>
        <NameContainer>
            <Name>Denis Stuenko <Location><EnvironmentOutlined /> Odessa, Ukraine</Location></Name>
            <Position>React Frontend-Developer</Position>
        </NameContainer>
        <MainContainer>
            <ItemContainer>
                <Header>About me</Header>
                <AboutMe>
                    Studying at college at 3rd course.<br/>
                    Studying programming for 4 years.<br/>
                    Studying frontend-developing for 1 year.<br/>
                </AboutMe>
            </ItemContainer>
            <ItemContainer>
                <Header>Languages</Header>
                <LanguageContainer>
                    <Language>English</Language>
                    <LanguageRating>B2</LanguageRating>
                </LanguageContainer>
                <LanguageContainer>
                    <Language>Ukrainian</Language>
                    <LanguageRating>C2</LanguageRating>
                </LanguageContainer>
                <LanguageContainer>
                    <Language>Russian</Language>
                    <LanguageRating>C2</LanguageRating>
                </LanguageContainer>
            </ItemContainer>
            <ItemContainer>
                <Header>Projects</Header>
                <Projects>
                    <ProjectContainer>
                        <ProjectName>1) Online-store</ProjectName>
                        <Links>
                            <Link href="https://github.com/Den-St/Online-store-client">
                                client:https://github.com/Den-St/Online-store-client
                            </Link>
                            <Link href="https://github.com/Den-St/Online-store-server">
                                server:https://github.com/Den-St/Online-store-server
                            </Link>
                        </Links>
                        <ProjectDescription>
                            For this project i wrote both client and server sides.
                            <TechnologyHeader>Technologies that used for client side:</TechnologyHeader>
                                <Tecnologies>
                                    <Technology>
                                            React
                                    </Technology>
                                    <Technology>
                                            Recoil
                                    </Technology>
                                    <Technology>
                                            Styled-Components
                                    </Technology>
                                    <Technology>
                                            GraphQL
                                    </Technology>
                                    <Technology>
                                            Ant-design
                                    </Technology>
                                </Tecnologies>
                                <TechnologyHeader>Technologies that used for server side:</TechnologyHeader>
                                <Tecnologies>
                                    <Technology>
                                    
                                            NestJs
                                        
                                    </Technology>
                                    <Technology>
                                            GraphQL
                                    </Technology>
                                    <Technology>
                                            Postgres
                                    </Technology>
                                </Tecnologies>
                        </ProjectDescription>
                    </ProjectContainer>
                    <ProjectContainer>
                        <ProjectName>2) Forum </ProjectName>
                        <Links>
                            <Link href="https://github.com/Den-St/Questy-client">
                                client:https://github.com/Den-St/Questy-client
                            </Link>
                            <Link href="https://github.com/Den-St/Questy-server">
                                server:https://github.com/Den-St/Questy-server
                            </Link>
                        </Links>
                        <ProjectDescription>
                            For this project i wrote both client and server sides.
                            <TechnologyHeader>Technologies that used for client side:</TechnologyHeader>
                                <Tecnologies>
                                    <Technology>
                                            React
                                    </Technology>
                                    <Technology>
                                            Redux ToolKit
                                    </Technology>
                                    <Technology>
                                            NextJs
                                    </Technology>
                                    <Technology>
                                            Styled-Components
                                    </Technology>
                                    <Technology>
                                            Axios
                                    </Technology>
                                    <Technology>
                                            Ant-design
                                    </Technology>
                                </Tecnologies>
                                <TechnologyHeader>Technologies that used for server side:</TechnologyHeader>
                                <Tecnologies>
                                    <Technology>
                                            NestJs
                                    </Technology>
                                    <Technology>
                                            Postgres
                                    </Technology>
                                </Tecnologies>
                        </ProjectDescription>
                    </ProjectContainer>
                </Projects>
            </ItemContainer>
        </MainContainer>
    </Container>
}