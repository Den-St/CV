import { styled } from 'styled-components';
import { Media } from '../../assets/breakpoints';

export const Skills = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
`;

export const SkillDirContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Skill = styled.p`
    font-size: 16px;
    font-weight:100;
    color: #eaeaea;
    margin: 0;
`;

export const SkillHeader = styled.h3`
    font-size: 18px;
    color:white;
    margin: 0 0 3px 0;
    ${Media.down.m} {
        font-weight: 400;
    }
`;


