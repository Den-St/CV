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
    ${Media.up.xxxl}{
        width: 100%;
        max-width: unset;
    }
    ${Media.up.xxxs}{
        width: 100%;
        max-width: unset;
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

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;


