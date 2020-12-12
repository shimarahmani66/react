import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Course from '../components/courses/Course';
import Login from '../components/login/Login';
import Register from '../components/register/Register'
import { Route, Switch } from 'react-router-dom';
import Archive from '../components/courses/Archive';
import Single from '../components/courses/Single';
import Account from '../components/account/Account';

const Toplearn = () => {
    return (

    <MainLayout>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/archive" component={Archive}/>
            <Route path="/course" component={Single}/>
            <Route path="/account" component={Account}/>
            <Route path="/" exact component={Course}/>
        </Switch>
        
    </MainLayout>
    );

}
export default Toplearn;