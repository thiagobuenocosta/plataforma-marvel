import { Link, useLocation } from 'react-router-dom';
import { Achor } from './styles';

interface ActiveLinkProps {
    pathRoute: string;
    nameRoute: string;
}

export function ActiveLink({ pathRoute, nameRoute }: ActiveLinkProps) {
    const { pathname } = useLocation();

    const className = (pathname === pathRoute)
        ? 'active'
        : ''

    return (
        <Link to={ pathRoute }>
            <Achor className={ className }>{ nameRoute }</Achor>
        </Link>
    );
}