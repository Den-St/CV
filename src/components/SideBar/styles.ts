import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.article`
    background-color: #363638;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 90px 0 40px 0 ;
    width: 30%;
    max-width: 500px;
    box-sizing: border-box;
    ${Media.down.m} {
        width: 100%;
        padding-top: 60px;
        gap: 20px;
    }
    
`;

export const AvatarContainer = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ececee;
    ${Media.down.m} {
        height: 100px;
        justify-content: space-around;
    }

`;

export const NameContainer = styled.header`
    flex-direction: column;
    justify-content: center;
    background-color: #ececee;
    box-sizing: border-box;
    gap: 5px;
    padding-left: 0px;
    display: none;
    ${Media.down.m} {
        display: flex;
    }
    ${Media.up.xxxl} {
        width: 100%;
    }
`;

export const Name = styled.h1`
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0;
    display: none;
    ${Media.down.m} {
        display: block;
        font-size: 18px;
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
        font-size: 18px;
    }
`;

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #cdcdd0;
    box-sizing: border-box;
    background:white;
    object-fit:contain;
    ${Media.down.m} {
        width: 90px;
        height: 90px;
    }
`; 

export const Break = styled.br`
    display: none;
    ${Media.down.m} {
        display: block;
    }
`;

export const ItemContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 80%;
    color:white;
    ${Media.down.m} {
        gap: 4px;
    }
`;

export const Header = styled.h2`
    font-size: 22px;
    font-weight: 100;
    color:white;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
    margin: 15px 0;
    ${Media.down.m} {
        font-size: 20px;
        margin: 10px 0;
    }
`;
