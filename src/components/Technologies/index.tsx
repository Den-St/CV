import { Skill, SkillDirContainer, SkillHeader, Skills } from "./styles"
import {technologiesItems} from '../../consts/technologies';
export const Technologies = () => {
    return <>
        {technologiesItems.map(tecnology => 
            <SkillDirContainer key={tecnology.id}>
                <SkillHeader>{tecnology.typeName}:</SkillHeader>
                <Skills>
                    {tecnology.technologies.map(technologyName => <Skill key={technologyName}>{technologyName}, </Skill>)}
                </Skills>
            </SkillDirContainer>
        )}
    </>
}