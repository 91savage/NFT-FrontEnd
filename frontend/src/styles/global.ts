import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize};

    *, *::before, *::after{
        margin:0;
        padding:0;
    }
    body{
        overflow-x: hidden;
        background: linear-gradient(#8bc605, #6CA33D);
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    // locomotive scroll no flickering
    .has-scroll-smooth {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

export default GlobalStyle;
