import React, { useLayoutEffect, useRef } from 'react';
import * as s from './Header.style';

import Logo from '../Logo/Logo';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import connect from '../../lib/web3/connect';

const Header = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;

        const tl = gsap.timeline();
        tl.to(element, {
            position: 'fixed',
            top: '1rem',
            left: '50%',
            width: '80%',
            transform: 'translateX(-50%)',

            padding: '',
            borderRadius: '50px',
            border: '3px solid white',

            scrollTrigger: {
                trigger: element,
                start: 'bottom+=200 top',
                end: '+=200',
                scrub: true,
            },
        });

        return () => {
            tl.kill();
        };
    }, []);
    return (
        <s.Header ref={ref}>
            <s.Nav>
                <Logo />

                <s.Menu>
                    <s.MenuItem>HOME</s.MenuItem>
                    <s.MenuItem>NFT</s.MenuItem>
                    <s.MenuItem>STORY</s.MenuItem>
                    <s.MenuItem>TEAM</s.MenuItem>
                    <s.MenuItem>ROADMAP</s.MenuItem>
                    <s.MenuItem>FAQ</s.MenuItem>

                    <s.SnsMenu>
                        <a href="#">d</a>
                        <a href="#">d</a>
                        <a href="#">d</a>
                        <a href="#">d</a>
                    </s.SnsMenu>
                </s.Menu>

                <s.Button onClick={() => connect('Kaikas')}>Connect Wallet</s.Button>
            </s.Nav>
        </s.Header>
    );
};

export default Header;
