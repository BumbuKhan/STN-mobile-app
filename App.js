import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';

export default class App extends Component {
    render() {
        const MainNavigator = TabNavigator({
            auth: {screen: AuthScreen},
            // main: { screen: MainScreen }
        }, {
            navigationOptions: {
                tabBarVisible: false
            }
        });

        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}