import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FoodDashboard from '../components/Food-Dashboard';
import FoodApp from '../components/Food-App';
import NotFoundPage from '../components/NotFoundPage';
import FoodHeader from '../components/Food-Header';
import FoodFooter from '../components/Food-Footer';
import FoodItem from '../components/Food-Item';

const AppRouter = () => (
    <BrowserRouter>
        <>
            <FoodHeader />
            <Switch>
                <Route path="/" component={FoodDashboard} exact={true} />
                <Route path="/food" component={FoodApp} />
                <Route path="/food-item" component={FoodItem} />
                <Route component={NotFoundPage} />
            </Switch>
            <FoodFooter />
        </>
    </BrowserRouter>
);

export default AppRouter;