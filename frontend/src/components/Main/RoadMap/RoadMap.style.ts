import styled from 'styled-components';

export const Section = styled.section`
    height: 200vh;
    width: 100vw;
`;

export const Title = styled.h1`
    color: black;
    text-transform: uppercase;
    margin: 2rem auto;
    border-bottom: 2px solid black;
    width: fit-content;
`;

export const Container = styled.div`
    width: 74%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Line = styled.div`
    width: 2px;
    height: 100%;
    background-color: black;

    position: absolute;
    top: 0rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const Items = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:nth-of-type(2n) {
        justify-content: start;
    }

    & > *:nth-of-type(2n + 1) {
        justify-content: end;
    }
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    margin: 1rem auto;
`;

export const ItemContainer = styled.div`
    width: 40%;
    height: 100%;
    padding: 1rem;

    position: relative;
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;

    background-color: #d9d9d9;
`;

export const BallTop = styled.div`
    background-color: #c7c7c7;
    padding: 1rem;
    border-radius: 50%;

    position: absolute;
    bottom: 83%;
    left: 50%;
    transform: translateX(-50%);
`;

export const RowLine = styled.div`
    width: 10px;
    height: 2px;
    background-color: black;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const VerticalLine = styled.div`
    width: 1.5px;
    height: 30px;
    background-color: black;

    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;

    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 13px solid black;
    border-right: 13px solid transparent;

    position: absolute;
    left: 50%;
    bottom: 100%;
`;
