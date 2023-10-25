import { styled } from "styled-components";
import { Media } from "../../assets/breakpoints";

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