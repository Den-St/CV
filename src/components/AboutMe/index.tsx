import { aboutMeItems } from "../../consts/aboutMe"
import { AboutMeContainer, AboutMeItem } from "./styles"

export const AboutMe = () => {
    return <AboutMeContainer>
        {aboutMeItems.map(aboutMeItem => <AboutMeItem key={aboutMeItem.id}>{aboutMeItem.text}</AboutMeItem>)}
    </AboutMeContainer>
}