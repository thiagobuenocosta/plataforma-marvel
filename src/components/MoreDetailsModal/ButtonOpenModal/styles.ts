import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    display: inline-block;
    position: relative;
    border: none;
    font-family: AxiformaThin;
    font-size: 1.25rem;
    background: transparent;
    color: var(--white-100);
    text-align: center;

    transition: filter 0.2s font-size 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;