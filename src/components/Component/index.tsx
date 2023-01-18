import { Main } from "../Main"
import { SideBar } from "../SideBar"
import { Container } from "./styles"

export const Component = () => {
    return <Container>
        <SideBar/>
        <Main/>
    </Container>
}