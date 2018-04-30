import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import PasswordRestoreScreen from './screens/PasswordRestoreScreen';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
    render() {
        const MainNavigator = TabNavigator({
            auth: {screen: AuthScreen},
            passwordRestore: {screen: PasswordRestoreScreen},
            main: {screen: MainScreen}
        }, {
            navigationOptions: {
                tabBarVisible: false
            },
            animationEnabled: true
        });

        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}