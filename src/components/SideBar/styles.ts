import styled from "styled-components";

export const Container = styled.div`
    background-color: #363638;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 90px 0 40px 0 ;
    width: 30%;
`;

export const AvatarContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ececee;
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #cdcdd0;
`; 

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 80%;
    color:white;
`;

export const Header = styled.h1`
    font-size: 22px;
    font-weight: 100;
    color:white;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
`;

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
`;

export const SkillDirContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Skill = styled.span`
    font-size: 16px;
    font-weight:100;
    color: #eaeaea;
`;

export const SkillHeader = styled.span`
    font-size: 18px;
    color:white;
    margin-bottom: 3px;
`;

export const ContactItemContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    .anticon{
        font-size: 25px;
    }
`;

export const Contact = styled.span`
    font-size: 18px;
    font-weight: 100;
`;

export const ContactLink = styled.a`
    font-size: 18px;
    font-weight: 100;
    text-decoration: none;
    color:white;
    border-radius: 3px;
    &:hover{
        text-decoration: underline;
    }
`;
