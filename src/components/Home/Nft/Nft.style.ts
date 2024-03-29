import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../../styles/variouble';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;

    background-color: #000000;
    outline: 3px solid black;
    box-sizing: border-box;

    @media (${device.mobile}) {
        height: 90vh;
    }

    @media (${device.mobileSM}) {
        height: 80vh;
    }
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 5rem;
    border-bottom: 2px solid white;
    width: fit-content;
`;

export const SliderContainer = styled(motion.div)<{ count: number }>`
    margin-top: 3rem;
    height: 70%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .swiper-slide {
        background-color: transparent;
        /* color: black; */

        width: ${props => `calc(100vw / ${props.count})`};
        height: ${props => `calc(100vw / ${props.count})`};
        /* border-radius: 50%; */

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;

        border: 1px solid #55d1b3;
        box-shadow: 0px 4px 4px 0px #55d1b3;
    }
`;

export const Nft = styled.div<{ bg: string; count: number }>`
    width: 100%;
    height: 100%;

    /* border-radius: 50%; */

    background-image: url(${props => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: cover;
`;

export const OpenSea = styled(motion.div)`
    margin-top: 7rem;

    padding: 0.6rem 2rem;
    border-radius: 20px;
    border: 0;
    outline: 0;
    font-weight: 800;

    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    /* transition: color 0.3s ease, transform 0.3s ease; */
    img {
        width: 1.5rem;
        height: 1.5rem;

        margin-right: 0.5rem;
    }

    &:hover {
        transform: scale(1.1);
    }
`;
