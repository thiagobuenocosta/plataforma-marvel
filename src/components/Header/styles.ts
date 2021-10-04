import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 7.125rem;
   
    &::after {
        content: '';
        height: 0.525rem;
        width: 100%;
        position: absolute;
        background: linear-gradient(var(--red-100), var(--red-800));
        filter: brightness(0.5)
    }    
`;

export const HeaderContent = styled.div`
    height: 7.125rem;
    margin: 0 auto;
    padding: 0 3.125rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
        width: 7.625rem;
        height: 3.375rem;
        background: var(--red-100);

        display: flex;
        align-items: center;
        justify-content: center;
        
        h1 { 
            width: 6.437rem;
            height: 2.25rem;
            font-weight: normal;
            font-family: MarvelRegular;
            font-size: 3.125rem;
            padding-bottom: 2.5rem;
        }
    }

    nav {
        width: 46.625rem;
        height: 3.375rem;
        margin-right: 2rem;
        padding-top: 4.65rem;

        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        button {
            background: var(--gray-950);
            color: var(--gray-600);
            font-family: AxiformaLight;
            border: 0;
            font-size: 1.25rem;

            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: 3.437rem;
                height: 3.437rem;
                border-radius: 3rem;
            }
    
            span {
                margin-left: 0.8rem;
                margin-top: 1.125rem;
            }
        }
    }


        
`;