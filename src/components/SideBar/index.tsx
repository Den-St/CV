import { Avatar, AvatarContainer, Contact, ContactItemContainer, ContactLink, Container, Header, ItemContainer, Skill, SkillDirContainer, SkillHeader, Skills } from "./styles"
import {GithubOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';

export const SideBar = () => {
    return <Container>
        <AvatarContainer>
            <Avatar src=""/>
        </AvatarContainer>
        <ItemContainer>
            <Header>Contacts</Header>
            <ContactItemContainer>
                <PhoneOutlined /> <Contact>067 71 64 955</Contact>
            </ContactItemContainer>
            <ContactItemContainer>
                <GithubOutlined /> <ContactLink href="https://github.com/Den-St">https://github.com/Den-St</ContactLink>
            </ContactItemContainer>
            <ContactItemContainer>
                <MailOutlined /> <Contact>stuenkden@gmail.com</Contact>
            </ContactItemContainer>
        </ItemContainer>
        
        <ItemContainer>
            <Header>Technologies</Header>
                <SkillDirContainer>
                    <SkillHeader>Languages:</SkillHeader>
                    <Skills>
                        <Skill>JavaScript, </Skill>
                        <Skill>TypeScript </Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>Tools for layout:</SkillHeader>
                    <Skills>
                        <Skill>HTML, </Skill>
                        <Skill>CSS, </Skill>
                        <Skill>StyledComponents (React library), </Skill>
                        <Skill>Ant-design (React ui-kit library)</Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>Frameworks:</SkillHeader>
                    <Skills>
                        <Skill>React, </Skill>
                        <Skill>NextJs(framework for SSR React), </Skill>
                        <Skill>NestJs(framework for Node.js) </Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>State managers:</SkillHeader>
                    <Skills>
                        <Skill>Redux, </Skill>
                        <Skill>Redux ToolKit, </Skill>
                        <Skill>ReduxThunk, </Skill>
                        <Skill>Recoil </Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>Query tools:</SkillHeader>
                    <Skills>
                        <Skill>GraphQl, </Skill>
                        <Skill>Apollo client, </Skill>
                        <Skill>Axios</Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>Databases:</SkillHeader>
                    <Skills>
                        <Skill>Postgres, </Skill>
                        <Skill>MongoDB</Skill>
                    </Skills>
                </SkillDirContainer>
                <SkillDirContainer>
                    <SkillHeader>Other:</SkillHeader>
                    <Skills>
                        <Skill>React-hook-form</Skill>
                        <Skill>React-router-dom</Skill>
                    </Skills>
                </SkillDirContainer>
        </ItemContainer>
    </Container>
}