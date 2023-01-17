import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #ececee;
`;

export const Avatar = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid #cdcdd0;
`; 

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.h1`
    font-size: 28px;
    font-weight: 100;
    letter-spacing: 2px;
`;

export const Position = styled.h1`
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1px;
`;