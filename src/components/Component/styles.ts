import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    font-family:helvetica;
    ${Media.down.m} {
        flex-direction: column;
    }  
`;