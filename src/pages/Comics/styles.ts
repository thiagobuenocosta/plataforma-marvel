import styled from 'styled-components';

import EsmaagaImage from '../../assets/images/esmaaga.png';


export const CharacteresContent = styled.div`
    padding-top: 6rem;
    
    display: flex;

    section {
        width: 18.062rem;
        height: 27.43rem;  
        border-radius: 1.875rem;
        background-image: url(${ EsmaagaImage });
        background-position: 0rem 0rem, center;
        background-size: 18.062rem 27.43rem;
        
        display: flex;
        align-items: flex-end;
    }

    section + section {
        margin-left: 7.25rem;
    }

    section + button {
        margin-left: 5rem;
        color: var(--red-100);
        background: transparent;
        border: none;
        
        svg {
            width: 2.875rem;
            height: 2.937rem;
        }
    }
`;

export const CharacteresArticle = styled.article`
    width: 18.062rem;
    height: 14.625rem;
    border-radius: 1.875rem;
    background: linear-gradient(var(--red-100) 30%, transparent);
    padding: 1.75rem 1.43rem 1rem 1.43rem;

    h1 {
        font-family: AxiformaBold;
        font-weight: bold;
        font-size: 1.25rem;
        text-align: center;
    }

    p {
        height: 7.687rem;
        font-family: AxiformaThin;
        font-size: 0.75rem;
        text-align: left;
    }

    a {
        width: 100%;
        display: inline-block;
        position: relative;
        font-family: AxiformaThin;
        font-size: 1.25rem;
        background: transparent;
        color: var(--white-100);
        text-align: center;

        transition: filter 0.2s font-size 0.2s;

        &:hover {
            filter: brightness(0.9);
            font-size: 1.29rem;
        }
    }
`;