import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.article`
    background-color: #f9f9f9;
    padding-top: 90px;
    padding-bottom: 90px;
    width: 70%;
    max-width: 1100px;
    box-sizing: border-box;
    ${Media.down.m} {
        width: 100%;
        color:white;
        background-color: #363638;
        padding-top: 0;
    }
`;

export const NameContainer = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color: #ececee;
    padding-left: 50px;
    box-sizing: border-box;
    ${Media.down.m} {
        display: none;
        height: 100px;
        gap: 7px;
        padding-left: 20px;
    }
`;

export const Name = styled.h1`
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
    ${Media.down.m} {
        font-size: 22px;
        letter-spacing: 2px;
    }
`;

export const Location = styled.span`
    font-size: 16px;
    font-weight: 100;
`;

export const Position = styled.h1`
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1px;
    margin: 0;
    ${Media.down.m} {
        font-size: 20px;
    }
`;

export const MainContainer = styled.main`
    padding-left: 50px;
    padding-top: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${Media.down.m} {
        gap: 15px;
        align-items: center;
        padding-left: 0;
        padding-top: 0;
    }
`;

export const Header = styled.h2`
    font-size: 22px;
    font-weight: 100;
    padding-bottom: 3px;
    border-bottom: 1px solid black;
    margin: 15px 0;
    ${Media.down.m} {
        border-bottom: 1px solid white;
    }
`;

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const Language = styled.span`
    font-size: 20px;
    font-weight: 100;
    ${Media.down.m} {
        font-size: 18px;
    }
`;

export const LanguageRating = styled.span`
    font-size: 22px;
    ${Media.down.m} {
        font-size: 20px;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

`;

export const AboutMe = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 100;
`;

export const Projects = styled.dl`
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