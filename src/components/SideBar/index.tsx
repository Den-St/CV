import { Avatar, AvatarContainer, Container, Location, Header, ItemContainer, Name, NameContainer, Position, Break } from "./styles"
import {EnvironmentOutlined} from '@ant-design/icons';
import { Contacts } from "../Contacts";
import { Technologies } from "../Technologies";
import MyPhoto from '../../assets/MyPhoto.jpg';

export const SideBar = () => {
    return <Container>
        <AvatarContainer>
            <Avatar src={MyPhoto}/>
            <NameContainer>
                <Name>Denis Stuenko <Break/><Location><EnvironmentOutlined /> Odessa, Ukraine</Location></Name>
                <Position>React Frontend-Developer</Position>
            </NameContainer>
        </AvatarContainer>
        <ItemContainer>
            <Header>Contacts</Header>
            <Contacts/>
        </ItemContainer>
        <ItemContainer>
            <Header>Technologies</Header>
                <Technologies/>
        </ItemContainer>
    </Container>
}