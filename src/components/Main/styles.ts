import styled from "styled-components";

export const Container = styled.div`
    background-color: #f9f9f9;
    padding-top: 90px;
    width: 100%;
`;

export const NameContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color: #ececee;
    padding-left: 50px;
    box-sizing: border-box;
`;

export const Name = styled.h1`
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
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
`;


export const MainContainer = styled.div`
    padding-left: 50px;
    padding-top: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Header = styled.h1`
    font-size: 22px;
    font-weight: 100;
    padding-bottom: 3px;
    border-bottom: 1px solid black;
`;

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const Language = styled.span`
    font-size: 20px;
    font-weight: 100;
`;

export const LanguageRating = styled.span`
    font-size: 22px;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`;

export const AboutMe = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 100;
`;

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
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
`;

export const ProjectName = styled.h1`
    font-size: 20px;
    margin-bottom: 5px;
    margin: 0;
    color: #505050;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const ProjectDescription = styled.p`
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

export const TechnologyHeader = styled.div`
    font-size: 18px;
    margin-top: 5px;
`;