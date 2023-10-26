import { projects } from "../../consts/projects"
import { ProjectsContainer, ProjectContainer, ProjectName, Links, Link, ProjectDescription, TechnologyHeader, Tecnologies, Technology } from "./styles"

export const Projects = () => {
    return <ProjectsContainer>
    {projects.map(project => <ProjectContainer key={project.id}>
        <ProjectName>{project.id}) {project.name}</ProjectName>
        <Links>
            {project.links.map(link => 
                <Link key={link.href} href={link.href}>
                    {link.name}:{link.href}
                </Link>
            )}
        </Links>
        <ProjectDescription>
            {project.description}
            <TechnologyHeader>Technologies that used for client side:</TechnologyHeader>
            <Tecnologies>
                {project.technologies.client.map(technology => 
                    <Technology>
                        {technology}
                    </Technology>
                )}
            </Tecnologies>
            {project.technologies.server?.length && <TechnologyHeader>Technologies that used for server side:</TechnologyHeader>}
            <Tecnologies>
                {project.technologies.server?.map(technology => 
                    <Technology>
                        {technology}
                    </Technology>
                )}
            </Tecnologies>
        </ProjectDescription>
    </ProjectContainer>)}
</ProjectsContainer>
}