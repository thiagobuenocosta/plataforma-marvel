import styled from "styled-components";

export const Achor = styled.a`
    font-family: AxiformaBold;
    font-weight: bold;
    font-size: 1.875rem;
    color: var(--gray-600);

    transition: color 0.2s;

    &:hover {
        color: var(--white-100);
    }

    &.active {
        color: var(--white-100);
    }
`;
