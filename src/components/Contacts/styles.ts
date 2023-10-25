import { styled } from "styled-components";

export const ContactItemContainer = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    .anticon{
        font-size: 25px;
    }
`;

export const Contact = styled.p`
    font-size: 18px;
    font-weight: 100;
    margin: 0;
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