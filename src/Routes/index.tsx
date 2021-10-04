import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Characteres } from '../pages/Characteres';
import { Comics } from '../pages/Comics';
import { Films } from '../pages/Films';

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/characteres'} component={ Characteres } />
                <Route exact path={'/comics'} component={ Comics } />
                <Route exact path={'/films'} component={ Films } />
            </Switch>
        </BrowserRouter>
    );
}