import styled from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    align-items: center;

    > img { 
        width: 18.062rem;
        height: 27.43rem;  
        border-radius: 1.875rem;
        
    }

    > div {
        margin-left: 2.5rem;

        > img {
            width: 3rem;
            height: 2.937rem;  
            border-radius: 0.562rem;
        }
    }

    > button {
        color: var(--white-100);
        
        > svg {
            width: 1.828rem;
            height: 1.828rem;  
        }
    }
`;