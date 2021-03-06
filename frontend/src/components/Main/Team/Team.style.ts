import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    color: ${props => props.theme.body};
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid ${props => props.theme.body};
    width: fit-content;
`;

export const Container = styled(motion.div)`
    width: 74%;
    height: 70%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100%;
    height: 70%;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`;
