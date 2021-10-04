/* eslint-disable jsx-a11y/anchor-is-valid */
import { ActiveLink } from './ActiveLink';
import { HeaderContainer, HeaderContent } from './styles';

const menuItemsMookie = [
    { 
        pathRoute: '/characteres',
        nameRoute: 'Personagens' 
    }, 
    { 
        pathRoute: '/films',
        nameRoute: 'Filmes' 
    }, 
    { 
        pathRoute: '/comics',
        nameRoute: 'HQs' 
    }, 
]

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <span>
                    <h1>MARVEL</h1>
                </span>

                <nav>

                    {menuItemsMookie.map( menuItem => (
                        <ActiveLink key={ menuItem.pathRoute } pathRoute={ menuItem.pathRoute } nameRoute={ menuItem.nameRoute } />
                    ))}

                    <button type="button">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GgMbmyyGCAeOa5BxR14s_lI4qMiAKqEEU-CXG_s8BA=s360-p-rw-no" alt="icon" />

                        <span>Sair</span>
                    </button>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    );
}