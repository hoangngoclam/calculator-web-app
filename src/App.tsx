/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CalculatorPage } from './pages';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CalculatorPage}>
                    <CalculatorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
