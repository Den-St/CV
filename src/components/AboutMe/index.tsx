import { aboutMeItems } from "../../consts/aboutMe"
import { AboutMeContainer, AboutMeItem, AboutMeLink } from "./styles"

export const AboutMe = () => {
    return <AboutMeContainer>
        {aboutMeItems.map(aboutMeItem => <AboutMeItem key={aboutMeItem.id}>
            {aboutMeItem.text}
            <AboutMeLink href={aboutMeItem.link} target={'_blank'}>
                {aboutMeItem.link}
            </AboutMeLink>
        </AboutMeItem>)}
    </AboutMeContainer>
}