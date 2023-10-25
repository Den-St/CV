import { styled } from "styled-components";
import { Media } from "../../assets/breakpoints";

export const ProjectsContainer = styled.dl`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 5px;
    margin: 0;
`;

export const ProjectContainer = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 10px;
`;

export const Link = styled.a`
    font-size: 16px;
    font-weight: 100;
    text-decoration: none;
    color:black;
    &:hover{
        text-decoration: underline;
    }
    ${Media.down.m} {
        color: white;
    }
`;

export const ProjectName = styled.dt`
    font-size: 20px;
    margin-bottom: 5px;
    margin: 0;
    color: #505050;
    display: flex;
    align-items: center;
    gap: 5px;
    ${Media.down.m} {
        color: white;
    }
`;

export const ProjectDescription = styled.dd`
    margin: 0;
    font-size: 16px;
    font-weight: 100;
    padding-left: 20px;
`;

export const Tecnologies = styled.ul`
    margin: 0;
    padding-left: 25px;
`;

export const Technology = styled.li`
`;

export const TechnologyHeader = styled.p`
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 0;
`;