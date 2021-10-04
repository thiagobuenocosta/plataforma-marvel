import styled from "styled-components";

import AvengersImage from '../assets/images/avengersPages.png';


export const Container = styled.main`
    height: 638.4px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-image: 
        linear-gradient(to right, var(--gray-950), var(--gray-700) 54%, transparent 90%),
        url(${ AvengersImage })
    ;
    background-position: 125.7% 73%;
    background-repeat: no-repeat;
`;