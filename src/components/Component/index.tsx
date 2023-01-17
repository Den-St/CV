import { Header } from "../Header"
import { Main } from "../Main"
import { SideBar } from "../SideBar"
import { Container } from "./styles"

export const Component = () => {
    return <Container>
        {/* <Header/> */}
        <SideBar/>
        <Main/>
    </Container>
}