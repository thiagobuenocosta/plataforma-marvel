import { createGlobalStyle } from 'styled-components';
import MarvelRegular from '../assets/fonts/marvel-font/MarvelRegular.ttf';
import AxiformaBold from '../assets/fonts/axiforma-font/AxiformaBold.otf';
import AxiformaLight from '../assets/fonts/axiforma-font/AxiformaLight.otf';
import AxiformaMedium from '../assets/fonts/axiforma-font/AxiformaMedium.otf';
import AxiformaRegular from '../assets/fonts/axiforma-font/AxiformaRegular.otf';
import AxiformaThin from '../assets/fonts/axiforma-font/AxiformaThin.otf';


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: MarvelRegular;
        src: url(${ MarvelRegular });
        font-weight: normal;
    }

    @font-face {
        font-family: AxiformaBold;
        src: url(${ AxiformaBold });
        font-weight: 600;
    }

    @font-face {
        font-family: AxiformaLight;
        src: url(${ AxiformaLight });
        font-weight: normal;
    }

    @font-face {
        font-family: AxiformaMedium;
        src: url(${ AxiformaMedium });
        font-weight: normal;
    }

    @font-face {
        font-family: AxiformaRegular;
        src: url(${ AxiformaRegular });
        font-weight: 300;
    }

    @font-face {
        font-family: AxiformaThin;
        src: url(${ AxiformaThin });
    }

    :root {
        --red-100: #ff0000;
        --red-800: #400E0E;

        --gray-500: #84848d;
        --gray-600: #707070;
        --gray-700: #303030;
        --gray-950: #000000;

        --white-100: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--gray-950);
        color: var(--white-100);
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .react-modal-overlay {
        background: linear-gradient(to right, var(--gray-950) 60%, transparent);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 41.187rem;
        height: 27.437rem;
        background: var(--red-100);
        padding: 0;
        position: relative;
        border-radius: 1.875rem;
        display: flex;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;