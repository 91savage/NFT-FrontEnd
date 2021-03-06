import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navAtom } from '../../../lib/recoil/atoms';
import delay from '../../../lib/utils/delay';
import * as s from './MenuLink.style';

interface IProps {
    title: string;
    link: string;
    isScroll?: boolean;
    matchValue?: string;
}
const MenuLink = ({ title, link, isScroll = false }: IProps) => {
    const [navState, setNavState] = useRecoilState(navAtom);
    const matchRoute = useMatch(link);
    const match: boolean = isScroll ? navState === link : !!matchRoute;
    const navigate = useNavigate();
    const { scroll } = useLocomotiveScroll();

    const handleClick = () => {
        const href = isScroll ? '/' : `/${link}`;
        navigate(href);
        delay(() => {
            if (isScroll) {
                const element = document.querySelector('#' + link) as HTMLElement;
                // element.scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'start',
                //     inline: 'nearest',
                // });
                scroll.scrollTo(element, {
                    offset: '0',
                    duration: '1000',
                    easing: [0.25, 0.0, 0.35, 1.0],
                    // disableLerp: false,
                });
            }
        }, 150);
    };
    return (
        <>
            <s.MenuItem match={match} onClick={handleClick}>
                {title}
            </s.MenuItem>
        </>
    );
};

export default MenuLink;
